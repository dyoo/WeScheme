package org.wescheme.project;

import java.util.ArrayList;

import javax.jdo.PersistenceManager;

import org.jdom.Element;
import org.mortbay.log.Log;
import org.wescheme.util.XML;

import com.google.api.services.drive.model.File;
import com.google.gson.Gson;

public class DriveProgram {
	/*this.title_ = "Unknown";
	this.srcs_ = new ArrayList<SourceCode>();
	this.srcs_.add(new SourceCode(this.title_, src));
	this.obj_ = new ObjectCode();
	this.isSourcePublic = false;
	this.isDeleted = false;
	this.owner_ 	= ownerName;
	this.author_ = owner_;
	this.backlink_ = null;*/
	private String title;
	private SourceCode source;
	private boolean isSourcePublic;
	private boolean isDeleted;
	private String owner;
	private String author;
	private String fileId;
	
	public DriveProgram() {}
	
	public DriveProgram(Program legacyProgram)
	{
		this.title = legacyProgram.getTitle();
		this.source = legacyProgram.getSource();
		this.isSourcePublic = legacyProgram.getIsSourcePublic();
		this.isDeleted = legacyProgram.getIsDeleted();
		this.owner = legacyProgram.getOwner();
		this.author = legacyProgram.getAuthor();
	}
	
	public static DriveProgram fromJson(File file, String content)
	{
		Gson gson = new Gson();
		DriveProgram newProgram = gson.fromJson(content,  DriveProgram.class);
		newProgram.fileId = file.getId();
		return newProgram;
	}
	
	public static DriveProgram getEmptyProgram(File file)
	{
		DriveProgram p = new DriveProgram();
		p.setTitle(file.getTitle());
		p.setId(file.getId());
		//// FIXME add any other information that's necessary
		return p;
	}
	
	public String getTitle() {
		return title != null ? title : "";
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public SourceCode getSource() {
		return source;
	}
	
	public void setSource(SourceCode source) {
		this.source = source;
	}
	
	public boolean isSourcePublic() {
		return isSourcePublic;
	}
	public void setSourcePublic(boolean isSourcePublic) {
		this.isSourcePublic = isSourcePublic;
	}
	
	public boolean isDeleted() {
		return isDeleted;
	}
	
	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	
	public String getOwner() {
		return owner != null ? owner : "";
	}
	
	public void setOwner(String owner) {
		this.owner = owner;
	}
	
	public String getAuthor() {
		return author != null ? author : "";
	}
	
	public void setAuthor(String author) {
		this.author = author;
	}
	
	public String getId() {
		return fileId;
	}
	
	public void setId(String fileId) {
		this.fileId = fileId;
	}
	
	public String getJsonRepresentation()
	{
		Gson gson = new Gson();
		return gson.toJson(this);
	}
	  /**
	   * @return Representation of this ClientFile as a Drive file.
	   */
	  public File toFile() {
	    File file = new File();
	    ////file.setId(resource_id);  // on create this doesn't have one
	    file.setTitle(title);
	    //file.setDescription(description);
	    file.setMimeType("application/json");
	    //file.setLabels(labels);
	    file.setEditable(true);
	    //file.setParents(parents);
	    file.setFileExtension("wescheme");
	    return file;
	  }
	  
	  public Element toXmlProgramDigest()
	  {
		  Element root = new Element("ProgramDigest");

		  ////FIXME use correct ids
		  root.addContent(XML.makeElement("id", getId()));		
		  //if(program.getPublicId() != null)
			//  root.addContent(XML.makeElement("publicId", program.getPublicId()));
		  root.addContent(XML.makeElement("title", getTitle() + "(" + getId() + ")")); // Id for testing purposes
		  root.addContent(XML.makeElement("owner", getOwner()));
		  root.addContent(XML.makeElement("author", getAuthor()));
		  ////root.addContent(XML.makeElement("modified", getTime()));
		  root.addContent(XML.makeElement("published", isSourcePublic()));
		  return root;
	  }
	
}
