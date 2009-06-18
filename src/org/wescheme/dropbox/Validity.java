package org.wescheme.dropbox;

import java.util.Calendar;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable()
public class Validity {
	@SuppressWarnings("unused")
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
		
	private Calendar begin_;
	private Calendar end_;
	private boolean active_;
	
	
	public Validity(Calendar begin, Calendar end){
		begin_ 	= begin;
		end_ 	= end;
		active_ = true;
	}
	
	// TODO We need more robust validity instantiation.
	public Validity(){
		begin_  = null;
		end_	= null;
		active_ = true;
	}
	
	public boolean isValid(){
		
		if( begin_ == null || end_ == null ){ return active_; }
		
		Calendar now = Calendar.getInstance();
		return ( now.after(begin_) && now.before(end_) && active_ );
		
	}
	
	public void open(){
		active_ = true;
	}
	
	public void close(){
		active_ = false;
	}
	
	
	
}
