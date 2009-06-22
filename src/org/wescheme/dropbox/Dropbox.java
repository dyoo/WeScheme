package org.wescheme.dropbox;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.jdo.PersistenceManager;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import org.wescheme.project.Program;

@PersistenceCapable()
public class Dropbox {

	@SuppressWarnings("unused")
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Long id;
	@Persistent
	Integer binId_;
	@Persistent
	HashMap<Integer, Bin> bins_;
	@Persistent
	String title_;
	@Persistent
	String ownerName_;
	@Persistent
	Date expiry_;
	
	public Dropbox(String owner, String title){
		binId_ = 0;
		bins_ = new HashMap<Integer, Bin>();
		ownerName_ = owner;
		title_ = title;
	}
	
	public String owner(){
		return ownerName_;
	}
	
	public void addBin(String binName){
		
		//TODO addBin /must/ be done within a transaction to avoid race conditions
		
		bins_.put(binId_, new Bin(binName));
		++binId_;
	}
	
	public class DropboxException extends Exception {
		private static final long serialVersionUID = 2852466072637433454L;	
	}
	
	// display dumps the dropBox and its contents such that it can be sent to the client
	public String display(){
		return display(false);
	}
	
	public String display(boolean byOwner){
		return title_ + ": " + bins_.toString();
	}
	
	// necessary?
	public static Dropbox getDropbox(PersistenceManager pm, Long dbid){
	
		return pm.getObjectById(Dropbox.class, dbid);
		
	}
	
	public long id(){
		return id;
	}
	
	
}
