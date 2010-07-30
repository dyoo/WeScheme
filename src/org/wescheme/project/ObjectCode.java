package org.wescheme.project;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import org.jdom.Element;
import org.wescheme.util.XML;

import com.google.appengine.api.datastore.Text;
import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class ObjectCode implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 4451726170952980480L;

	@SuppressWarnings("unused")
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;

	@Persistent
	
	private Text obj_;

	@Persistent
	private Set<String> permissions;
	
	@Persistent
	private boolean trusted_;
	
	public ObjectCode() {
		this("", new HashSet<String>(), false);
	}
	
	public ObjectCode(String obj, Set<String> permissions){
		this(obj, permissions, false);
	}
	
	public ObjectCode(String obj, Set<String> permissions, boolean trust){
		obj_ = new Text(obj);
		this.permissions = permissions;
		trusted_ = trust;
	}
	
	public boolean isTrusted(){
		return trusted_;
	}
	
	public void setIsTrusted(boolean trusted) {
		this.trusted_ = trusted;
	}

	public String getObj() {
		return this.obj_.getValue();
	}
	
	public Set<String> getPermissions() {
		if (this.permissions == null) {
			return new HashSet<String>();
		}
		return this.permissions;
	}
 

	public void setObj(String obj) {
		this.obj_ = new Text(obj);
	}

	public void setPermissions(Set<String> perms) {
		this.permissions = perms;
	}
	
	public String toString(){
		return obj_.getValue();
	}

	public Element toXML() {		
		Element root = new Element("ObjectCode");
		root.addContent(XML.makeElement("obj", obj_.getValue()));
		Element permElt = new Element("permissions");
		root.addContent(permElt);
		for (String perm : this.getPermissions()) {
			permElt.addContent(XML.makeElement("permission", perm));
		}
		root.addContent(XML.makeElement("trusted", this.trusted_));
		return root;
	}	
}
