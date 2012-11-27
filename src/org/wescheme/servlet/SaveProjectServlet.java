package org.wescheme.servlet;

import java.io.IOException;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.NameGenerator;
import org.wescheme.project.Program;
import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;
import org.wescheme.util.CacheHelpers;
import org.wescheme.util.PMF;


public class SaveProjectServlet extends HttpServlet{
    private static final Logger log = Logger.getLogger(SaveProjectServlet.class.getName());
    private static final long serialVersionUID = 4038563388689831368L;

    public void doPost(HttpServletRequest req, HttpServletResponse resp)	throws IOException 
    {
        PersistenceManager pm = PMF.get().getPersistenceManager();
        SessionManager sm = new SessionManager();

        if( !sm.isIntentional(req, resp) ){
            resp.sendError(401);
            return;
        }
        String title = req.getParameter("title");
        String code = req.getParameter("code");
        String pid = req.getParameter("pid");
        String notes = req.getParameter("notes");
        try {
            Session userSession = sm.authenticate(req, resp);
            if( null != userSession ){			
                CacheHelpers.notifyUserProgramsDirtied(userSession.getName());
                if (pid == null) {
                    saveNewProgram(pm, userSession, resp, title, code, notes);
                } else {
                    saveExistingProgram(pm, userSession, resp, pid, title, code, notes);
                }
            } else {
                log.warning("User session can't be retrieved; user appears to be logged out.");
                resp.sendError(401);
                return;
            }
        } finally {
            pm.close();
        }		
    }


    // TODO: we're passing quite a few parameters.  It may be time to
    // refactor to a parameter class here.
    private void saveNewProgram(PersistenceManager pm, Session userSession,
                                HttpServletResponse resp,
                                String title, String code, 
                                String notes) throws IOException {
        Program prog = new Program(code, userSession.getName());
        prog.updateTitle(title);
        if (notes != null) { prog.updateNotes(notes); }
        prog.setPublicId(NameGenerator.getInstance(getServletContext()).generateUniqueBase62Id(pm));
        pm.makePersistent(prog);

        resp.setContentType("text/plain"); 
        resp.getWriter().println(prog.getId());					
    }


    // Save a program that has an existing pid.
    private void saveExistingProgram(PersistenceManager pm, Session userSession,
                                     HttpServletResponse resp,
                                     String pid, String title, String code, String notes) 
        throws IOException {
        // Preconditions: the program is owned by the user, and has not been published yet.
        Long id = (Long) Long.parseLong(pid);
        Program prog = pm.getObjectById(Program.class, id);
        if (prog.getOwner().equals(userSession.getName()) && !prog.isPublished()) {
            if (title != null) { prog.updateTitle(title); }
            if (code != null) { prog.updateSource(code); }
            if (notes != null) { prog.updateNotes(notes); }

            if (prog.getPublicId() == null) {
                prog.setPublicId(NameGenerator.getInstance(getServletContext()).generateUniqueBase62Id(pm));
            }

            resp.setContentType("text/plain");
            resp.getWriter().println(prog.getId());					
        } else {
            // FIXME: throw an error that the client can recognize!
            throw new RuntimeException("Cannot save program: either not owner, or program published");
        }
    }
}
