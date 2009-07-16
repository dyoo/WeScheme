package org.wescheme.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.Base64;
import org.wescheme.util.PMF;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

public class AjaxHandler extends HttpServlet {
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
		SessionManager sm = new SessionManager();
		// FIXME: isIntentional is returning false and I don't know why.
		/*if( !sm.isIntentional(req, res) ){
			System.out.println("not intentional");
			res.sendError(500);
			return;
		}	*/	
		Session userSession = sm.authenticate(req, res);
		if (userSession == null) {
			System.out.println("Can't find userSession");
			res.sendError(500);
		 	return;
		}
		
		String action = req.getParameter("action");
		if (action.equals("saveNew")) {
			doSaveNew(req, res);
		} else if (action.equals("save")) {
			try {
				doSave(req, res);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
				res.sendError(500);
			}
		} else if (action.equals("load")) {
			doLoad(req, res);
		} else {
			res.sendError(500);
		}
	}

	
	// Save a new file
	// params: code
	// output: pid
	private void doSaveNew(HttpServletRequest req, HttpServletResponse res) throws IOException {
		PersistenceManager pm = PMF.get().getPersistenceManager();
		Session userSession;
		SessionManager sm = new SessionManager();
		try {
			userSession = sm.authenticate(req, res);			
			if( null != userSession ){
				String code = req.getParameter("code");
				res.setContentType("text/plain");
				Program prog = new Program(code, userSession);
				pm.makePersistent(prog);
				PrintWriter writer = res.getWriter();
				writer.write(prog.getId() + "");
				writer.close();
			}
		} finally {
			pm.close();
		}
	}

	
	// save a file
	// params: code, pid
	// output: pid
	private void doSave(HttpServletRequest req, HttpServletResponse res) throws IOException, ClassNotFoundException {	
		PersistenceManager pm = PMF.get().getPersistenceManager();
		Session userSession;
		SessionManager sm = new SessionManager();
		try {
			userSession = sm.authenticate(req, res);			
			if( null != userSession ){
				String code = req.getParameter("code");
				
				Long id = (Long) Long.parseLong(req.getParameter("pid"));
				Key k = KeyFactory.createKey("Program", id);
    			Program prog = pm.getObjectById(Program.class, k);
    			prog.updateSource(code);
    			pm.makePersistent(prog);
				
				res.setContentType("text/plain");
				PrintWriter writer = res.getWriter();
				writer.write(prog.getId() + "");
				writer.close();
			}
		} finally {
			pm.close();
		}
	}

	
	private void doLoad(HttpServletRequest req, HttpServletResponse res) {	
	}
}
