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
	
		schedules.add(new Schedule("freshKey", "staleKey", 8, 1));
		schedules.add(new Schedule("dailyKey", "staleDailyKey", 8, 24));
		schedules.add(new Schedule(null, "freshKey", 8, 1));
		schedules.add(new Schedule(null, "dailyKey", 8, 24));
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
			System.out.println("KeyScheduleList from cache");
			return ksFromCache;
		}
		
		KeyScheduleList ksFromDb = getKeyScheduleListFromDatabase();
		if (ksFromDb != null) {
			System.out.println("KeyScheduleList from db");
			Cache cache = getCache();
			if (cache != null) {
				cache.put("keySchedule", ksFromDb);
			}
			return ksFromDb;
		}
		
		// If we still can't find the schedule, create it from scratch.
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			System.out.println("KeyScheduleList from scratch");
			KeyScheduleList freshKsl = new KeyScheduleList();
			pm.makePersistent(freshKsl);
			Cache cache = getCache();
			if (cache != null) {
				cache.put("keySchedule", freshKsl);
			}
			return freshKsl;
		} finally {
			pm.close();
		}
	}


	private static Cache getCache() {
		Cache cache;
		try {
			CacheFactory cf = CacheManager.getInstance().getCacheFactory();
			cache = cf.createCache(Collections.emptyMap());
		} catch (CacheException e) {
			cache = null;
		}
		return cache;
	}


	private static KeyScheduleList getKeyScheduleFromCache() {
		Cache cache = getCache();
		if (cache != null) {
			if (cache.containsKey("keySchedule") &&
					cache.get("keySchedule") instanceof KeyScheduleList) {
				return (KeyScheduleList) cache.get("keySchedule");
			}
		}
		return null;
	}


	private static KeyScheduleList getKeyScheduleListFromDatabase() {
		// If it's not there, try looking at it in the database.
		// Defensive coding: if we see more than one keySchedule, delete the
		// others.  There should only be one singleton instance in our database.
		PersistenceManager pm = PMF.get().getPersistenceManager();
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
