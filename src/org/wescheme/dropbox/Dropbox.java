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

import org.jdom.Element;
import org.wescheme.util.XML;

@PersistenceCapable()
public class Dropbox extends XML {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Long id;
	@Persistent
	LinkedList<Bin> bins_;
	@Persistent
	String title_;
	@Persistent
	String ownerName_;
	
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

	@Override
	public Element toXML() {
		Element root = new Element("dropbox");
		root.addContent(XML.makeElement("dbid", id));
		root.addContent(XML.makeElement("title", title_));
		root.addContent(XML.makeElement("owner", ownerName_));
		
		for( Bin b : bins_){
			root.addContent(XML.makeElement("bin", b));
		}
		System.out.println(root);
		return root;
	}
	
	
	
	
}
