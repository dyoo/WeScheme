package org.wescheme.project;

import java.io.Serializable;
import java.util.List;
import java.util.Random;

import javax.jdo.PersistenceManager;
import javax.jdo.annotations.IdGeneratorStrategy;

import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.IdentityType;

import com.google.appengine.api.datastore.Key;

/**
 * Represents a packaging job that is expected to finish.
 * @author dyoo
 *
 */

@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class AndroidPackageJob implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2257895943724927957L;

	@SuppressWarnings("unused")
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Long id;

	@Persistent
	private Key objKey;

	@Persistent
	private String name;
	
	@Persistent
	private String nonce;
	
	
	public AndroidPackageJob(PersistenceManager pm, String name, ObjectCode obj) {
		this.objKey = obj.getKey();
		this.name = name;
		this.nonce = makeNonce(pm);
	}

	public String getName() { return this.name; }
	public ObjectCode getObject(PersistenceManager pm) { 
		return pm.getObjectById(ObjectCode.class, objKey);
	}
	public String getNonce() { return this.nonce; }
	

	@SuppressWarnings("unchecked")
	public static AndroidPackageJob findByNonce(PersistenceManager pm, String nonce) {
		javax.jdo.Query query = pm.newQuery(AndroidPackageJob.class);
		query.setFilter("nonce == param");
		query.declareParameters("String param");
		try {
			List<AndroidPackageJob> programs = (List<AndroidPackageJob>) query.execute(nonce);
			if (programs.size() == 1) {
				return programs.get(0);
			} else {
				return null;
			}
		} finally { 
			query.closeAll();
		}		
	}
	
	public void delete(PersistenceManager pm) {
		pm.deletePersistent(this);
	}
	


	private Random rng = new Random();
	private String makeNonce(PersistenceManager pm) {
		int length = 64;
		String characters = "abcdefghijklmnopqrstuvwxyz01234567890";
		char[] text = new char[length];

		while (true) {
			for (int i = 0; i < length; i++)
			{
				text[i] = characters.charAt(rng.nextInt(characters.length()));
			}
			String nonce = new String(text);
			if (findByNonce(pm, nonce) == null) {
				return nonce;
			}
		}
	}
}