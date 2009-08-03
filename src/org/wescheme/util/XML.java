package org.wescheme.util;

import org.jdom.Element;

public abstract class XML {

	public abstract Element toXML();
	public static Element makeElement(String s, Object o){
		Element root = new Element(s);
		root.addContent(o.toString());
		
		return root;
		
	}
	
}
