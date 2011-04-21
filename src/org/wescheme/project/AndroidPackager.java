package org.wescheme.project;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.io.InputStream;
import java.io.BufferedInputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;

import org.wescheme.project.Compiler.BadCompilationResult;
import org.wescheme.project.Compiler.CompilationResult;
import org.wescheme.project.Compiler.GoodCompilationResult;

public class AndroidPackager {
	
	private static final String compilationServletURL = "http://moby-compiler.cs.brown.edu/servlets/standalone.ss";

	/*
	 * compile: SourceCode -> ObjectCode
	 * Compiles the source code, using an external compilation server, and returns the compiled code.
	 */
	public static CompilationResult compile(String programName, String programSource){
		System.out.println("compile");
		try {
			URL url = new URL(compilationServletURL);
					
			String data = "name=" + URLEncoder.encode(programName, "UTF-8") +
			"&format=json"+
			"&program=" + URLEncoder.encode(programSource, "UTF-8");
					
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());
			wr.write(data);
			wr.flush();
				
			if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
				// FIXME: the content here is json and we need to parse it.
				String compiledCode = readStream(conn.getInputStream());
				return new GoodCompilationResult(compiledCode);		
			} else {
				String errorMessage = readStream(conn.getErrorStream());
				return new BadCompilationResult(errorMessage);
			}
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
