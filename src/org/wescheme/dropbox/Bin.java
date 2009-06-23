package org.wescheme.dropbox;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable()
public class Bin {

	public Bin(String binName) {
		name_ 	  = binName;
		//validity_ = new Validity();
	}
	
	public String getName(){
		return name_;
	}
	
	public String toString(){
		return name_;
	}
	
	public boolean isValid(){
		//TODO validity stub. Learn more about the calendar and flesh this out.
		return true;
	}
	
	@SuppressWarnings("unused")
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	//@Persistent
	//private Validity validity_;
	@Persistent
	private String name_; 
	
}
