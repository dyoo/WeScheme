package org.wescheme.servlet;

import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jdom.output.XMLOutputter;
import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;

public class Publish extends HttpServlet{

	private static final long serialVersionUID = -5765142296681571504L;

	public void doPost(HttpServletRequest req, HttpServletResponse resp)	throws IOException 
	{
		PersistenceManager pm = PMF.get().getPersistenceManager();
		Session userSession;
		SessionManager sm = new SessionManager();
		try {
			
			userSession = sm.authenticate(req, resp);
			
				
			if( null != userSession ) {
				XMLOutputter outputter = new XMLOutputter();
				Program prog = pm.getObjectById(Program.class,
						Long.parseLong(req.getParameter("pid")));
				if (prog.getOwner().equals(userSession.getName()) &&
						!prog.isPublished()) {
					prog.publish();
					resp.setContentType("text/xml");
					resp.getWriter().print(outputter.outputString(prog.toXML()));
				} else {
					// FIXME: how do we raise errors?
					throw new RuntimeException("Either doesn't own Project or Project already published");
				}
			} else {
				resp.sendError(403);
			}
		} finally {
			pm.close();
		}
		
		resp.sendRedirect("index.jsp");
	}	
}
