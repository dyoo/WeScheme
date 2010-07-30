package org.wescheme.util;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

import javax.cache.Cache;
import javax.cache.CacheException;
import javax.cache.CacheFactory;
import javax.cache.CacheManager;


/**
 * Miscellaneous helper functions.
 * @author dyoo
 *
 */
public class CacheHelpers {
	private static Set<UserProgramsDirtiedListener> userProgramsDirtiedListeners;

	static {
		userProgramsDirtiedListeners = new HashSet<UserProgramsDirtiedListener>();
	}
	
	public static interface UserProgramsDirtiedListener {
		void onUserProgramsDirtied(String userName);
	}
	
	
	
	/**
	 * Returns an instance of the memcache, or null if we can't get at it.
	 * @return cache
	 */
	public static Cache getCache() {
		Cache cache;
		try {
			CacheFactory cf = CacheManager.getInstance().getCacheFactory();
			cache = cf.createCache(Collections.emptyMap());
		} catch (CacheException e) {
			cache = null;
		}
		return cache;
	}

	
	
	public static void addUserProgramsDirtiedListener(UserProgramsDirtiedListener l) {
		userProgramsDirtiedListeners.add(l);
	}
	
	public static void notifyUserProgramsDirtied(String userName) {
		for (UserProgramsDirtiedListener l : userProgramsDirtiedListeners) {
			l.onUserProgramsDirtied(userName);
		}
	}
	
	/**
	 * Returns the cache key we're using to key into the set of programs
	 * for a user.
	 * @param userName The user's name.
	 * @return
	 */
	public static String getUserProgramsCacheKey(String userName) {
		return "user:" + userName + ":programList";
	}
}
