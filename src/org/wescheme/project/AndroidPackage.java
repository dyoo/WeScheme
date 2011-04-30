package org.wescheme.project;

import com.google.appengine.api.datastore.Blob;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;



import java.io.Serializable;
import javax.jdo.annotations.IdentityType;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class AndroidPackage implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1636299813888198554L;

	@SuppressWarnings("unused")
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String name;

	@Persistent
	private Blob content;

	public AndroidPackage() {
		this.name = null;
		this.content = null;
	}
	
	public String getName() { return this.name; }
	public Blob getContent() { return this.content; }
	public void setName(String name) { this.name = name; }
	public void setContent(Blob content) { 
		this.content = content; 
	}
}
