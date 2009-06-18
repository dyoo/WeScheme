package org.wescheme.dropbox;

import java.util.List;


import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;

import org.wescheme.project.Program;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable()
public class Bin implements Comparable<Bin> {
	@SuppressWarnings("unused")
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	@Persistent
	private String name_;
	@SuppressWarnings("unused")
	@Persistent
	private Validity validity_;
	@Persistent
	private List<Entry> entries_;
	
	public Bin(String name){
		name_ = name;
		validity_ = new Validity();
	}
	
	public String name(){
		return name_;
	}
	
	public void add(Program project, String owner){
		Program proj = project.clone(owner);
		Entry entry = new Entry(proj);
		entries_.add(entry);
	}

	@Override
	public int compareTo(Bin o) {
		return name_.compareTo(o.name());
	}
	
	
	
}
