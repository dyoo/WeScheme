package org.wescheme.data;

import java.util.Date;

import javax.persistence.Id;

import org.json.simple.JSONObject;

import com.googlecode.objectify.annotation.Unindexed;


/** Represents feedback we get back from WeScheme users.
 *  The content is unstructured for the most part; we may want
 *  to enforce some structure later one to help with data mining.
 * @author dyoo
 *
 */

public class Feedback {
	@Id Long id;
	@Unindexed String author;
	String type;
	@Unindexed String feedbackText;
	Date date;

	// NoArg constructor for Objectify.
	Feedback() {}
	
	public Feedback(String author, String type, String feedbackText) {
		this.author = author;
		this.type = type;
		this.feedbackText = feedbackText;
		this.date = new Date();
	}
	
	
	
	public String getAuthor() { return this.author; }
	public String getType() { return this.type; }
	public String getFeedbackText() { return this.feedbackText; }

	
	public JSONObject toJSONObject() {
		JSONObject obj = new JSONObject();
		obj.put("id", this.id);
		obj.put("author", this.author);
		obj.put("type", this.type);
		obj.put("date", this.date);
		return obj;
	}
}
