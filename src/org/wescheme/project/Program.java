package org.wescheme.project;

import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import org.wescheme.program.capability.Capability;
import org.wescheme.user.Session;

@PersistenceCapable()
public class Program {

	@SuppressWarnings("unused")
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Long id;
	
	@Persistent
	private ObjectCode obj_;
	@Persistent
	private SourceCode src_;
	@Persistent
	private String owner_;
	@Persistent
	private String author_;
	@SuppressWarnings("unused")
	@Persistent
	private long time_;
	@SuppressWarnings("unused")
	@Persistent
	private boolean published_ = false;
	@SuppressWarnings("unused")
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
	
	public Program(Program p, Session owner){
		src_ = p.src_;
		owner_ = owner.getName();
		author_ = p.author_;
		capabilities_ = p.capabilities_;
		
		if( p.obj_.isTrusted() ){
			obj_ = p.obj_;
		} else {
			obj_ = null;
		}
	}
	
	public Program(Program p) {
		src_ = p.src_;
		obj_ = p.obj_;
		owner_ = p.owner_;
		author_ = p.author_;
		time_ = p.time_;
		// TODO flesh out the copy constructor.
	}
	
	public Program clone(String owner){
		Program p = new Program(this);
		p.setOwner(owner);
		return p;
	}

	private void setOwner(String owner) {
		owner_ = owner;
		
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
	
}
