package org.wescheme.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jdom.Element;
import org.jdom.output.XMLOutputter;
import org.wescheme.project.Program;
import org.wescheme.project.ProgramDigest;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.user.UnauthorizedUserException;
import org.wescheme.util.PMF;

/**
 * Produces a list of projects of the logged-in user, in descending order of modification time.
 * 
 * This list is presented as a sequence of ProgramDigest XML elements.
 * 
 * @author dyoo
 *
 */
public class ListProjectsServlet extends HttpServlet {
	
	private static final long serialVersionUID = 6291188410939739681L;
	private static final Logger log = Logger.getLogger(ListProjectsServlet.class.getName());

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		PersistenceManager pm = PMF.getManager();
		Session userSession;
		SessionManager sm = new SessionManager();
	
		try {
		
			userSession = sm.authenticate(req, resp);
		
			if( userSession == null ){
				throw new UnauthorizedUserException();
			}
			
			Query query = pm.newQuery(Program.class);
			query.setFilter("owner_ == ownerParam");
			query.setOrdering("time_ desc");
			query.declareParameters("String ownerParam");
			
			try {
				@SuppressWarnings({ "unchecked" })
				List<Program> pl = (List<Program>) query.execute(userSession.getName());

				Element elt = new Element("ProgramDigests");
				for( Program p : pl ){
					elt.addContent(new ProgramDigest(p).toXML(pm));
				}
				resp.setContentType("text/xml");
				PrintWriter w = resp.getWriter();
				XMLOutputter outputter = new XMLOutputter();
				w.write(outputter.outputString(elt));
				w.close();
				
				
			} finally {
				query.closeAll();
			}
		
		} catch (IOException e) {
			log.severe("IO expection in ListProjectsServlet!");
			e.printStackTrace();
			resp.sendError(500);
			
		} catch (UnauthorizedUserException e) {
			log.warning("This user does not own project " + req.getParameter("pid"));
			e.printStackTrace();
			resp.sendError(401);
			
		} finally {
			pm.close();
		}
	}

}
