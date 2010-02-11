package org.wescheme.keys;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class KeyServer extends HttpServlet {
	static Logger logger = Logger.getLogger(KeyServer.class.getName());
	private static final long serialVersionUID = 8007643632397668226L;
	
	/**
	 * Performs a clock tick, possibly rotating the keys.
	 */
	public void service(HttpServletRequest req, HttpServletResponse resp) throws IOException 
	{	
		logger.info("KeyServer sending a clocktick to the key manager.");
		KeyManager.clockTick();
		resp.sendError(200);
	}
}
