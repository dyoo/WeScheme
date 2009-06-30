package org.wescheme.project;

import java.util.LinkedList;
import java.util.List;

import javax.jdo.annotations.Persistent;

import org.jdom.Element;
import org.wescheme.user.Session;
import org.wescheme.util.XML;

public class ProgramDigest extends Program {

	public ProgramDigest(String src, Session owner) {
		super(src, owner);
	}


	public ProgramDigest(Program p, String owner) {
		super(p, owner);
	}

	public ProgramDigest(Program p) {
		super(p, p.owner_);
	
	}
	
	public Element toXML(){
	Element root = new Element("ProgramDigest");
		
		root.addContent(XML.makeElement("id", id));		
		root.addContent(XML.makeElement("title", title_));
		root.addContent(XML.makeElement("owner", owner_));
		root.addContent(XML.makeElement("author", author_));
		root.addContent(XML.makeElement("modified", time_));
		
		return root;
	}
	
	
}
