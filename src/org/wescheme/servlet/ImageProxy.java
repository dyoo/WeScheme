package org.wescheme.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.IOException;
import java.net.URL;
import java.net.URLConnection;


/** The ImageProxy servlet's specialized to
 * read images from the network and re-produce it.
 * @author dyoo
 *
 * TODO: should it cache images?
 *
 * It only responds to POSTs with the following parameter
 * url: the URL of the image.
 * 
 * TODO: since the potential for abuse exists, we'll try to limit the
 * proxying specifically to images alone.  We may need to revisit
 * this with more restrictions to prevent really bad things.
 */

public class ImageProxy extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 5607899786759828420L;

	private static long MAX_IMAGE_FILE_SIZE = 10000000;


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
		URLConnection conn = url.openConnection();
		String contentType = conn.getContentType();


		// The content type must be of type 'image', or we also error out here.
		if (contentType == null || (!contentType.startsWith("image/"))) {
			res.sendError(HttpServletResponse.SC_BAD_REQUEST, "non-image content type " + contentType);
			return;
		}

		res.setContentType(contentType);
		BufferedInputStream is = new BufferedInputStream(conn.getInputStream());
		BufferedOutputStream os = new BufferedOutputStream(res.getOutputStream());
		try {
			int aByte;
			int count = 0;
			while ((aByte = is.read()) != -1) {
				os.write(aByte);
				count++;
				// We want to put a restriction on the size of proxied files.
				if (count > MAX_IMAGE_FILE_SIZE) {
					res.sendError(HttpServletResponse.SC_BAD_REQUEST, "image too large");
					return;
				}
			}
		} finally {
			is.close();
			os.close();
		}
	}
}