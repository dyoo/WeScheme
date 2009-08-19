package org.wescheme.keys;

import java.io.IOException;

import javax.cache.CacheException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.util.Crypt.KeyNotFoundException;

public class KeyServer extends HttpServlet {
	private static final long serialVersionUID = 8007643632397668226L;
	
	public void service(HttpServletRequest req, HttpServletResponse resp)	throws IOException 
	{	
		rotate();
		resp.sendError(200);
		
	}
	
	public void rotate(){
		try {
			KeyManager.rotateKeys();
		} catch (KeyNotFoundException e) {
			System.out.println("Key not found!");
		} catch (CacheException e) {
			System.out.println("Cache error!");
		}
	}
	
	public void init() 
	{	
		System.out.println("Intializer called.");
		try {
			KeyManager.initializeKeys();	
			System.out.println("Initialized key schedule.");
		} catch (CacheException e) {
			e.printStackTrace();
		} 
	}
	
}
