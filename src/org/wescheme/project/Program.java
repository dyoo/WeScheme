package org.wescheme.project;

import java.util.ArrayList;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PrimaryKey;

import org.jdom.Element;
import org.wescheme.program.capability.Capability;
import org.wescheme.user.Session;
import org.wescheme.util.XML;


@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class Program extends XML {

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	protected Long id;
	
	@Persistent
	protected String publicId_;
	
	@Persistent
	protected String title_;
	@Persistent
	protected ObjectCode obj_;

	// Kludge: haven't figured out how to get JDO to update an existing
	// child element in a one-to-one relationship.
	@Persistent
	protected List<SourceCode> srcs_;
	@Persistent
	protected String owner_;
	@Persistent
	protected String author_;
	@Persistent
	protected long time_;
	@Persistent
	private boolean published_ = false;
	@Persistent
	private List<Capability> capabilities_;
	@Persistent
	private Long backlink_;
	
	private void updateTime(){
		time_ = System.currentTimeMillis();
	}
	
	
	public Program(String src, Session owner){
		title_ = "Unknown";
		srcs_ = new ArrayList<SourceCode>();
		srcs_.add(new SourceCode(src));
		obj_ = null;
		owner_ 	= owner.getName();
		author_ = owner_;
		updateTime();
	}
	
	private Program(Program p, String owner){
		title_ = p.getTitle();
		srcs_ = new ArrayList<SourceCode>();
		srcs_.add(new SourceCode(p.getSource().toString()));
		owner_ = owner;
		author_ = p.author_;
		capabilities_ = p.capabilities_;
		time_ = System.currentTimeMillis();
		this.backlink_ = p.getId();
		if( obj_ != null && p.obj_.isTrusted() ){
			obj_ = new ObjectCode(p.obj_.getObj(),
						p.obj_.getPermissions());
		} else {
			obj_ = null;
		}
	}

	
	public Program clone(String owner){
		Program p = new Program(this, owner);
		p.title_ = p.title_ + " (clone)";
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
		obj_ = Compiler.compile(srcs_.get(0));
		updateTime();
	}
	
	public void updateTitle(String newTitle) {
		title_ = newTitle;
		updateTime();
	}
	
	public void updateSource(String src){
		this.setSource(new SourceCode(src));
		this.obj_ = null;
		updateTime();
	}
	
	public SourceCode getSource(){
		return srcs_.get(0);
	}
	
	private void setSource(SourceCode src) {
		this.srcs_.clear();
		this.srcs_.add(src);
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
	
	public Long getBacklink() {
		return this.backlink_;
	}
	
	public Long getTime(){
		return time_;
	}

	public String getPublicId() {
		return this.publicId_;
	}
	
	public void setPublicId(String id) {
		this.publicId_ = id;
	}
	
	
	
	public Element toXML() {
		
		Element root = new Element("Program");
		root.addContent(getSource().toXML());
		
		if( null != obj_){
			root.addContent(obj_.toXML());
		}
		root.addContent(XML.makeElement("id", id));
		if (publicId_ != null) { root.addContent(XML.makeElement("publicId", publicId_)); }
		root.addContent(XML.makeElement("title", getTitle()));
		root.addContent(XML.makeElement("owner", owner_));
		root.addContent(XML.makeElement("author", author_));
		root.addContent(XML.makeElement("modified", time_));
		root.addContent(XML.makeElement("published", published_));
		return root;
		
	}

	public boolean isPublished() {
		
		return published_;
	}

	public String getTitle() {
		if (title_ == null) { return "null"; }
		return title_;
	}

	public String getAuthor() {
		return author_;
	}
	
	public void setAuthor(String author) {
		author_ = author;
	}
	
	
}
