package org.wescheme.dropbox;

import java.util.Calendar;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import org.wescheme.project.Program;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable()
public class Entry {

	@SuppressWarnings("unused")
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	@Persistent
	Calendar date_;
	@Persistent
	Program project_;
	
	// kludgey back pointers.
	@Persistent
	long dbID_;
	@Persistent
	Integer binID_;
	
	// @Persistent
	//String comments_; //TODO Do we want a string that is guaranteed by its type to be web safe?
	
	
	public Entry(Dropbox db, Integer binID, Program p){
		date_ = Calendar.getInstance(); // The entry was created /now/!
		project_ = p.clone(db.owner()); // clone the program into the dropbox.
		//TODO The notion of ownership becomes murky here.
		//TODO Can I delete an item in someone's dropbox if I'm the author and not the owner?
		
		dbID_ = db.id();
		binID_ = binID;
		
		//comments_ = comments;
	}
	
	
}
