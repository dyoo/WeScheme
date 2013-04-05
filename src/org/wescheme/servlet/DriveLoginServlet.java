/*
 * Copyright (c) 2012 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package org.wescheme.servlet;

//import org.wescheme.drive.model.State;
import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.services.oauth2.Oauth2;
import com.google.api.services.oauth2.model.Userinfo;
import com.google.gson.Gson;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.user.Session;
import org.wescheme.user.SessionManager;


/**
 * Servlet to check that the current user is authorized and to serve the
 * start page for DrEdit.
 *
 * @author vicfryzel@google.com (Vic Fryzel)
 * @author nivco@google.com (Nicolas Garnier)
 */
@SuppressWarnings("serial")
public class DriveLoginServlet extends BaseServlet {
	private static final Logger log = Logger.getLogger(DriveLoginServlet.class.getName());
  /**
   * Ensure that the user is authorized, and setup the required values for
   * index.jsp.
   */
  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse resp)
      throws IOException, ServletException {
	req.setAttribute("client_id", new Gson().toJson(getClientId(req, resp)));
	SessionManager sm = new SessionManager();
	Session s = sm.authGoogleOAuth(getUserInformation(req, resp));
	if (s != null)
	{
		try
		{
			sm.issueSession(s, resp);
		}
		catch (Exception e)
		{
			log.severe("unable to issue session: " + e);
		}
	}
	
    // Deserialize the state in order to specify some values to the DrEdit
    // JavaScript client below.
	// TODO remove this if we don't need this in the wescheme version
    /*if (req.getParameter("state") != null) {
      State state = new State(req.getParameter("state"));
      if (state.ids != null && state.ids.size() > 0) {
        resp.sendRedirect("/#/edit/" + state.ids.toArray()[0]);
        return;
      } else if (state.parentId != null) {
        resp.sendRedirect("/#/create/" + state.parentId);
        return;
      }
    }*/
    req.getRequestDispatcher("/WEB-INF/templates/index.jsp").forward(req, resp);
  }
  

  
  public Userinfo getUserInformation(HttpServletRequest req, HttpServletResponse resp) throws IOException
  {
    	Oauth2 service = getOauth2Service(req, resp);
      try {
      	Userinfo about = service.userinfo().get().execute();
        return about;
      } catch (GoogleJsonResponseException e) {
        if (e.getStatusCode() == 401) {
          // The user has revoked our token or it is otherwise bad.
          // Delete the local copy so that their next page load will recover.
          deleteCredential(req, resp);
          sendError(resp, 401, "Unauthorized");
        }
      }
      return null;
  }
  
  /**
   * Build and return an Oauth2 service object based on given request parameters.
   *
   * @param req Request to use to fetch code parameter or accessToken session
   *            attribute.
   * @param resp HTTP response to use for redirecting for authorization if
   *             needed.
   * @return Drive service object that is ready to make requests, or null if
   *         there was a problem.
   */
  private Oauth2 getOauth2Service(HttpServletRequest req,
      HttpServletResponse resp) {
    Credential credentials = getCredential(req, resp);

    return new Oauth2.Builder(TRANSPORT, JSON_FACTORY, credentials).build();
  }
}