package org.wescheme.user;
import java.util.Arrays;

import javax.cache.CacheException;
import javax.jdo.JDOObjectNotFoundException;
import javax.jdo.PersistenceManager;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
import javax.jdo.Transaction;

import org.wescheme.servlet.ConfirmationServlet;
import org.wescheme.util.Crypt;
import org.wescheme.util.PMF;
import org.wescheme.util.Crypt.KeyNotFoundException;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

// WeSchemeUser provides an alternative authentication schema to Google Apps Engine.

@PersistenceCapable()
public class WeSchemeUser{

    @PrimaryKey
    @Persistent
	private String _name;			
    @Persistent
    private long _salt; 			// salt for password storage
    @Persistent
    private byte[] _digest;			// the hash of the salted password
	@Persistent
	private boolean _active;		// is the account active?
	@SuppressWarnings("unused")
	@Persistent
	private String _email;
	
	public static byte[] makePasswordHash(String password, long salt){
		String p = password + salt;
		return Crypt.hash(p);
	
	}
	
	public long getSalt(){
		return _salt;
	}
	
	public String getName(){
		return _name;
	}
	
	public boolean checkPassword(String password){
		
		return Arrays.equals(_digest, makePasswordHash(password, _salt));
		
	}
	
	public static void createUser(String username, String password, String email) throws UnauthorizedUserException, CacheException, KeyNotFoundException{
		PersistenceManager pm = PMF.getManager();
		Transaction tx = pm.currentTransaction();		
		try {
			tx.begin();
			try{
				Key k = KeyFactory.createKey("WeSchemeUser", username);
				pm.getObjectById(WeSchemeUser.class, k);
				throw new UnauthorizedUserException();
			} catch (JDOObjectNotFoundException e) {
				//TODO Get confirmation e-mail working.
				String key = ConfirmationServlet.sendConfirmationEmail(username, email);
				WeSchemeUser u = new WeSchemeUser(username, password, email, key);
				pm.makePersistent(u);
				tx.commit();
			}
		} finally {
			if(tx.isActive()){
				tx.rollback();
			}
			pm.close();
		} 
	}

	public boolean activate(){
		_active = true;
		return _active;
	}
	
	public boolean isActive(){
		return _active;
	}
	
	WeSchemeUser(String username, String password, String email, String key){
    	_name = username;
    	_salt = Crypt.makeLong();
    	_digest = makePasswordHash(password, _salt);
    	_active = true;
    	_email 	= email;
    }
	
	
	

}	
