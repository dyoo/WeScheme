package org.wescheme.project;

import javax.servlet.ServletContext;
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
    
    
    public interface CompilationResult {	
        boolean isBad();
        String getCompiledCode();
        Set<String> getPermissions();
        Set<String> getProvides();
        String getErrorMessage();
    }
	
    public static class GoodCompilationResult implements CompilationResult {
        private String compiledCode;
        private Set<String> permissions;
        private Set<String> provides;
        public GoodCompilationResult(String compiledCode, 
                                     Set<String> permissions,
                                     Set<String> provides) {
            this.compiledCode = compiledCode;
            this.permissions = new HashSet<String>(permissions);
            this.provides = new HashSet<String>(provides);
        }
        public boolean isBad() { return false; }
        public String getCompiledCode() { return this.compiledCode; }
        public String getErrorMessage() { return null; }
        public Set<String> getPermissions() { return permissions; }
        public Set<String> getProvides() { return provides; }
    }


	
    public static class BadCompilationResult extends Throwable implements CompilationResult {
		private static final long serialVersionUID = 3258083004919853680L;
		private String errorMessage;
        public BadCompilationResult(String errorMessage) {
        	super(errorMessage);
        	this.errorMessage = errorMessage;
        }
        public boolean isBad() { return true; }
        public String getCompiledCode() { throw new UnsupportedOperationException(); }
        public String getErrorMessage() { return this.errorMessage; }
        public Set<String> getPermissions() { throw new UnsupportedOperationException(); }
        public Set<String> getProvides() { throw new UnsupportedOperationException(); }
    }
	
	
	
    public static ObjectCode compile(ServletContext ctx, SourceCode src) throws BadCompilationResult {
        CompilationResult result = Compiler.compile(ctx, src.getName(), src.toString());
        if (result.isBad()) {
            throw (BadCompilationResult) result;
        } else {
            return new ObjectCode(result.getCompiledCode(),
                                  result.getPermissions(),
                                  result.getProvides(),
                                  false);
        }
    }
	
    /*
     * compile: SourceCode -> ObjectCode
     * Compiles the source code, using an external compilation server, and returns the compiled code.
     */
    public static CompilationResult compile(ServletContext ctx, String programName, String programSource){
        try {
        	URL url = new URL(new WeSchemeProperties(ctx).getCompilationServerUrl());					
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
                    Set<String> perms = jsonStringArrayToSet((JSONArray) obj.get("permissions"));
                    Set<String> provides = jsonStringArrayToSet((JSONArray) obj.get("provides"));
                    return new GoodCompilationResult(compiledCode, perms, provides);
                } catch (ParseException e) {
                    return new BadCompilationResult(e.toString());
                }
            } else {
                String errorMessage = readStream(conn.getErrorStream());
                return new BadCompilationResult(errorMessage);
            }
        } catch (MalformedURLException e) {
            return new BadCompilationResult(e.getMessage());
        } catch (UnsupportedEncodingException e) {
            return new BadCompilationResult(e.getMessage());
        } catch (IOException e) {
            return new BadCompilationResult(e.getMessage());
        }
    }


    /** Given either a (json array of strings),  or null, coerse it to a Set<String>.
        A null value will be coersed to the empty set.
     **/
    private static Set<String> jsonStringArrayToSet(JSONArray arr) {
        Set<String> aSet = new HashSet<String>();
        if (arr == null) { return aSet; }

        for (int i = 0; i < arr.size(); i++) {
            aSet.add((String) arr.get(i));
        }
        return aSet;
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
