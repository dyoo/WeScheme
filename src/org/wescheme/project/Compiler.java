package org.wescheme.project;

import javax.servlet.http.HttpServlet;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.HashSet;

public class Compiler extends HttpServlet
{
	private static final long serialVersionUID = 6867416066840862239L;
	
	private static final String compilationServletURL = "http://go.cs.brown.edu:8000/servlets/standalone.ss";
	
	/*
	 * compile: SourceCode -> ObjectCode
	 * Compiles the source code, using an external compilation server, and returns the compiled code.
	 */
	public static ObjectCode compile(SourceCode src){
		try {
			URL url = new URL(compilationServletURL);
			
			
			
			String data = "name="+ URLEncoder.encode(src.getName(), "UTF-8") +
					"&program=" + URLEncoder.encode(src.toString(), "UTF-8");
					
			URLConnection conn = url.openConnection();
			conn.setDoOutput(true);
			OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());
			wr.write(data);
			wr.flush();
				
			String compiledCode = readStream(conn.getInputStream());
			// FIXME: no error trapping when the compile goes bad!
			return new ObjectCode(compiledCode, 
					new HashSet<String>(), false);
		} catch (MalformedURLException e) {
			throw new RuntimeException(e);
		} catch (UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	
	private static String readStream(InputStream stream) {
		BufferedInputStream bs = new BufferedInputStream(stream);
		int nextChar;
		StringBuilder builder = new StringBuilder();
		try {
			while ((nextChar = bs.read()) != -1) {
				builder.append((char) nextChar);
			}
			return builder.toString();
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
	
}
