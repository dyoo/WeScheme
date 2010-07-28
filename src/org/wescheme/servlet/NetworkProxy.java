package org.wescheme.servlet;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.Writer;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.net.URLConnection;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class NetworkProxy extends HttpServlet {
	// NetworkProxy currently disabled.  Unsafe as it stands.
	
	/*
	private static final long serialVersionUID = 2565511296203717652L;

	public void doGet(HttpServletRequest req, HttpServletResponse res) {
		try {
			URL url = new URL(req.getParameter("url"));
			URLConnection conn = url.openConnection();
			res.setContentType(conn.getContentType());
			BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	        BufferedWriter writer = new BufferedWriter(res.getWriter());
	        copyReaderToWriter(in, writer);
	        in.close();
	        writer.close();
		} catch (MalformedURLException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	public void doPost(HttpServletRequest req, HttpServletResponse res) {
		try {
			URL url = new URL(req.getParameter("url"));
			String data = req.getParameter("data");
			URLConnection conn = url.openConnection();			
			URLEncoder.encode(data, "UTF-8");
	        OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());
	        wr.write(data);
	        wr.flush();
	        wr.close();
	        res.setContentType(conn.getContentType());
			BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			BufferedWriter writer = new BufferedWriter(res.getWriter());
			copyReaderToWriter(in, writer);
			in.close();
	        writer.close();
		} catch (MalformedURLException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
		
	private void copyReaderToWriter(Reader r, Writer w) throws IOException {
        int b;
        while (true) {
        	b = r.read();
        	if (b == -1) {
        		break;
        	}
        	w.write(b);
        }
	}
*/
	}
