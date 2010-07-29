package org.wescheme.util;

import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
	
import org.wescheme.dropbox.Dropbox;
import org.wescheme.project.Program;
	
/**
 * Centralizes all of the queries we're doing on the database.
 * @author dyoo
 *
 */
public class Queries {
	@SuppressWarnings("unchecked")
	public static List<Program> getBacklinkedPrograms(PersistenceManager pm,
			Long programId) {
		Query query = pm.newQuery(Program.class);
		query.setFilter("backlink_ == id");
		query.setOrdering("time_ desc");
		query.declareParameters("Long id");
		try {
			List<Program> pl = (List<Program>) query.execute(programId);
			return pl;
		} finally {
			query.closeAll();
		}
	}
	
	public static List<Program> getUserPrograms(PersistenceManager pm, String userName) {
		Query query = pm.newQuery(Program.class);
		query.setFilter("owner_ == ownerParam");
		query.setOrdering("time_ desc");
		query.declareParameters("String ownerParam");		       
		try {
			@SuppressWarnings({ "unchecked" })
			    List<Program> pl = (List<Program>) 
			    query.execute(userName);
			return pl;
		} finally {
			query.closeAll();
		}
	}

	
	
	@SuppressWarnings("unchecked")
	public static Program getProgramByPublicId(PersistenceManager pm, String publicId) {
		javax.jdo.Query query = pm.newQuery(Program.class);
		query.setFilter("publicId_ == param");
		query.declareParameters("String param");
		try {
			List<Program> programs = (List<Program>) query.execute(publicId.toLowerCase());
			if (programs.size() == 1) {
				return programs.get(0);
			} else {
				throw new RuntimeException("Could not find unique program with publicId=" + publicId);
			}
		} finally { 
			query.closeAll();
		}		
	}
	
	
	
	public static List<Dropbox> getDropboxes(PersistenceManager pm, String userName) {
		Query query = pm.newQuery(Dropbox.class);
		query.setFilter("ownerName_ == ownerParam");
		query.declareParameters("String ownerParam");			
		try {
			@SuppressWarnings({ "unchecked" })
			List<Dropbox> dbl = (List<Dropbox>) query.execute(userName);
			return dbl;
		} finally {
			query.closeAll();
		}
	}
}
