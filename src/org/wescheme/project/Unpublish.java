package org.wescheme.project;

import javax.jdo.PersistenceManager;

import org.wescheme.util.PMF;

public class Unpublish {

	public void unpublish(long id){
		PersistenceManager pm = PMF.get().getPersistenceManager();
		Program p = pm.getObjectById(Program.class, id);
		p.unpublish();
	}
	
}
