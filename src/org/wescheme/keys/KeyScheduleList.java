package org.wescheme.keys;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.cache.Cache;
import javax.cache.CacheException;
import javax.cache.CacheFactory;
import javax.cache.CacheManager;
import javax.jdo.Extent;
import javax.jdo.PersistenceManager;
import javax.jdo.annotations.IdGeneratorStrategy;

import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

import org.wescheme.util.PMF;
import org.wescheme.util.CacheHelpers;


@PersistenceCapable
public class KeyScheduleList implements Serializable {
	
    /**
	 * 
	 */
	private static final long serialVersionUID = -783037062058562249L;


	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
    
    @Persistent
	private List<Schedule> schedules;

	
	public Key getKey() { return this.key; }

	
	public KeyScheduleList() {
		this.schedules = new ArrayList<Schedule>();
	
		schedules.add(new Schedule("freshKey", "staleKey", KeyManager.DEFAULT_KEY_SIZE, 1));
		schedules.add(new Schedule("dailyKey", "staleDailyKey", KeyManager.DEFAULT_KEY_SIZE, 24));
		schedules.add(new Schedule(null, "freshKey", KeyManager.DEFAULT_KEY_SIZE, 1));
		schedules.add(new Schedule(null, "dailyKey", KeyManager.DEFAULT_KEY_SIZE, 24));
	}
	
	/*
	 * Returns the singleton instance of the KeyScheduleList.
	 * Either grabs it from the cache or the database.  If all else
	 * fails, creates it from scratch and stuffs the values into the cache
	 * and the database.
	 */
	@SuppressWarnings("unchecked")
	public static KeyScheduleList getInstance() {		
		KeyScheduleList ksFromCache = getKeyScheduleFromCache();
		if (ksFromCache != null) {
			return ksFromCache;
		}

		// If we still can't find the schedule, create it from scratch.
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {	
			KeyScheduleList ksFromDb = getKeyScheduleListFromDatabase(pm);
			if (ksFromDb != null) {
				Cache cache = CacheHelpers.getCache();
				if (cache != null) {
					cache.put("keySchedule", ksFromDb);
				}
				return ksFromDb;
			}
		
			KeyScheduleList freshKsl = new KeyScheduleList();
			pm.makePersistent(freshKsl);
			Cache cache = CacheHelpers.getCache();
			if (cache != null) {
				cache.put("keySchedule", freshKsl);
			}
			return freshKsl;
		} finally {
			pm.close();
		}
	}




	private static KeyScheduleList getKeyScheduleFromCache() {
		Cache cache = CacheHelpers.getCache();
		if (cache != null) {
			if (cache.containsKey("keySchedule") &&
					cache.get("keySchedule") instanceof KeyScheduleList) {
				return (KeyScheduleList) cache.get("keySchedule");
			}
		}
		return null;
	}


	private static KeyScheduleList getKeyScheduleListFromDatabase(PersistenceManager pm) {
		// If it's not there, try looking at it in the database.
		// Defensive coding: if we see more than one keySchedule, delete the
		// others.  There should only be one singleton instance in our database.
		Extent<KeyScheduleList> extent = pm.getExtent(KeyScheduleList.class);
		KeyScheduleList result = null;
		try {
			for (KeyScheduleList ksl : extent) {
				if (result == null) {
					result = ksl;
				} else {
					pm.deletePersistent(ksl);
				}
			}
		} finally {
			extent.closeAll();
		}
		return result;
	}
	
	
	
	
	public void clockTick() throws CacheException {
		PersistenceManager pm = PMF.get().getPersistenceManager();
		CacheFactory cf = CacheManager.getInstance().getCacheFactory();
		Cache cache = cf.createCache(Collections.emptyMap());
		for(Schedule s : schedules) {
			s.clockTick(cache, pm);
		}		
	}
}
