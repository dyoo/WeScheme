package org.wescheme.servlet;

import java.io.IOException;
import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jdom.output.XMLOutputter;
import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;

public class LoadProjectServlet extends HttpServlet {

	/**
	 * Returns program XML if either pid or publicId is provided.
	 */
	private static final long serialVersionUID = 1165047992267892812L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		
			PersistenceManager pm = PMF.get().getPersistenceManager();
			Session userSession;
			SessionManager sm = new SessionManager();
			
			try {
				
				userSession = sm.authenticate(req, resp);
				
				if( null != userSession ){
					Program prog = getProgram(pm, req);
	    			XMLOutputter outputter = new XMLOutputter();
	    			resp.setContentType("text/xml");
					resp.getWriter().print(outputter.outputString(prog.toXML()));
				} else {
					resp.sendError(403);
				}
			} finally {
				pm.close();
			}
	}
	
	@SuppressWarnings("unchecked")
	private Program getProgram(PersistenceManager pm, HttpServletRequest req) {
		if (req.getParameter("pid") != null) {
			Long id = (Long) Long.parseLong(req.getParameter("pid"));
			Key k = KeyFactory.createKey("Program", id);
			Program prog = pm.getObjectById(Program.class, k);
			return prog;
		} else if (req.getParameter("publicId") != null) {
			javax.jdo.Query query = pm.newQuery(Program.class);
			query.setFilter("publicId_ == param");
			query.declareParameters("String param");
			try {
				List<Program> programs = (List<Program>) query.execute(req.getParameter("publicId"));
				if (programs.size() == 1) {
					return programs.get(0);
				} else {
					throw new RuntimeException("Could not find unique program with publicId=" + req.getParameter("publicId"));
				}
			} finally { 
				query.closeAll();
			}
		} else {
			throw new RuntimeException("pid or publicId parameter missing");
		}
	}	
}
