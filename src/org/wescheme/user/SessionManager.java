package org.wescheme.user;

import java.io.IOException;
import java.util.Collections;

import javax.cache.Cache;
import javax.cache.CacheException;
import javax.cache.CacheFactory;
import javax.cache.CacheManager;
import javax.jdo.JDOObjectNotFoundException;
import javax.jdo.PersistenceManager;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.keys.KeyManager;
import org.wescheme.util.*;
import org.wescheme.util.Crypt.KeyNotFoundException;
import org.wescheme.util.Crypt.Token;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
public class SessionManager {
	
	// test for POST data double submission to ward against CSRF.
	public boolean isIntentional(HttpServletRequest req, HttpServletResponse resp) {
		String tokenPOST 	= req.getParameter("token");
		Cookie[] cookies 	= req.getCookies();
		String token		= Cookies.getUndecodedCookie(cookies, "token");
		
		if( tokenPOST == null || token == null || tokenPOST.equals("") || token.equals("") ){ 
			System.out.println("Not intentional; tokenPOST = " + tokenPOST + ", tokenCookie=" + token);
			return false; 
		}
		
		if (! tokenPOST.equals(token))
			System.out.println("Not intentional; tokenPOST = " + tokenPOST + ", tokenCookie=" + token);
		return (tokenPOST.equals(token) && (!tokenPOST.equals("")));
		
	}

	
	public Session authenticate(HttpServletRequest req, HttpServletResponse resp) {
			Cache cache;
			PersistenceManager pm = PMF.get().getPersistenceManager();
		try { 
			Token userToken	 = (Token) Cookies.getDecodedCookie(req.getCookies(), "token");
			Session userSession = (Session) Cookies.getDecodedCookie(req.getCookies(), "session");
			System.out.println("authenticate: token=" + userToken);
			System.out.println("authenticate: session=" + userSession);
			if (userToken == null || userSession == null) {
				return null;
			}
			CacheFactory cf;
				try {		
					cf = CacheManager.getInstance().getCacheFactory();
					cache = cf.createCache(Collections.emptyMap());
			
					Crypt.Key fk = KeyManager.retrieveKey(pm, cache, "freshKey");
					Crypt.Key sk = KeyManager.retrieveKey(pm, cache, "staleKey");
				
					if( userSession.isValid(userToken, fk) ){
						return userSession;
					} 
						
					if( userSession.isValid(userToken, sk) ){
						issueSession(userSession, resp);
						return userSession;
					}
				} finally {
					pm.close();
			}
		} catch (Exception e){
			//TODO perhaps we want finer control over errors.
			e.printStackTrace();
			return null;
		}
			return null;
	}
	
	
	
	public Session authGoogle(UserService userService){
		
		boolean isAdmin = false;
	    User user = userService.getCurrentUser();
	    if( user != null){
	    	if( userService.isUserAdmin() && userService.isUserLoggedIn() ){
	    		isAdmin = true;
	    	}
	    return new Session(user, isAdmin);
	    } else {
	    	return null;
	    }
	}
	
	public Session authWeScheme(HttpServletRequest req, HttpServletResponse resp) {
		String username = req.getParameter("user");
    	String password = req.getParameter("password");
    	PersistenceManager pm = PMF.get().getPersistenceManager();
    	if( username != null && password != null ){
    		try {
    			Key k = KeyFactory.createKey("WeSchemeUser", username);
    			WeSchemeUser wu = pm.getObjectById(WeSchemeUser.class, k);
    			
    			if( wu.checkPassword(password) && wu.isActive() ) {
    				return new Session(wu);
    				
    			} else {
    				return null;
    			}
    		} catch (JDOObjectNotFoundException e) {
    			return null;
    		}
    	}
		return null;
    }
	
	public void issueSession(Session session, HttpServletResponse resp) throws KeyNotFoundException, IOException, UnauthorizedUserException{
				
		Cache cache;
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			CacheFactory cf;
			try {
				cf = CacheManager.getInstance().getCacheFactory();
				cache = cf.createCache(Collections.emptyMap());
		
				Crypt.Key freshKey = KeyManager.retrieveKey(pm, cache, "freshKey");	
				
				String serialSession = Base64.encodeObject(session);
				Token token 		 = new Token(serialSession, freshKey);
				String serialToken   = Base64.encodeObject(token);
				
				resp.addCookie(new Cookie("session", serialSession));
				resp.addCookie(new Cookie("token", serialToken));
			} catch (CacheException e) {
				throw new UnauthorizedUserException(); // fail safe
			}
		} finally {
			pm.close();
		}
	}
	
	
	public void login(HttpServletRequest req,  HttpServletResponse resp) throws IOException, KeyNotFoundException{
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try{
		//Attempt to authenticate against Google.
		UserService userService = UserServiceFactory.getUserService();
	    User user = userService.getCurrentUser();
	    Session session = authGoogle(UserServiceFactory.getUserService());
	    if (user != null) {
	    	boolean isAdmin = false;
	    	
	    	if( userService.isUserAdmin() && userService.isUserLoggedIn() ){
		    		isAdmin = true;
		    	}
		    	
		    session = new Session(user, isAdmin);
	    } else {
	    	SessionManager sm = new SessionManager();
	    	session = sm.authWeScheme(req, resp);
	    }
	    
	    
	    
	    if( session != null ){
	    	// install the token into the user's cookie.
		    issueSession(session, resp);
	    	resp.sendError(200);
	    } 	
		} catch (UnauthorizedUserException e) {
			resp.sendError(401);
		} finally {
			pm.close();
		}
	    
	    
	}

	public void logout(HttpServletRequest req, HttpServletResponse resp) {
	    if( true ) { //isIntentional(req, resp) ){
	    	Cookies.removeCookie("session", req, resp);
	    	Cookies.removeCookie("token", req, resp);
	    }
	}
}
