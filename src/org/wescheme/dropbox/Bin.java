package org.wescheme.dropbox;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.Persistent;

import com.google.appengine.api.datastore.Key;

public class Bin {

	public Bin(String binName) {
		name_ 	  = binName;
		validity_ = new Validity();
	}
	
	public String getName(){
		return name_;
	}
	
	public boolean isValid(){
		//TODO validity stub. Learn more about the calendar and flesh this out.
		return true;
	}
	
	@SuppressWarnings("unused")
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	@Persistent
	private Validity validity_;
	@Persistent
	private String name_; 
	
}
