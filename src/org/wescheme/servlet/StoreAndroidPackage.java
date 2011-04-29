package org.wescheme.servlet;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.AndroidPackageJob;
import org.wescheme.project.ObjectCode;
import org.wescheme.util.PMF;

import com.google.appengine.api.datastore.Blob;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;

/**
 * This servlet gets content from the off-site android packager.
 * 
 * @author dyoo
 *
 */
public class StoreAndroidPackage extends HttpServlet {
	private static final long serialVersionUID = 7524690884141108398L;
	
	public void doGet(HttpServletRequest req,
			HttpServletResponse res) throws IOException {
		doPost(req, res);
	}
	
	public void doPost(HttpServletRequest req,
				HttpServletResponse res) throws IOException {
		// Look at the url to see if this is a program
		String uri = req.getRequestURI();
		String[] chunks = uri.split("/");
		String id = chunks[chunks.length-1];

		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {

			AndroidPackageJob androidPackageJob = AndroidPackageJob.findByNonce(pm, id);
			if (androidPackageJob == null) {
				sendErrorResponseUnexpected(res);
				return;
			}
			
			ObjectCode obj = androidPackageJob.getObject();
			InputStream is = req.getInputStream();
			Blob b = readStreamAsBlob(is);

			obj.getAndroidPackage().setName(androidPackageJob.getName());
			obj.getAndroidPackage().setContent(b);
			obj.setAndroidPackageBuilt(true);
			pm.makePersistent(obj);
			// Exit				
			sendFinalResponse(res);
		} finally { pm.close(); }
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
	
	private void sendFinalResponse(HttpServletResponse res) throws IOException {
		res.setContentType("text/plain");
		Writer w = res.getWriter();
		w.write("ok\n");
	}

	private void sendErrorResponseUnexpected(HttpServletResponse res) throws IOException {
		res.setContentType("text/plain");
		Writer w = res.getWriter();
		w.write("unexpected\n");
	}
}
