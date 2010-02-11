package org.wescheme.project;

import java.util.List;


import javax.jdo.PersistenceManager;
import javax.jdo.Query;


import org.wescheme.util.PMF;

public class ProgramManager {

	private static final long serialVersionUID = -2759673641570840242L;

	@SuppressWarnings("unchecked")
	List<Program> getPrograms(){
		PersistenceManager pm = PMF.getManager();
		try {
			Query query = pm.newQuery(Program.class);
			List<Program> programs = (List<Program>) query.execute();
			return programs;
		} finally {
			pm.close();
		}
	}


}


