package org.wescheme.project;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashSet;
import java.util.Set;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.wescheme.project.Compiler.BadCompilationResult;
import org.wescheme.project.Compiler.CompilationResult;
import org.wescheme.project.Compiler.GoodCompilationResult;

public class AndroidPackager {
	private static String packagingServletURL = "http://go.cs.brown.edu";
	
	public static interface PackagingResult {
		
	};
	
	
	
	
	/*
     * compile: SourceCode -> ObjectCode
     * Compiles the source code, using an external compilation server, and returns the compiled code.
     */
    public static String compile(String programName, String programSource, Set<String> permissions){
        System.out.println("compile");
        try {
            URL url = new URL(packagingServletURL);
					
            String data = "n=" + URLEncoder.encode(programName, "UTF-8") +
                "&t=moby3" + 
                "&r=" + URLEncoder.encode(
                		makeResourceString("program.js", programSource),
                		"UTF-8");

			
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setDoOutput(true);
            OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());
            wr.write(data);
            wr.flush();
				
            if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
            	return readStream(conn.getInputStream());
            } else {
            	throw new RuntimeException("Unable to create contact package server.");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private static String makeResourceString(String path, String content) {
    	return "(resource " + content + ")";
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
