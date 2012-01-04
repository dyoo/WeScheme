package org.wescheme.servlet;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.memcache.Expiration;
import com.google.appengine.api.memcache.MemcacheServiceFactory;
import com.google.appengine.api.memcache.MemcacheService;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Serializable;
import java.net.URL;
import java.net.URLConnection;


/** The ImageProxy servlet's specialized to
 * read images from the network and re-produce it.
 * @author dyoo
 *
 * It only responds to GETs with the following parameter
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

	// Currently, we cap image size to ten megabytes.
	private static long MAX_IMAGE_FILE_SIZE = 10000000;

	
	// We cache images for ten minutes.
	private static Expiration EXPIRATION = Expiration.byDeltaSeconds(60 * 10);

	// Keys stored in the cache will have this prefix in front to disambiguate.
	private static String KEY_PREFIX = "imageProxy:";


	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
		try {
			String urlString = parseUrlString(req);

			ImageRecord record = getImageRecordFromCache(urlString);
			if (record == null) {
				record = createImageRecordFromNetwork(urlString);
				saveImageRecordToCache(record);
			}
			
			res.setContentType(record.contentType);
			res.setHeader("Cache-Control", "public, max-age=300"); // 5 minutes on the browser
			res.setHeader("Pragma", "public");
			// res.setContentLength(record.bytes.length);
			res.getOutputStream().write(record.bytes);
		} catch(ImageProxyException e) {
			res.sendError(HttpServletResponse.SC_BAD_REQUEST, e.getMessage());
		}
	}

	private ImageRecord createImageRecordFromNetwork(String urlString) 
			throws IOException, ImageProxyException {
		URL url;
		URLConnection conn;
		String contentType;
		try {
			url = new URL(urlString);
			conn = url.openConnection();
			contentType = conn.getContentType();
		} catch (Exception e) {
			throw new ImageProxyException("url could not be read: " + e.getMessage());
		}

		// The content type must be of type 'image', or we also error out here.
		if (contentType == null || (!(contentType.startsWith("image/")))) {
			throw new ImageProxyException("non-image content type " + contentType);
		}
		BufferedInputStream is = new BufferedInputStream(conn.getInputStream());
		ByteArrayOutputStream os = new ByteArrayOutputStream();
		try {
			copyStream(is, os);
			return new ImageRecord(urlString, contentType, os.toByteArray());
		} finally { 
			is.close();
		}
	}

	private void copyStream(InputStream is, OutputStream os) 
			throws IOException, ImageProxyException {
		int aByte;
		int count = 0;
		while ((aByte = is.read()) != -1) {
			os.write(aByte);
			count++;
			// We want to put a restriction on the size of proxied files.
			if (count > MAX_IMAGE_FILE_SIZE) {
				throw new ImageProxyException("image too large");
			}
		}
	}

	/**
	 * Returns the image record from the cache, or null if we haven't stored it yet.
	 * @param url
	 * @return
	 */
	private ImageRecord getImageRecordFromCache(String url) {
		MemcacheService syncCache = MemcacheServiceFactory.getMemcacheService();
		try {
			ImageRecord record = (ImageRecord) syncCache.get(KEY_PREFIX + url);
			return record;
		} catch (ClassCastException e) { return null; }
	}

	private void saveImageRecordToCache(ImageRecord record) {
		MemcacheService syncCache = MemcacheServiceFactory.getMemcacheService();
		syncCache.put(KEY_PREFIX + record.url,  record, EXPIRATION);
	}

	private String parseUrlString(HttpServletRequest req)
			throws ImageProxyException {
		String urlString = req.getParameter("url");
		if (urlString == null) {
			throw new ImageProxyException("url parameter required");
		}
		// Validation: the URL must be an absolute http or https.
		if ((!urlString.startsWith("http://")) && (!urlString.startsWith("https://"))) {
			throw new ImageProxyException("Absolute url required");
		}
		return urlString;
	}


	/**
	 * Anything unusual that we should deal with will be an ImageProxyException,
	 * handled at the toplevel of this servlet.
	 * @author dyoo
	 *
	 */
	private static class ImageProxyException extends Exception {
		private static final long serialVersionUID = -8141551594343131574L;

		public ImageProxyException(String reason) {
			super(reason);
		}
	}


	/**
	 * Simple image record class.
	 * @author dyoo
	 *
	 */
	static private class ImageRecord implements Serializable {
		private static final long serialVersionUID = 5501395008425013052L;
		public String url;
		public String contentType;
		public byte[] bytes;
		public ImageRecord(String url, String contentType, byte[] bytes) {
			this.url = url;
			this.contentType = contentType;
			this.bytes = bytes;
		}
	}
}