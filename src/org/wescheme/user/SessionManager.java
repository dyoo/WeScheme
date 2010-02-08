package org.wescheme.user;

import java.io.IOException;
import java.util.Collections;
import java.util.logging.Logger;

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
	Logger logger = Logger.getLogger(SessionManager.class.getName());
	
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

	/**
	 * Returns a Session if the user has logged in, or null otherwise.
	 * @param req
	 * @param resp
	 * @return
	 */
	public Session authenticate(HttpServletRequest req, HttpServletResponse resp) {
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try { 
			Token userToken	 = (Token) Cookies.getDecodedCookie(req.getCookies(), "token");
			Session userSession = (Session) Cookies.getDecodedCookie(req.getCookies(), "session");
			System.out.println("authenticate: token=" + userToken);
			System.out.println("authenticate: session=" + userSession);
			if (userToken == null || userSession == null) {
				logger.info("missing credentials: returning null session.");
				return null;
			}
			try {		
				CacheFactory cf = CacheManager.getInstance().getCacheFactory();
				Cache cache = cf.createCache(Collections.emptyMap());
				
				Crypt.Key fk = KeyManager.retrieveKey(pm, cache, "freshKey");
				Crypt.Key sk = KeyManager.retrieveKey(pm, cache, "staleKey");

				if( userSession.isValid(userToken, fk) ){
					logger.info("credentials valid.  Returning session.");
					return userSession;
				}
				logger.info("credentials don't match the fresh key.");
				
				if( userSession.isValid(userToken, sk) ){
					logger.info("credentials expired, but has stale key.  Reissuing new session.");
					issueSession(userSession, resp);
					return userSession;
				}
				
				logger.warning("Neither fresh key nor stale key matches credentials.");
			} finally {
				pm.close();
			}
		} catch (Exception e){
			//TODO perhaps we want finer control over errors.
			logger.warning("Exception happened: " + e);
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
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			try {
				CacheFactory cf = CacheManager.getInstance().getCacheFactory();
				Cache cache = cf.createCache(Collections.emptyMap());

				Crypt.Key freshKey = KeyManager.retrieveKey(pm, cache, "freshKey");	

				String serialSession = Base64.encodeObject(session);
				Token token 		 = new Token(serialSession, freshKey);
				String serialToken   = Base64.encodeObject(token);

				resp.addCookie(new Cookie("session", serialSession));
				resp.addCookie(new Cookie("token", serialToken));
			} catch (CacheException e) {
				logger.info("while issuing session, could not ");
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
