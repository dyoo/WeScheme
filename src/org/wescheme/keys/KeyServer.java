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
		rotate();
		resp.sendError(200);
	}
	
	public void rotate(){
		try {
			logger.info("Rotating keys.");
			KeyManager.rotateKeys();
		} catch (KeyNotFoundException e) {
			System.out.println("Key not found!");
		} catch (CacheException e) {
			System.out.println("Cache error!");
		}
	}
	
	public void init() 
	{	
		logger.info("Keyserver intializer called.");
		try {
			KeyManager.initializeKeys();	
			logger.info("Initialized key schedule.");
		} catch (CacheException e) {
			e.printStackTrace();
		} 
	}
}
