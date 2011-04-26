package org.wescheme.project;

import javax.servlet.http.HttpServlet;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Set;
import java.util.HashSet;

public class Compiler extends HttpServlet
{
    private static final long serialVersionUID = 6867416066840862239L;
	
	
    private static JSONParser jsonParser = new JSONParser();
	
    private static final String compilationServletURL = "http://moby-compiler.cs.brown.edu/servlets/standalone.ss";
	
    public interface CompilationResult {	
        boolean isBad();
        String getCompiledCode();
        Set<String> getPermissions();
        String getErrorMessage();
    }
	
    public static class GoodCompilationResult implements CompilationResult {
        private String compiledCode;
        private Set<String> permissions;
        public GoodCompilationResult(String compiledCode, Set<String> permissions) {
            this.compiledCode = compiledCode;
            this.permissions = new HashSet<String>(permissions);
        }
        public boolean isBad() { return false; }
        public String getCompiledCode() { return this.compiledCode; }
        public String getErrorMessage() { return null; }
        public Set<String> getPermissions() { return permissions; }
    }
	
    public static class BadCompilationResult implements CompilationResult {
        private String errorMessage;
        public BadCompilationResult(String errorMessage) {
            this.errorMessage = errorMessage;
        }
        public boolean isBad() { return true; }
        public String getCompiledCode() { throw new UnsupportedOperationException(); }
        public String getErrorMessage() { return this.errorMessage; }
        public Set<String> getPermissions() { throw new UnsupportedOperationException(); }
    }
	
	
	
    public static ObjectCode compile(SourceCode src) {
        CompilationResult result = Compiler.compile(src.getName(), src.toString());
        if (result.isBad()) {
            throw new RuntimeException(result.getErrorMessage());
        } else {
            return new ObjectCode(
                                  result.getCompiledCode(),
                                  result.getPermissions(),
                                  false);
        }
    }
	
    /*
     * compile: SourceCode -> ObjectCode
     * Compiles the source code, using an external compilation server, and returns the compiled code.
     */
    public static CompilationResult compile(String programName, String programSource){
        System.out.println("compile");
        try {
            URL url = new URL(compilationServletURL);
					
            String data = "name=" + URLEncoder.encode(programName, "UTF-8") +
                "&format=json" + 
                "&program=" + URLEncoder.encode(programSource, "UTF-8");

			
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setDoOutput(true);
            OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());
            wr.write(data);
            wr.flush();
				
            if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
                try {
                    JSONObject obj = (JSONObject) jsonParser.parse(readStream(conn.getInputStream()));
                    String compiledCode = (String) obj.get("bytecode");
                    JSONArray perms = (JSONArray) obj.get("permissions");
                    Set<String> permSet = new HashSet<String>();
                    for (int i = 0; i < perms.size(); i++) {
                    	permSet.add((String) perms.get(i));
                    }
                    return new GoodCompilationResult(compiledCode, permSet);		
                } catch (ParseException e) {
                    return new BadCompilationResult(e.toString());
                }
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
