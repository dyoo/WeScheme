package org.wescheme.project;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;


import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.util.PMF;

public class ProgramManager {

	private static final long serialVersionUID = -2759673641570840242L;

	@SuppressWarnings("unchecked")
	List<Program> getPrograms(){
		PersistenceManager pm = PMF.get().getPersistenceManager();
		Query query = pm.newQuery(Program.class);
	
		List<Program> programs = (List<Program>) query.execute();
		return programs;
	}

		
}
	

