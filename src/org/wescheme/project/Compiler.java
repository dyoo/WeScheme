package org.wescheme.project;

import javax.servlet.http.HttpServlet;

public class Compiler extends HttpServlet
{
	private static final long serialVersionUID = 6867416066840862239L;

	
	public static ObjectCode compile(SourceCode src){
		throw new RuntimeException("Server side compiler not implemented yet.");
	}
}
