package org.wescheme.dropbox;


import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
import javax.jdo.Query;

import org.wescheme.util.HTML;

@PersistenceCapable()
public class Dropbox {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Long id;
	@Persistent
	LinkedList<Bin> bins_;
	@Persistent
	String title_;
	@Persistent
	String ownerName_;
	@Persistent
	Date expiry_;
	
	public Long getId(){
		return id;
	}
	
	public Dropbox(String owner, String title){
		bins_ = new LinkedList<Bin>();
		ownerName_ = owner;
		title_ = title;
	}
	
	public String owner(){
		return ownerName_;
	}
	
	public void addBin(String binName){
		
		//TODO addBin /must/ be done within a transaction to avoid race conditions
		
		bins_.add(new Bin(binName));
	}
	
	public class DropboxException extends Exception {
		private static final long serialVersionUID = 2852466072637433454L;	
	}
	
	public String getTitle(){
		return title_;
	}
	
	// display dumps the dropBox and its contents such that it can be sent to the client
	public String display(){
		return display("");
	}
	
	public String display(String user){
		String displayString = "<a href=\"/displayDropbox?dbid=" + id + "\">" + title_ + "</a>";
		displayString += HTML.toTable(bins_);
		if( user.equals(ownerName_) ){
			displayString +=
			"<form method='POST' action='addBin'>"	+
			"<input type='text' name='binName'></input>" +
			"<input type='hidden' name='dbid' value='" + id + "'></input>" +
			"<input type='submit' value='Add Bin'></input>" +
			"</form>";
		}
		
		return displayString;
		
	}
	
	@SuppressWarnings("unchecked")
	public String getContents(PersistenceManager pm, String user){
		String result = "";
		
		if( user.equals(ownerName_) ){
			Query query = pm.newQuery(Entry.class);
			query.setFilter("dbID_ == dbidParam");
			query.declareParameters("Long dbidParam");
			
			List<Entry> results = (List<Entry>) query.execute(id);
			for (Entry e : results) {
				result += " " + e;
			}
			    
		}
		
		return result;
		
	}
	
	// necessary?
	public static Dropbox getDropbox(PersistenceManager pm, Long dbid){
	
		return pm.getObjectById(Dropbox.class, dbid);
		
	}
	
	public long id(){
		return id;
	}
	
	public List<Bin> getBins(){
		return new LinkedList<Bin>(bins_);
	}
	
	
	
	
}
