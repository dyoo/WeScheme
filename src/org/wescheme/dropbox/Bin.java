package org.wescheme.dropbox;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import org.jdom.Element;
import org.wescheme.util.XML;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable()
public class Bin extends XML {

	public Bin(String binName) {
		name_ 	  = binName;
		//validity_ = new Validity();
	}
	
	public String getName(){
		return name_;
	}
	
	public String toString(){
		return name_;
	}
	
	public boolean isValid(){
		//TODO validity stub. Learn more about the calendar and flesh this out.
		return true;
	}
	
	public String print(){
		return
		"<div class=\"list\" id=\"" + getName() + "\">" +
		"<div class=\"header\">" + getName() + "</div></div>";
	}
	
	@SuppressWarnings("unused")
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	//@Persistent
	//private Validity validity_;
	@Persistent
	private String name_; 
	
	public Element toXML(){
		Element root = new Element("bin");
		root.addContent(XML.makeElement("name", name_));
		return root;
	}
	
}
