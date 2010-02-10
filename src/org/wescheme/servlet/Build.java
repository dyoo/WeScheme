package org.wescheme.servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jdom.output.XMLOutputter;
import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;

public class Build extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 5525174380103839556L;
	private static final Logger log = Logger.getLogger(Share.class.getName());

	public void doPost(HttpServletRequest req, HttpServletResponse resp)	throws IOException 
	{
		PersistenceManager pm = PMF.getManager();
		Session userSession;
		SessionManager sm = new SessionManager();
		try {
			if( !sm.isIntentional(req, resp) ){
				resp.sendError(401);
				return;
			}
			
			userSession = sm.authenticate(req, resp);
			if( null != userSession ) {
				XMLOutputter outputter = new XMLOutputter();
				Program prog = pm.getObjectById(Program.class,
						Long.parseLong(req.getParameter("pid")));
				if (prog.getOwner().equals(userSession.getName())) {
					prog.build();
					resp.setContentType("text/xml");
					resp.getWriter().print(outputter.outputString(prog.toXML(pm)));
				} else {
					log.warning(userSession.getName() + " does not own project " + req.getParameter("pid"));
					throw new RuntimeException("Doesn't own Project");
				}
			} else {
				log.warning("Unauthorized users may not build.");
				resp.sendError(403);
			}
		} finally {
			pm.close();
		}
	}	

}
