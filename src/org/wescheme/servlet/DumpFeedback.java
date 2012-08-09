package org.wescheme.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.wescheme.data.Feedback;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;

import com.google.appengine.api.datastore.Cursor;
import com.google.appengine.api.datastore.QueryResultIterator;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.Query;

/**
 * Retrieve all the feedback we get back from users.
 * Output is represented as an JSON string:
 * { feedbacks: [{ author: string, type: string: feedbackText: string, date: string} ...],
 *   cursor: string }
 *
 * The optional "cursor" argument here will allow us to stream
 * the table, just in case it gets large enough to hit against
 * the compute ceiling enforced by AppEngine.
 *
 * Only admins should be allowed to get at this information.
 * 
 * This code is adapted from http://code.google.com/p/objectify-appengine/wiki/IntroductionToObjectify
 * @author dyoo
 *
 */
public class DumpFeedback {
	
	public static final long LIMIT_MILLIS = 1000 * 25; // provide a little leeway

	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		// First, check that the person is admin.
		SessionManager sm = new SessionManager();
		Session userSession = sm.authenticate(request, response);
		if (!userSession.isAdmin()) {
			response.sendError(401);
			return;
		}
		
		
		// Next, start dumping content till we hit CPU limit
		long startTime = System.currentTimeMillis();
		Objectify ofy = ObjectifyService.begin();
		Query<Feedback> query = ofy.query(Feedback.class);
		String cursorStr = request.getParameter("cursor");
		if (cursorStr != null) {
			query.startCursor(Cursor.fromWebSafeString(cursorStr));
		}
	
		JSONArray listOfFeedbacks = new JSONArray();
		String nextCursorString = null;
		
		QueryResultIterator<Feedback> iterator = query.iterator();
		while(iterator.hasNext()) {
			Feedback feedback = iterator.next();
			listOfFeedbacks.add(feedback.toJSONObject());
			if (System.currentTimeMillis() - startTime > LIMIT_MILLIS) {
				nextCursorString = iterator.getCursor().toWebSafeString();
				break;
			}
		}

		// Finally, dump the content back to the user.
		JSONObject result = new JSONObject();
		result.put("feedbacks", listOfFeedbacks);
		result.put("cursor", nextCursorString);
		response.setContentType("text/plain");
		response.getWriter().write(result.toString());
	}
	
}
