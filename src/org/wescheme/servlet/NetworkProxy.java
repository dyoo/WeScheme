package org.wescheme.servlet;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.net.URLConnection;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sun.net.www.URLConnection;

public class NetworkProxy extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse res) {
		try {
			URL url = new URL(req.getParameter("url"));
			URLConnection conn = url.openConnection();
			res.setContentType(conn.getContentType());
			BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	        BufferedWriter writer = new BufferedWriter(res.getWriter());
	        int b;
	        while (true) {
	        	b = in.read();
	        	if (b == -1) {
	        		break;
	        	}
	        	writer.write(b);
	        }
		} catch (MalformedURLException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void doPost(HttpServletRequest req, HttpServletResponse res) {
		String url = req.getParameter("url");
		String data = req.getParameter("data");
		URLEncoder.encode(data);
	}
}
