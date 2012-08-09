package org.wescheme.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.data.DAO;
import org.wescheme.data.Feedback;

public class AddFeedback extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = -7686196925524722519L;

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		String author = request.getParameter("author");
		String type = request.getParameter("type");
		String feedbackText = request.getParameter("feedbackText");
		Feedback feedback = new Feedback(author, type, feedbackText);
		new DAO().saveFeedback(feedback);
		
		response.setContentType("text/plain");
		response.getWriter().write("ok");
	}
}
