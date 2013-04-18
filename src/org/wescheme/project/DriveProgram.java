package org.wescheme.project;

import java.lang.reflect.Type;

import org.jdom.Element;
import org.wescheme.util.XML;

import com.google.api.services.drive.model.File;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

public class DriveProgram {
	private String title;
	private SourceCode source;
	private boolean isSourcePublic;
	private boolean isDeleted;
	private String owner;
	private String author;
	private String fileId;
	//// Missing backlink from Wescheme Program object
	//// FIXME maintain last modified date/time
	
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
		GsonBuilder gson = new GsonBuilder();
		gson.registerTypeAdapter(SourceCode.class, new SourceSerializer());
		return gson.create().toJson(this);
	}
	  /**
	   * @return Representation of this ClientFile as a Drive file.
	   */
	  public File toFile() {
	    File file = new File();
	    file.setTitle(title);
	    file.setMimeType("application/json");
	    file.setEditable(true);
	    file.setFileExtension("wescheme");
	    return file;
	  }
	  
	  public Element toXmlProgramDigest()
	  {
		  Element root = new Element("ProgramDigest");

		  root.addContent(XML.makeElement("id", getId()));	
		  root.addContent(XML.makeElement("title", getTitle())); 
		  root.addContent(XML.makeElement("owner", getOwner()));
		  root.addContent(XML.makeElement("author", getAuthor()));
		  ////root.addContent(XML.makeElement("modified", getTime()));
		  root.addContent(XML.makeElement("published", isSourcePublic()));
		  return root;
	  }
	  

	    
	    private class SourceSerializer implements JsonSerializer<SourceCode> {
			@Override
			public JsonElement serialize(SourceCode src, Type typeOfSrc,
					JsonSerializationContext context) throws JsonParseException  {
				JsonObject sourceElmt = new JsonObject();
				JsonElement code = new JsonPrimitive(src.toString());
				JsonElement name = new JsonPrimitive(src.getName());
				sourceElmt.add("src", code);
				sourceElmt.add("name", name);
				return sourceElmt;
			}
	    }
	
}
