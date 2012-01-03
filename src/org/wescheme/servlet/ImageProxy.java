package org.wescheme.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.net.URL;

/** The ImageProxy servlet's specialized to
 * read images from the network and re-produce it.
 * @author dyoo
 *
 * TODO: should it cache images?
 *
 * It only responds to POSTs with the following parameter
 * url: the URL of the image.
 * 
 * 
 */

public class ImageProxy extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 5607899786759828420L;

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
		String urlString = req.getParameter("url");
		if (urlString == null) {
			res.sendError(HttpServletResponse.SC_BAD_REQUEST, "url parameter required");
			return;
		}
		// Validation: the URL must be an absolute http or https.
		if ((!urlString.startsWith("http://")) && (!urlString.startsWith("https://"))) {
			res.sendError(HttpServletResponse.SC_BAD_REQUEST, "Absolute url required");
			return;
		}
		
		URL url = new URL(urlString);
		
	}
}