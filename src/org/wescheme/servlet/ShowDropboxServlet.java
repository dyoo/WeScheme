package org.wescheme.servlet;

import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jdom.Element;
import org.jdom.output.XMLOutputter;
import org.wescheme.dropbox.Dropbox;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;
import org.wescheme.util.Queries;

public class ShowDropboxServlet extends HttpServlet {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -2158283583083003253L;
	private static final Logger log = Logger.getLogger(ShowDropboxServlet.class.getName());
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			Session userSession;
			SessionManager sm = new SessionManager();
			userSession = sm.authenticate(req, resp);

			if( userSession == null ){
				log.info("Unauthenticated user attempting to view a dropbox.");
				resp.sendError(401);
				return;
			}

			List<Dropbox> dbl = Queries.getDropboxes(pm, userSession.getName());

			XMLOutputter outputter = new XMLOutputter();
			Element parent = new Element("Dropboxes");
			for( Dropbox d : dbl ){	
				parent.addContent(d.toXML());
			}
			resp.setContentType("text/xml");
			resp.getWriter().print(outputter.outputString(parent)); 			
		} finally {

			pm.close();
		}
	}
	}
	


