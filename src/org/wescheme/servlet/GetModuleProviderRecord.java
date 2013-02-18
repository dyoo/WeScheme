package org.wescheme.servlet;

import java.io.IOException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.wescheme.project.Program;
import javax.jdo.PersistenceManager;
import org.wescheme.util.PMF;
import org.wescheme.util.Queries;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;


public class GetModuleProviderRecord extends HttpServlet {

    /**
     * Returns a module provider record, given publicId.
     *
     * A module provider record only provides a name and a list of the
     * provides, of the form { name: <string>, provides: [<string>, ...] }
     * outputted as JSON text.
     *
     * If lookup fails, outputs the false value.
     */	
	
    public void doGet(HttpServletRequest req, HttpServletResponse resp) 
        throws IOException {
        String publicId = req.getParameter("publicId");
        if (publicId != null && publicId.length() > 0) {
            PersistenceManager pm = PMF.get().getPersistenceManager();
            Program prog = Queries.getProgramByPublicId(pm, publicId);
            if (prog == null) {
                resp.setContentType("text/json");
                resp.getWriter().print("false");
            } else {
                String moduleName = "wescheme/" + publicId;
                JSONArray provides = new JSONArray();
                for(String provide : prog.getObject().getProvides()) {
                    provides.add(provide);
                }
                resp.setContentType("text/json");
                JSONObject json = new JSONObject();
                json.put("name", moduleName);
                json.put("provides", provides);
                resp.getWriter().print(json.toString());
            }
        } else {
            resp.sendError(400, "publicId parameter missing");
            return;
        }
    }
}
