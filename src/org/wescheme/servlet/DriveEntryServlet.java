package org.wescheme.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.drive.State;

import com.google.gson.Gson;

public class DriveEntryServlet extends BaseServlet {
	  @Override
	  public void doGet(HttpServletRequest req, HttpServletResponse resp)
	      throws IOException, ServletException {
		// Making sure the code gets processed
	    req.setAttribute("client_id", new Gson().toJson(getClientId(req, resp)));
	    // Deserialize the state in order to specify some values to the DrEdit
	    // JavaScript client below.
	    if (req.getParameter("state") != null) {
	      State state = new State(req.getParameter("state"));
	      if (state.ids != null && state.ids.size() > 0) {
	        resp.sendRedirect("/openEditor?publicId=" + state.ids.toArray()[0]);
	        return;
	      }
	    }
	    resp.sendRedirect("/openEditor");
	  }
}
