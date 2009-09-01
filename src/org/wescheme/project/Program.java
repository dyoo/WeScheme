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
		this.title_ = "Unknown";
		this.srcs_ = new ArrayList<SourceCode>();
		this.srcs_.add(new SourceCode(src));
		this.obj_ = new ObjectCode();
		this.owner_ 	= owner.getName();
		this.author_ = owner_;
		this.capabilities_ = new ArrayList<Capability>();
		this.backlink_ = null;
		this.updateTime();
	}
	
	private Program(Program p, String owner){
		this.title_ = p.getTitle();
		this.srcs_ = new ArrayList<SourceCode>();
		this.srcs_.add(new SourceCode(p.getSource().toString()));
		this.obj_ = new ObjectCode();
		this.owner_ = owner;
		this.author_ = p.author_;
		this.capabilities_ = p.capabilities_;
		this.backlink_ = p.getId();
		this.updateTime();
	}

	
	public Program clone(String owner){
		Program p = new Program(this, owner);
		p.title_ = p.title_ + " (originally from " + owner + ")";
		return p;
	}
	
	
	public void publish(){		
		published_ = true;
		updateTime();
	}
	
	public void unpublish(){
		published_ = false;
		updateTime();
	}
	
	public void build() {
		ObjectCode newCode = Compiler.compile(srcs_.get(0));
		this.obj_.setObj(newCode.getObj());
		this.obj_.setPermissions(newCode.getPermissions());
		this.updateTime();
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
