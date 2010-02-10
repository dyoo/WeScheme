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

public class Share extends HttpServlet{
	private static final Logger log = Logger.getLogger(Share.class.getName());
	private static final long serialVersionUID = -5765142296681571504L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp)	throws IOException 
	{
		PersistenceManager pm = PMF.getManager();
		try {
			Session userSession;
			SessionManager sm = new SessionManager();			
			userSession = sm.authenticate(req, resp);
				
			if( null != userSession ) {
				XMLOutputter outputter = new XMLOutputter();
				Program prog = pm.getObjectById(Program.class,
						Long.parseLong(req.getParameter("pid")));
				boolean isSourceCodePublic = false;
				if (req.getParameter("isPublic") != null) {
					isSourceCodePublic = Boolean.parseBoolean(req.getParameter("isPublic"));
				}
				if (prog.getOwner().equals(userSession.getName()) &&
						!prog.isPublished()) {
					prog.share(isSourceCodePublic);
					resp.setContentType("text/xml");
					resp.getWriter().print(outputter.outputString(prog.toXML(pm)));
				} else {
					log.warning(userSession.getName() + " does not own project " + req.getParameter("pid"));
					throw new RuntimeException("Either doesn't own Project or Project already published");
				}
			} else {
				log.warning("Unauthorized users may not publish.");
				resp.sendError(403);
			}
		} finally {
			pm.close();
		}
	}	
}
