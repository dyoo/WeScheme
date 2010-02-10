package org.wescheme.util;

import javax.jdo.JDOHelper;
import javax.jdo.PersistenceManager;

import javax.jdo.PersistenceManagerFactory;
import javax.servlet.ServletContext;


public final class PMF {
	private static final PersistenceManagerFactory pmfInstance =
		JDOHelper.getPersistenceManagerFactory("transactions-optional");

	/*
    public static PersistenceManagerFactory getFactory() {
        return pmfInstance;
    }
	 */

	public static PersistenceManager getManager() {
		return pmfInstance.getPersistenceManager();
	}

	private static String INSTANCE_LABEL = "org.wescheme.util.PMF.instance";
	public static PersistenceManager getManager(ServletContext ctx) {
		Object factoryInstance = ctx.getAttribute(INSTANCE_LABEL);
		if (factoryInstance == null) {
			factoryInstance = 
				JDOHelper.getPersistenceManagerFactory("transactions-optional");
			ctx.setAttribute(INSTANCE_LABEL, factoryInstance);
		}
		return ((PersistenceManagerFactory)factoryInstance).getPersistenceManager();
	}
}