package org.wescheme.project;
import javax.jdo.PersistenceManager;
import javax.servlet.ServletContext;

import org.wescheme.util.Queries;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.ArrayList;
import java.util.Random;


public class NameGenerator {
	private List<String> names;
	private Random gen;
	
	private static String DICTIONARY = "/WEB-INF/five-letter-nouns.txt";
	
	
	private static NameGenerator _instance;
	
	public static NameGenerator getInstance(ServletContext ctx) throws IOException {
		if (_instance == null) {
			_instance = new NameGenerator(ctx);
		}
		return _instance;
	}
		
	private NameGenerator(ServletContext ctx) throws IOException {
		this.names = new ArrayList<String>();
		this.gen = new Random();
		BufferedReader r = new BufferedReader(new InputStreamReader(ctx.getResourceAsStream(DICTIONARY)));
		String nextLine;
		while ((nextLine = r.readLine()) != null) {
				this.names.add(nextLine);
		}
	}
	
	// Generates a new id that's unique from any other program's public id.
	public String generateUniqueName(PersistenceManager pm) throws IOException {
		while (true) {
			String aName = generateName();
			Program maybeExistingProgram = Queries.getProgramByPublicId(pm, aName);
			if (maybeExistingProgram == null) {
				return aName;
			}
		}
	}
	
	
	// Generates a random name, but does not check for uniqueness.
	public String generateName() {
		StringBuffer buffer = new StringBuffer();
		buffer.append(names.get(gen.nextInt(names.size())));
		for(int i = 1; i < 5; i++) {
			buffer.append("-");
			buffer.append(names.get(gen.nextInt(names.size())));
		}
		return buffer.toString().toLowerCase();
	}
}
