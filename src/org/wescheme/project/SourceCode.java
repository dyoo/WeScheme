package org.wescheme.project;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import org.jdom.Element;
import org.wescheme.util.XML;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;
@PersistenceCapable
public class SourceCode extends XML {
	@SuppressWarnings("unused")
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;

	@Persistent
	private Text src_;
	
	public SourceCode(String src){
		src_ = new Text(src);
	}
	
	public String toString(){
		return src_.getValue();
	}

	public Element toXML() {
		Element root = new Element("source");
		root.setText(src_.getValue());
		return root;
	}
	
}
