package org.wescheme.project;

import java.util.ArrayList;
import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PrimaryKey;

import org.jdom.Element;
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
	
	protected Boolean isSourcePublic;
	
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
	private Long backlink_;

	
	// The list of program ids this has been shared as.
	@Persistent
	private List<Long> clonedAs;
	
	
	private void updateTime(){
		time_ = System.currentTimeMillis();
	}
	
	
	public Program(String src, String ownerName){
		this.title_ = "Unknown";
		this.srcs_ = new ArrayList<SourceCode>();
		this.srcs_.add(new SourceCode(src));
		this.obj_ = new ObjectCode();
		this.isSourcePublic = false;
		this.owner_ 	= ownerName;
		this.author_ = owner_;
		this.backlink_ = null;
		this.updateTime();
		this.setClonedAs(new ArrayList<Long>());
	}
	
	
	// Creates a copy of the program owned by the user with the given ownerName.
	// Authorship is preserved, and we keep track of how the program was shared.
	public Program clone(String ownerName, PersistenceManager pm){
		Program p = new Program(this.getSource().toString(), ownerName);
		p.title_ = this.getTitle();
		p.backlink_ = this.getId();
		p.author_ = this.author_;
		p.updateTime();
		
		p = pm.makePersistent(p);
		this.getClonedAs().add(p.getId());
		return p;
	}
	
	
	public void share(boolean isObjectCodePublic){		
		published_ = true;
		this.isSourcePublic = isObjectCodePublic;
		updateTime();
	}
	
	public boolean getIsSourcePublic() {	
		if (this.isSourcePublic == null) {
			return false;
		}
		return this.isSourcePublic;
	}
	
	
	public void unpublish(){
		published_ = false;
		updateTime();
	}
	
	public void build() {
		ObjectCode newCode = Compiler.compile(this.getSource());
		if (this.obj_ == null) { this.obj_ = new ObjectCode(); }
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
		this.obj_ = new ObjectCode();
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

	// Returns true if the program has been compiled with an associated useful ObjectCode.
	public boolean hasBeenBuilt() {
		return (this.obj_ != null && this.obj_.getObj().length() > 0);
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
	
	
	public Element toXML() { return this.toXML(true); }

	public Element toXML(boolean includeSource) {
		Element root = new Element("Program");
		if (includeSource) {
			root.addContent(getSource().toXML());
		}
		
		if( null != obj_){
			root.addContent(obj_.toXML());
		}
		root.addContent(XML.makeElement("id", id));
		if (publicId_ != null) { root.addContent(XML.makeElement("publicId", publicId_)); }
		root.addContent(XML.makeElement("isSourcePublic", this.getIsSourcePublic()));
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


	public void setClonedAs(List<Long> clonedAs) {
		this.clonedAs = clonedAs;
		if (this.clonedAs == null) {
			this.clonedAs = new ArrayList<Long>();
		}
	}
	
	
	/**
	 * Returns a list of the programs for which this has been backlinked.
	 * @param pm
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<Program> getBacklinkedPrograms(PersistenceManager pm) {
		Query query = pm.newQuery(Program.class);
		query.setFilter("backlink_ == id");
		query.declareParameters("Long id");
		try {
			List<Program> pl = (List<Program>) query.execute(this.id);
			return pl;
		} finally {
			query.closeAll();
		}
		
	}


	public List<Long> getClonedAs() {
		if (this.clonedAs == null) {
			this.clonedAs = new ArrayList<Long>();
		}
		return clonedAs;
	}	
}