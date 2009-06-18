package org.wescheme.dropbox;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;
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
	Map<String, Bin> bins_;
	@Persistent
	String title_;
	@Persistent
	String ownerName_;
	@Persistent
	Date expiry_;
	
	public Dropbox(String owner, String title){
		bins_ = new HashMap<String, Bin>();
		ownerName_ = owner;
		title_ = title;
	}
	
	public void addBin(String binName){
		Bin bin = new Bin(binName);
		bins_.put(binName, bin);
	}
	
	public void addToBin(Program p, String binName) throws DropboxException{
		Bin b = bins_.get(binName);
		if( null == b ){ throw new DropboxException(); }
		
		b.add(p, ownerName_);
	}
	
	public class DropboxException extends Exception {
		private static final long serialVersionUID = 2852466072637433454L;
		
	}
	
	
	// display dumps the dropBox and its contents such that it can be sent to the client
	public String display(){
		return display(false);
	}
	
	public String display(boolean byOwner){
		return title_;
	}
	
	
	
	
	
}
