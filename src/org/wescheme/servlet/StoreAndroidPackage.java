package org.wescheme.servlet;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.AndroidPackageJob;
import org.wescheme.util.PMF;

import java.io.IOException;
import java.io.Writer;

/**
 * This servlet gets content from the off-site android packager.
 * 
 * @author dyoo
 *
 */
public class StoreAndroidPackage extends HttpServlet {
	private static final long serialVersionUID = 7524690884141108398L;
	
	public void doGet(HttpServletRequest req,
			HttpServletResponse res) throws IOException {
		doPost(req, res);
	}
	
	public void doPost(HttpServletRequest req,
				HttpServletResponse res) throws IOException {

		String uri = req.getRequestURI();
		String[] chunks = uri.split("/");
		String id = chunks[chunks.length-1];
		
		PersistenceManager pm = PMF.get().getPersistenceManager();
		AndroidPackageJob androidPackageJob = AndroidPackageJob.findByNonce(pm, id);
		if (androidPackageJob == null) {
			sendErrorResponseUnexpected(res);
			return;
		}
		return true;		

		// Look at the url to see if this is a program
		// we're expecting
		
		// Load up the object code
		
		// Save the new android package
		
		// Exit
		
		
		
		sendFinalResponse(res);
	}
	
	
	
	private void sendFinalResponse(HttpServletResponse res) throws IOException {
		res.setContentType("text/plain");
		Writer w = res.getWriter();
		w.write("ok\n");
	}

	private void sendErrorResponseUnexpected(HttpServletResponse res) throws IOException {
		res.setContentType("text/plain");
		Writer w = res.getWriter();
		w.write("unexpected\n");
	}
}
