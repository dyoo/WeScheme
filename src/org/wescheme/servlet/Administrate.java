package org.wescheme.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Logger;

import javax.jdo.Extent;
import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jdom.Element;
import org.jdom.output.XMLOutputter;
import org.wescheme.project.Program;
import org.wescheme.project.ProgramDigest;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.PMF;

// Hook to do administration.  All operations must be POSTs done by someone logged in as
// adminstrator.  Meant to be used through AJAX calls.
public class Administrate extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6106267266981806559L;

	private static final Logger log = Logger.getLogger(Administrate.class.getName());

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
		checkAccessControl(req, res);

		if (req.getParameter("action").equals("refreshProgram")) {
			refreshProgram(req, res);
		} 
	}

	// Checks that the person accessing this servlet is an administrator.
	private void checkAccessControl(HttpServletRequest req,
			HttpServletResponse res) throws IOException {
		SessionManager sm = new SessionManager();
		// FIXME: add intentionality

		Session userSession = sm.authenticate(req, res);
		if (!userSession.isAdmin()) {
			log.warning("Nonadministrator " + userSession.getName() + " trying to access the Administer servlet");
			res.sendError(401);
			throw new RuntimeException();
		}
	}

	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
		checkAccessControl(req, res);
		if (req.getParameter("action").equals("listPrograms")) {
			listPrograms(req, res);
		}
	}


	// refreshProgram: force the building of the binary of the given program if it exists,
	// and repair broken invariants of the data model.
	private void refreshProgram(HttpServletRequest req, HttpServletResponse res) {
		String programId = req.getParameter("pid");
		if (programId == null) {
			throw new RuntimeException("pid missing");
		}
		PersistenceManager pm = PMF.getManager();
		try {
			Program prog = pm.getObjectById(Program.class,
					Long.parseLong(req.getParameter("pid")));

			// First, build the program if it's already been built.
			if (prog.hasBeenBuilt()) {
				prog.build();
			}

		} finally {
			pm.close();
		}

		// TODO: report that the compilation went ok.
	}


	// Lists all programs across all of WeScheme.
	private void listPrograms(HttpServletRequest req, HttpServletResponse res) throws IOException {
		PersistenceManager pm = PMF.getManager();
		try {
			Extent<Program> extent = null;
			try {
				Element elt = new Element("ProgramDigests");
				extent = pm.getExtent(Program.class, false);    
				for (Program p: extent) {
					elt.addContent(new ProgramDigest(p).toXML(pm));
				}
				res.setContentType("text/xml");
				PrintWriter w = res.getWriter();
				XMLOutputter outputter = new XMLOutputter();
				w.write(outputter.outputString(elt));
				w.close();
			} finally {
				if (extent != null) { 
					extent.closeAll();
				}
			}
		} finally {
			pm.close();
		}
	}

}
