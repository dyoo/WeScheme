package org.wescheme.keys;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.cache.CacheException;
import javax.jdo.PersistenceManager;

import org.wescheme.util.Crypt;
import org.wescheme.util.PMF;
import org.wescheme.util.Crypt.KeyNotFoundException;


public class KeyManager {
	static Logger logger = Logger.getLogger(KeyManager.class.getName());

	static public int KEY_SIZE = 8;

	
	/**
	 * Returns the keySchedule.
	 * 
	 * Possible side effect: may need to add the schedule entries
	 * into the database.
	 * @return
	 */
	private static List<KeySwappingSchedule> getKeySchedule() {
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			List<KeySwappingSchedule> keySchedule = new ArrayList<KeySwappingSchedule>();
			keySchedule.add(KeySwappingSchedule.getInstance(pm, "freshKey", "staleKey", KEY_SIZE, 1));
			keySchedule.add(KeySwappingSchedule.getInstance(pm, "dailyKey", "staleDailyKey", KEY_SIZE, 24));
			keySchedule.add(KeySwappingSchedule.getInstance(pm, null, "freshKey", KEY_SIZE, 1));
			keySchedule.add(KeySwappingSchedule.getInstance(pm, null, "dailyKey", KEY_SIZE, 24));
			return keySchedule;
		} finally {
			pm.close();
		}
	}

	
	public static Crypt.Key getKey(String keyName) {
		return Crypt.Key.getInstance(keyName, KEY_SIZE);
	}
	
	
	/**
	 * Performs a clock tick on all of the elements in the Schedule.
	 * @throws KeyNotFoundException
	 * @throws CacheException
	 */
	public static void clockTick() {
		logger.info("clockTick called");
		for (KeySwappingSchedule s : getKeySchedule()){
			s.clockTick();
		}
	}


	public static Crypt.Token generateToken(String text, String keyName){
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			try {
				Crypt.Key k = Crypt.Key.getInstance(keyName, KEY_SIZE);
				return generateToken(text, k);
			} catch (Exception e) {
				return null;
			}
		} finally {
			pm.close();
		}
	}

	private static Crypt.Token generateToken(String text, Crypt.Key k){
		return new Crypt.Token(text, k);
	}

}
