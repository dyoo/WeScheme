package org.wescheme.keys;

import java.util.List;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import org.wescheme.util.Crypt;
import org.wescheme.util.PMF;
import org.wescheme.util.Crypt.KeyNotFoundException;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable()
public class KeySwappingSchedule {

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

	private Logger logger = Logger.getLogger(KeySwappingSchedule.class.getName());


	/**
	 * Schedules key rotation from -> to.
	 * If from is null, creates a new key that goes into to.
	 * @param from  either null or the name of the key 
	 * @param to
	 * @param size
	 * @param ticks
	 */
	private KeySwappingSchedule(String from, String to, int size, int ticks) {
		this.from = from;
		this.to = to;
		this.size = size;
		this.cronTicks = ticks;
		this.tickcount = 0;
	}
	
	
	
	/**
	 * Returns the KeySwappingSchedule, either by construction or by grabbing it from the database.
	 * @param pm
	 * @param from
	 * @param to
	 * @param size
	 * @param interval
	 * @return
	 */
	public static KeySwappingSchedule getInstance(PersistenceManager pm, String from, String to, int size, int interval) {
		KeySwappingSchedule schedule = KeySwappingSchedule.findFromPersistentStorage(pm, from, to, size, interval);
		if (schedule == null) {
			schedule = new KeySwappingSchedule(from, to, size, interval);
			pm.makePersistent(schedule);
		}
		return schedule;
	}
	
	
	
	/**
	 * Returns the KeySwappingSchedule stored in the database with the given schedule.  Returns null
	 * if no such KeySwappingSchedule can be found.
	 * @param pm
	 * @param from
	 * @param to
	 * @return
	 */
	@SuppressWarnings("unchecked")
	private static KeySwappingSchedule findFromPersistentStorage(PersistenceManager pm, 
				String from,
				String to,
				int size, 
				int interval) {
		Query query = pm.newQuery(KeySwappingSchedule.class);
		query.setFilter("from == fromParameter && to == toParameter && size == sizeParameter && size == intervalParameter");
		query.declareParameters("String fromParameter, String toParameter, int sizeParameter, int intervalParameter");
		query.setOrdering("key desc");
		List<KeySwappingSchedule> schedules = (List<KeySwappingSchedule>) query.executeWithArray(
				new Object[] {from, to, new Integer(size), new Integer(interval)});
		if (schedules.size() == 0)
			return null;
		return schedules.get(0);
	}
	
	
	/**
	 * Handle another tick.  Every interval number of ticks, perform the actions.
	 * @param cache
	 * @param pm
	 */
	public void clockTick() {
		if (tickcount == 0) {
			performKeyRotation();
		}
		tallyTick();
	}


	/**
	 * Does the key rotation from the 'from' to the 'to'.
	 * @param cache
	 * @param pm
	 * @throws CacheException 
	 * @throws KeyNotFoundException 
	 */
	private void performKeyRotation() {
		logger.info("Rotating <" + from + "> to <" + to + ">" );
		if( null == from ){
			Crypt.Key key = Crypt.Key.getInstance(to, size);
			key.rotate();
		} else {
			Crypt.Key fromKey = Crypt.Key.getInstance(from, size);
			Crypt.Key toKey = Crypt.Key.getInstance(to, size);
			if (fromKey.getValue() != null) {
				logger.info("seting value of " + to + " to " + fromKey.getValue());
				PersistenceManager pm = PMF.get().getPersistenceManager();
				try {
					toKey.setValue(fromKey.getValue());
					pm.makePersistent(toKey);
				} finally {
					pm.close();
				}
			} else {
				logger.info("fromKey's value was null.  Generating fresh value.");
				Crypt.Key key = Crypt.Key.getInstance(to, size);
				key.rotate();
			}
		} 
	}

	private void tallyTick() {
		tickcount = (tickcount + 1) % cronTicks;
	}
}