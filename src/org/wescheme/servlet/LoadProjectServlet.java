package org.wescheme.servlet;

import java.io.IOException;
import java.util.List;

import javax.jdo.PersistenceManager;
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
import java.util.logging.Logger;

public class LoadProjectServlet extends HttpServlet {

	/**
	 * Returns program XML if either pid or publicId is provided.
	 */
	private static final long serialVersionUID = 1165047992267892812L;
	private static final Logger log = Logger.getLogger(LoadProjectServlet.class.getName());
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		
			PersistenceManager pm = PMF.get().getPersistenceManager();
			try {
				if (req.getParameter("pid") != null) {
					Session userSession;
					SessionManager sm = new SessionManager();
					userSession = sm.authenticate(req, resp);
					if( null != userSession ){
						Program prog = getProgramByPid(pm, req.getParameter("pid"));
						if (prog.getOwner().equals(userSession.getName())) {
							XMLOutputter outputter = new XMLOutputter();
							resp.setContentType("text/xml");
							resp.getWriter().print(outputter.outputString(prog.toXML()));
						} else {
							log.warning(userSession.getName() + " does not own " + req.getParameter("pid"));
							throw new RuntimeException("Not owner");
						}
					} else {
						resp.sendError(403);
					}					
				} else if (req.getParameter("publicId") != null) {
					Program prog = getProgramByPublicId(pm, req.getParameter("publicId"));
					XMLOutputter outputter = new XMLOutputter();
					resp.setContentType("text/xml");
					resp.getWriter().print(outputter.outputString(prog.toXML()));
				} else {
						throw new RuntimeException("pid or publicId parameter missing");
				}
			} finally {
				pm.close();
			}
	}
	
	private Program getProgramByPid(PersistenceManager pm, String pid) {
		Long id = (Long) Long.parseLong(pid);
		Key k = KeyFactory.createKey("Program", id);
		Program prog = pm.getObjectById(Program.class, k);
		return prog;
	}

	
	@SuppressWarnings("unchecked")
	private Program getProgramByPublicId(PersistenceManager pm, String publicId) {
		javax.jdo.Query query = pm.newQuery(Program.class);
		query.setFilter("publicId_ == param");
		query.declareParameters("String param");
		try {
			List<Program> programs = (List<Program>) query.execute(publicId.toLowerCase());
			if (programs.size() == 1) {
				return programs.get(0);
			} else {
				throw new RuntimeException("Could not find unique program with publicId=" + publicId);
			}
		} finally { 
			query.closeAll();
		}
	}	
}
