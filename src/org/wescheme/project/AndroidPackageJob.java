package org.wescheme.project;

import java.io.Serializable;
import java.util.List;
import java.util.Random;

import javax.jdo.PersistenceManager;
import javax.jdo.annotations.IdGeneratorStrategy;

import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

/**
 * Represents a packaging job that is expected to finish.
 * @author dyoo
 *
 */

public class AndroidPackageJob implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2257895943724927957L;

	@SuppressWarnings("unused")
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;

	@Persistent
	private ObjectCode obj;

	@Persistent
	private String nonce;
	
	
	public AndroidPackageJob(PersistenceManager pm, ObjectCode obj) {
		this.obj = obj;
		this.nonce = makeNonce(pm);
	}

	public ObjectCode getObject() { return this.obj; }
	public String getNonce() { return this.nonce; }
	

	@SuppressWarnings("unchecked")
	public static AndroidPackageJob findByNonce(PersistenceManager pm, String nonce) {
		javax.jdo.Query query = pm.newQuery(Program.class);
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