package org.wescheme.project;

import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import org.jdom.Element;
import org.wescheme.program.capability.Capability;
import org.wescheme.user.Session;
import org.wescheme.util.XML;

@PersistenceCapable()
public class Program extends XML {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Long id;
	
	@Persistent
	private String title_;
	@Persistent
	private ObjectCode obj_;
	@Persistent
	private SourceCode src_;
	@Persistent
	private String owner_;
	@Persistent
	private String author_;
	@Persistent
	private long time_;
	@SuppressWarnings("unused")
	@Persistent
	private boolean published_ = false;
	@Persistent
	private List<Capability> capabilities_;
	
	private void updateTime(){
		time_ = System.currentTimeMillis();
	}
	
	public Program(String src, Session owner){
		src_ = new SourceCode(src);
		obj_ = null;
		owner_ 	= owner.getName();
		author_ = owner_;
		updateTime();
	}
	
	public Program(Program p, String owner){
		src_ = new SourceCode(p.src_.toString());
		owner_ = owner;
		author_ = p.author_;
		capabilities_ = p.capabilities_;
		time_ = System.currentTimeMillis();
		if( obj_ != null && p.obj_.isTrusted() ){
			obj_ = new ObjectCode(p.obj_.toString());
		} else {
			obj_ = null;
		}
	}

	
	public Program clone(String owner){
		Program p = new Program(this, owner);
		return p;
	}

	public void publish(){
		if( null == obj_ || !obj_.isTrusted() ){
			build();
		}
		
		published_ = true;
		updateTime();
	}
	
	public void unpublish(){
		published_ = false;
		updateTime();
	}
	
	public void build(){
		obj_ = Compiler.compile(src_);
		updateTime();
	}
		
	public void updateSource(String src){
		src_ = new SourceCode(src);
		obj_ = null;
		updateTime();
	}
	
	public SourceCode getSource(){
		return src_;
	}
	
	public ObjectCode getObject(){
		return obj_;
	}
	
	public String getOwner(){
		return owner_;
	}
	
	public Long getId(){
		return id;
	}
	
	public Long getTime(){
		return time_;
	}

	
	public Element toXML() {
		
		Element root = new Element("Program");
		
		root.addContent(src_.toXML());
		
		if( null != obj_){
			root.addContent(obj_.toXML());
		}
		
		root.addContent(XML.makeElement("title", title_));
		root.addContent(XML.makeElement("owner", owner_));
		root.addContent(XML.makeElement("author", author_));
		root.addContent(XML.makeElement("modified", time_));
		
		return root;
		
	}
	
	
}
