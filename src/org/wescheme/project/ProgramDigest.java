package org.wescheme.project;

import javax.jdo.PersistenceManager;

import org.jdom.Element;
import org.wescheme.util.XML;

public class ProgramDigest {
	private Program program;

	public ProgramDigest(Program p) {
		this.program = p;
	}
	
	public Element toXML(PersistenceManager pm){
	Element root = new Element("ProgramDigest");
		
		root.addContent(XML.makeElement("id", program.getId()));		
		if(program.getPublicId() != null)
			root.addContent(XML.makeElement("publicId", program.getPublicId()));
		root.addContent(XML.makeElement("title", program.getTitle()));
		root.addContent(XML.makeElement("owner", program.getOwner()));
		root.addContent(XML.makeElement("author", program.getAuthor()));
		root.addContent(XML.makeElement("modified", program.getTime()));
		root.addContent(XML.makeElement("published", program.isPublished()));

		Element sharedAsElt = new Element("sharedAs");
		for(Program p : this.program.getBacklinkedPrograms(pm)) {
			if (p.getPublicId() != null) {
				Element shared = new Element("Entry");
				shared.addContent(XML.makeElement("publicId", p.getPublicId()));
				shared.addContent(XML.makeElement("title", p.getTitle()));
				shared.addContent(XML.makeElement("modified", p.getTime()));
				sharedAsElt.addContent(shared);
			}
		}
		root.addContent(sharedAsElt);
		
		return root;
	}
	
	
}
