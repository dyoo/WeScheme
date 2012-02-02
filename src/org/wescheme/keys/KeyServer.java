package org.wescheme.keys;

import java.io.IOException;
import java.util.logging.Logger;

import javax.cache.CacheException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.util.Crypt.KeyNotFoundException;

public class KeyServer extends HttpServlet {
    static Logger logger = Logger.getLogger(KeyServer.class.getName());
    private static final long serialVersionUID = 8007643632397668226L;
	
    public void service(HttpServletRequest req, HttpServletResponse resp) throws IOException 
    {	
        try {
            logger.info("Rotating keys.");
            KeyManager.rotateKeys();
            resp.setContentType("text/plain");
            resp.getWriter().write("ok");
        } catch (KeyNotFoundException e) {
            resp.sendError(500, "Key not found!");
        } catch (CacheException e) {
            resp.sendError(500, "Cache error!");
        }
    }
}
