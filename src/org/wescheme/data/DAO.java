package org.wescheme.data;

import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.util.DAOBase;

/** Data Access Object for all the data we're managing with Objectify.
 * 
 * @author dyoo
 *
 */

public class DAO extends DAOBase {
	static {
		ObjectifyService.register(Feedback.class);
	}
	
	public void saveFeedback(Feedback feedback) {
		ofy().put(feedback);
	}	
}
