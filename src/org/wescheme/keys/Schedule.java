package org.wescheme.keys;

import java.util.logging.Logger;

import javax.cache.Cache;
import javax.jdo.PersistenceManager;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import org.wescheme.util.Crypt;
import org.wescheme.util.Crypt.KeyNotFoundException;
import org.wescheme.keys.KeyManager;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable()
public class Schedule {

	@SuppressWarnings("unused")
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	@Persistent
	String from;
	@Persistent
	String to;
	@Persistent
	int size;
	@Persistent
	int cronTicks = 1;
	@Persistent
	int tickcount;

	private Logger logger = Logger.getLogger(Schedule.class.getName());


	/**
	 * Schedules key rotation from -> to.
	 * If from is null, creates a new key that goes into to.
	 * @param from  either null or the name of the key 
	 * @param to
	 * @param size
	 * @param ticks
	 */
	public Schedule(String from, String to, int size, int ticks) {
		this.from = from;
		this.to = to;
		this.size = size;
		this.cronTicks = ticks;
		this.tickcount = 0;
	}
	
	
	/**
	 * Handle another tick.  Every interval number of ticks, perform the actions.
	 * @param cache
	 * @param pm
	 */
	public void clockTick(Cache cache, PersistenceManager pm) {
		if (tickcount == 0) {
			performKeyRotation(cache, pm);
		}
		tallyTick();
	}


	private void performKeyRotation(Cache cache, PersistenceManager pm) {
		logger.info("Rotating <" + from + "> to <" + to + ">" );
		if( null == from ){
			Crypt.Key key = generateNewKey(to);
			KeyManager.storeKey(pm, cache, key);
		} else {
			try {
				Crypt.Key fromKey = KeyManager.retrieveKey(pm, cache, from);
				Crypt.Key toKey = KeyManager.retrieveKey(pm, cache, to);
				toKey.setValue(fromKey.getValue());
				KeyManager.storeKey(pm, cache, toKey);
			} catch (KeyNotFoundException e) {
				Crypt.Key key = generateNewKey(to);
				KeyManager.storeKey(pm, cache, key);
			}
		}
	}

	private void tallyTick() {
		tickcount = (tickcount + 1) % cronTicks;
	}


	private Crypt.Key generateNewKey(String keyName) {
		Crypt.Key key;
		logger.info("Key " + keyName + " not found. Generating a " + (size * 8) + " bit key.");
		key = new Crypt.Key(keyName, Crypt.getBytes(size));
		return key;
	}
}