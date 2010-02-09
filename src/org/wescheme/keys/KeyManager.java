package org.wescheme.keys;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.cache.Cache;
import javax.cache.CacheException;
import javax.cache.CacheFactory;
import javax.cache.CacheManager;
import javax.jdo.PersistenceManager;

import org.wescheme.util.Crypt;
import org.wescheme.util.PMF;
import org.wescheme.util.Crypt.KeyNotFoundException;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

public class KeyManager {

	private static List<Schedule> keySchedule;
	
	public static void initializeKeys() throws CacheException{
		Cache cache;
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			CacheFactory cf = CacheManager.getInstance().getCacheFactory();
			cache = cf.createCache(Collections.emptyMap());
	
			keySchedule = new ArrayList<Schedule>();
			keySchedule.add(new Schedule("freshKey", "staleKey", 8, 1));
			keySchedule.add(new Schedule("dailyKey", "staleDailyKey", 8, 24));
			keySchedule.add(new Schedule(null, "freshKey", 8, 1));
			keySchedule.add(new Schedule(null, "dailyKey", 8, 24));
					
			pm.makePersistentAll(keySchedule);
			
			for( Schedule s : keySchedule ){
				s.clockTick(cache, pm);
			}
			
		} finally {
			pm.close();
		}

	}
	
	public static void rotateKeys() throws KeyNotFoundException, CacheException{
		Cache cache;
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			CacheFactory cf = CacheManager.getInstance().getCacheFactory();
			cache = cf.createCache(Collections.emptyMap());
		
			for( Schedule s : keySchedule ){
				s.clockTick(cache, pm);
			}
			
		} finally {
			pm.close();
		}
	}
	
	@SuppressWarnings("unchecked")
	public static void storeKey(PersistenceManager pm, Cache c, Crypt.Key key){
		c.put(key.getName(), key);
		pm.makePersistent(key);
	}
	
	public static Crypt.Key retrieveKey(PersistenceManager pm, Cache c, String key) throws KeyNotFoundException{
		
		Object o = (Crypt.Key) c.get(key);
	
		// attempt to fetch the key from the cache
		if( o != null && o instanceof Crypt.Key ){
			return (Crypt.Key) o;
		} else {
			// failing that, fetch it from persistent memory
			try {
			Key k = KeyFactory.createKey(Key.class.getName(), key);
			// Why would 
			o = pm.getObjectById(Key.class, k);
			return (Crypt.Key) o;	
			} catch (Exception e){
				throw new Crypt.KeyNotFoundException();
			}
		}
	}
	
	public static Crypt.Token generateToken(String text, String keyName){
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			try {
				CacheFactory cf;
				cf = CacheManager.getInstance().getCacheFactory();
				Cache cache = cf.createCache(Collections.emptyMap());
				Crypt.Key k = KeyManager.retrieveKey(pm, cache, keyName);
				return generateToken(text, k);
			} catch (Exception e) {
				return null;
			}
		} finally {
			pm.close();
		}
	}
	
	public static Crypt.Token generateToken(String text, Crypt.Key k){
		return new Crypt.Token(text, k);
	}
	
}
