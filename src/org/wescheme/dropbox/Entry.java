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
	// @Persistent
	//String comments_; //TODO Do we want a string that is guaranteed by its type to be web safe?
	
	
	public Entry(Program p){
		date_ = Calendar.getInstance();
		project_ = p;
		//comments_ = comments;
	}
	
	
}
