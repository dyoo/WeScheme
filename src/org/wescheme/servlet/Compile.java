package org.wescheme.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Compile extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 3135841183108071715L;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
	throws IOException, ServletException {		
		doWork(request, response);
	}
	
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
	throws IOException, ServletException {	
		doWork(request, response);
	}
	
	
	private void doWork(HttpServletRequest request, HttpServletResponse response) {		
		String programName = request.getParameter("name");
		String programSource = request.getParameter("program");
		if (programName == null) {
			writeErrorResponse(response, "missing parameter name");
			return;
		}
		if (programSource == null) {
			writeErrorResponse(response, "missing parameter program");
			return;
		}
		org.wescheme.project.Compiler.CompilationResult result = 
			org.wescheme.project.Compiler.compile(this.getServletContext(), programName, programSource);
		if (result.isBad()) {
			writeErrorResponse(response, result.getErrorMessage());
		} else {
			writeGoodResponse(response, result.getCompiledCode());
		}
	}
	
	private void writeGoodResponse(HttpServletResponse response, String code) {
		try {
			PrintWriter writer = response.getWriter();
			writer.write(code);
			writer.close();
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
	
	private void writeErrorResponse(HttpServletResponse response, String msg) {
		response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		try {
			PrintWriter writer = response.getWriter();
			writer.write(msg);
			writer.close();
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
}
