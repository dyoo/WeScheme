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
import java.util.List;
import java.util.ArrayList;
import java.util.Set;

import javax.servlet.ServletContext;



import com.google.appengine.api.datastore.Blob;

public class AndroidPackager {
	// TODO: centralize all of the remote urls.  We need this to support offline mode for Shriram's demo.
	
	private static String packagingServletURL = "http://go.cs.brown.edu";
	
	/*
	 * compile: SourceCode -> ObjectCode
	 * Compiles the source code, using an external compilation server, and returns the compiled code.
	 */
	public static Blob compile(ServletContext ctx, String programName, String programSource, Set<String> permissions){
		try {
			URL url = new URL(packagingServletURL);

			String data = 
				("n=" + URLEncoder.encode(programName, "UTF-8") + 
						"&t=moby3" + 
						"&" + makeResourceChunk("program.js", programSource) +
						"&" + makeResourceChunk("index.html", readStream(ctx.getResourceAsStream("/android-packager/index.html")))+
						"&" + makeResourceChunk("main.js", readStream(ctx.getResourceAsStream("/android-packager/main.js")))+
						"&" + makeResourceChunk("phonegap.js", readStream(ctx.getResourceAsStream("/android-packager/phonegap.js")))+
						"&" + makeResourceChunk("collections.js", readStream(ctx.getResourceAsStream("/js/mzscheme-vm/collections.js"))) +
						"&" + makeResourceChunk("support.js", readStream(ctx.getResourceAsStream("/js/mzscheme-vm/support.js"))) +
						"&" + makeResourceChunk("evaluator.js", readStream(ctx.getResourceAsStream("/js/mzscheme-vm/evaluator.js")))) +
						getPermissionChunks(permissions);

			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());
			wr.write(data);
			wr.flush();

			if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
				return readStreamAsBlob(conn.getInputStream());
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

	
	private static String getPermissionChunks(Set<String> permissions) throws UnsupportedEncodingException{
		StringBuilder b = new StringBuilder();
		for(String perm : permissions) { 
			b.append("&p=" + URLEncoder.encode(perm, "UTF-8"));
		}
		return b.toString();
	}
	
    private static String makeResourceChunk(String path, String content) throws UnsupportedEncodingException {
    	return "r=" + URLEncoder.encode("(resource " + path + " " + content + ")", "UTF-8");
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

    private static Blob readStreamAsBlob(InputStream stream) {
        BufferedInputStream bs = new BufferedInputStream(stream);
        int nextChar;
        List<Byte> bytes = new ArrayList<Byte>();
        try {
            while ((nextChar = bs.read()) != -1) {
                bytes.add((byte) nextChar);
            }
            // There has to be a more direct way to construct a Blob from
            // a stream of data...
            byte[] barray = new byte[bytes.size()];
            for(int i = 0; i < bytes.size(); i++) {
            	barray[i] = bytes.get(i);
            }
            return new Blob(barray);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
