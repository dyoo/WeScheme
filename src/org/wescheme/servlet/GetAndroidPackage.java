package org.wescheme.servlet;

import java.io.BufferedOutputStream;
import java.io.IOException;

import javax.jdo.PersistenceManager;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.project.AndroidPackage;
import org.wescheme.project.ObjectCode;
import org.wescheme.project.Program;
import org.wescheme.util.PMF;
import org.wescheme.util.Queries;


/**
 * Returns program as an Android package if publicId is provided, and if the project
 * has already been compiled into an ObjectCode.
 * 
 * Parameters:
 *    publicId: the publicId of the project.
 */


public class GetAndroidPackage extends HttpServlet {
	private static final long serialVersionUID = -2793797933381601983L;

	public void doGet(HttpServletRequest req, HttpServletResponse response) throws IOException {
		PersistenceManager pm = PMF.get().getPersistenceManager();
		try {
			if (req.getParameter("publicId") != null) {
				Program prog = getProgramByPublicId(pm, req.getParameter("publicId"));
				writeAndroidPackageResponse(prog, response);					
			} else {
				response.sendError(403);
			}					
		} finally {
			pm.close();
		}
	}

	private void writeAndroidPackageResponse(Program program, HttpServletResponse response)  throws IOException {
		ObjectCode objectCode = program.getObject();
		AndroidPackage pkg = 
			objectCode.getAndroidPackage(this.getServletContext(), program.getTitle());
		response.setContentType("application/vnd.android.package-archive");
		response.addHeader("content-disposition",
				"attachment; filename=" + makeFilename(program)
				);
		BufferedOutputStream out = new BufferedOutputStream(response.getOutputStream());
		out.write(pkg.getContent().getBytes());
		out.close();
	}
	
	private String makeFilename(Program program) {
		String title = program.getTitle();
		String[] chunks = title.split("[^\\w\\d]+");
		StringBuilder builder = new StringBuilder();
		for(int i = 0; i < chunks.length; i++) {
			if (chunks[i].length() > 0) {
				builder.append(Character.toUpperCase(chunks[i].charAt(i)));
				builder.append(chunks[i].substring(1));
			}
		}
		return builder.toString();
	}
	
	

	private Program getProgramByPublicId(PersistenceManager pm, String publicId) {
		Program program = Queries.getProgramByPublicId(pm, publicId);
		if (program == null) {
			throw new RuntimeException("Could not find unique program with publicId=" + publicId);
		}
		return program;
	}	
}
