package org.wescheme.keys;

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
public class Schedule implements Comparable<Schedule> {
	
	@SuppressWarnings("unused")
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	@Persistent
	String from_;
	@Persistent
	String to_;
	@Persistent
	int size_;
	@Persistent
	int cronTicks_ = 1;
	@Persistent
	int tickcount_;

	public void execute(Cache cache, PersistenceManager pm) {
		Crypt.Key key;
		
		System.out.println("Key: " + from_ + " Ticks: " + tickcount_ + " of " + cronTicks_ );
		
		if( tickcount_ % cronTicks_ != 0 ) { tickcount_ += 1; return;} else {
			tickcount_ = 1;
		}
		
		System.out.println("Rotating <" + from_ + "> to <" + to_ + ">" );
		
		if( null == from_ ){
			key = new Crypt.Key(to_, Crypt.getBytes(size_));
			System.out.println("Key " + from_ + " not found. Generating a " + (size_ * 8) + " bit key.");
		} else {
			try {
				key = KeyManager.retrieveKey(pm, cache, from_);
			} catch (KeyNotFoundException e) {
				key = new Crypt.Key(to_, Crypt.getBytes(size_));
				System.out.println("Key " + from_ + " not found. Generating a " + (size_ * 8) + " bit key.");
			}
		}
			key.setName(to_);
			KeyManager.storeKey(pm, cache, key);
		
	}
	
	public Schedule(String from, String to){
		init(from, to, 16, 1);
	}
	
	public Schedule(String from, String to, int length, int ticks){
		init(from, to, length, ticks);
	}
	
	private void init(String from, String to, int length, int ticks){
		from_ = from;
		to_ = to;
		size_ = length;
		cronTicks_ = ticks;
		tickcount_ = 0;
	}
	
	public int compareTo(Schedule s) {
		
		if( from_ == s.to_ ){
			return -1;
		}
		
		if( to_ == s.from_ ){
			return 1;
		}
		
		return 0;
			
	}
	
}