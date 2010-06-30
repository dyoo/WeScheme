package org.wescheme.project;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import org.jdom.Element;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;

@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class SourceCode {

	@SuppressWarnings("unused")
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;

	@Persistent
	private Text src_;
		
	@Persistent
	private String name;
	
	
	public SourceCode(String name, String src){
		this.key = null;
		this.name = name;
		src_ = new Text(src);
	}
	
	public String toString(){
		return src_.getValue();
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getName() {
		if (this.name == null) {
			return "program";
		}
		return this.name;
	}
	
	public Element toXML() {
		Element root = new Element("source");
		root.setText(src_.getValue());
		return root;
	}
	
}
