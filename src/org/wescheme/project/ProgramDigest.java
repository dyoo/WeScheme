package org.wescheme.project;

import org.jdom.Element;
import org.wescheme.util.XML;

public class ProgramDigest {
	private Program program;

	public ProgramDigest(Program p) {
		this.program = p;
	}
	
	public Element toXML(){
	Element root = new Element("ProgramDigest");
		
		root.addContent(XML.makeElement("id", program.getId()));		
		if(program.getPublicId() != null)
			root.addContent(XML.makeElement("publicId", program.getPublicId()));
		root.addContent(XML.makeElement("title", program.getTitle()));
		root.addContent(XML.makeElement("owner", program.getOwner()));
		root.addContent(XML.makeElement("author", program.getAuthor()));
		root.addContent(XML.makeElement("modified", program.getTime()));
		root.addContent(XML.makeElement("published", program.isPublished()));
		
		return root;
	}
	
	
}
