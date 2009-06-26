package org.wescheme.project;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
import com.google.appengine.api.datastore.Text;
import com.google.appengine.api.datastore.Key;

@PersistenceCapable
public class ObjectCode {
	@SuppressWarnings("unused")
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;

	@Persistent
	
	private Text obj_;

	@Persistent
	private boolean trusted_;
	
	public ObjectCode(String obj){
		obj_ = new Text(obj);
		trusted_ = false;
	}
	
	public ObjectCode(String obj, boolean trust){
		obj_ = new Text(obj);
		trusted_ = trust;
	}
	
	public boolean isTrusted(){
		return trusted_;
	}
	
	public String toString(){
		return obj_.getValue();
	}

	public String toXML() {
		// TODO Auto-generated method stub
		return null;
	}
	
}
