package org.wescheme.project;

import java.io.BufferedInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.List;
import java.util.Set;
import java.util.zip.GZIPOutputStream;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.ServletContext;

import org.json.simple.JSONObject;

import com.google.appengine.api.urlfetch.HTTPMethod;
import com.google.appengine.api.urlfetch.HTTPRequest;
import com.google.appengine.api.urlfetch.URLFetchServiceFactory;
import com.google.appengine.api.urlfetch.URLFetchService;

import static com.google.appengine.api.urlfetch.FetchOptions.Builder.*;



public class AndroidPackager {

	/**
	 * Deadline before we timeout
	 */
	private static Double DEADLINE = 10.0;
	
			
	/**
	 * Creates an android package.
	 * @param ctx ServletContext
	 * @param programName String
	 * @param pm 
	 * @param programBytecode String
	 * @param permissions Set<String> The list of android permissions this program needs.
	 * @return
	 */
	public static void queueAndroidPackageBuild(ServletContext ctx, String programName, ObjectCode obj, PersistenceManager pm) {
		try {
			WeSchemeProperties properties = new WeSchemeProperties(ctx);
			URL url = new URL(properties.getAndroidPackagerUrl());

			ByteArrayOutputStream bout = getCompressedData(ctx, programName,
					obj.getObj(), 
					obj.getPermissions(),
					makeCallbackURL(ctx, programName, obj, pm));

			
			// We have to use the lower-level fetch service API because of the
			// potential for timeouts.
			HTTPRequest request = new HTTPRequest(url,
						HTTPMethod.POST,
						disallowTruncate().setDeadline(DEADLINE));
			request.setPayload(bout.toByteArray());
			URLFetchService fetchService = URLFetchServiceFactory.getURLFetchService();
			fetchService.fetch(request);
			return;
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
	
	
	/**
	 * Create a callback url that we can use to come back.
	 * @param obj
	 * @return
	 * @throws IOException 
	 */
	private static String makeCallbackURL(ServletContext ctx, String name, ObjectCode obj, PersistenceManager pm) throws IOException {
		WeSchemeProperties properties = new WeSchemeProperties(ctx);	
		AndroidPackageJob job = new AndroidPackageJob(pm, name, obj);
		System.out.println("trying to make the job persistent" + job);
		pm.makePersistent(job);
		return properties.getServerBaseUrl() + "/store_android/" + job.getNonce();
	}
	

	private static ByteArrayOutputStream getCompressedData(ServletContext ctx,
			String programName, String programSource, Set<String> permissions, String callbackUrl)
			throws UnsupportedEncodingException, IOException {
		String data = 
			("n=" + URLEncoder.encode(programName, "UTF-8") + 
					"&t=moby3" + 
					"&cb=" + URLEncoder.encode(callbackUrl, "UTF-8") +
					"&" + makeResourceChunk("program.js", 
							"var program = {};\nprogram.bytecode=" + programSource + ";") +
					"&" + makeResourceChunk("mindex.html", readStream(ctx.getResourceAsStream("/android-packager/index.html")))+
					"&" + makeResourceChunk("main.js", readStream(ctx.getResourceAsStream("/android-packager/main.js")))+
					"&" + makeResourceChunk("phonegap.js", readStream(ctx.getResourceAsStream("/android-packager/phonegap.js")))+
					"&" + makeResourceChunk("collections.js", readStream(ctx.getResourceAsStream("/js/mzscheme-vm/collections.js"))) +
					"&" + makeResourceChunk("support.js", readStream(ctx.getResourceAsStream("/js/mzscheme-vm/support.js"))) +
					"&" + makeResourceChunk("evaluator.js", readStream(ctx.getResourceAsStream("/js/mzscheme-vm/evaluator.js")))) +
					getPermissionChunks(permissions);
		ByteArrayOutputStream bout  = new ByteArrayOutputStream();
		GZIPOutputStream out = new GZIPOutputStream(bout);
		out.write(data.getBytes());
		out.close();
		System.out.println("size of compressed data: " + bout.size());
		return bout;
	}

	
	private static String getPermissionChunks(Set<String> permissions) throws UnsupportedEncodingException{
		StringBuilder b = new StringBuilder();
		for(String perm : permissions) { 
			b.append("&p=" + URLEncoder.encode(perm, "UTF-8"));
		}
		return b.toString();
	}
	
    @SuppressWarnings("unchecked")
	private static String makeResourceChunk(String path, String content) throws UnsupportedEncodingException {
    	JSONObject object = new JSONObject();
    	object.put("path", path);
    	object.put("bytes", content);
    	return "r=" + URLEncoder.encode(object.toJSONString(),"UTF-8");
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
