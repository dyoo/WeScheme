package org.wescheme.project;

import java.io.BufferedReader;
import java.io.FileReader;

import javax.servlet.http.HttpServlet;

import org.mozilla.javascript.*;

@SuppressWarnings("deprecation")
public class Compiler extends HttpServlet
{
	private static final long serialVersionUID = 6867416066840862239L;
	static Context cx = Context.enter();
	static Scriptable scope = cx.initStandardObjects();	// retrieve the scope
	static Function compiler;

	public void init() {
		try{
		cx = Context.enter();
		scope = cx.initStandardObjects();
		FileReader fileReader = new FileReader("compiler.js");
		BufferedReader inputReader = new BufferedReader(fileReader);
		String compilerSrc = "";
		String line;
		
		while((line = inputReader.readLine()) != null){
			compilerSrc += line + "\n";
		}
		
		cx.evaluateString(scope, compilerSrc, "<cmd>", 1, null); // add the compiler to the scope
		Object fObj = scope.get("compile", scope);
		               
		
		compiler = (Function)fObj;
		System.out.println("Compiler initialized.");
		} catch (Exception e){
			System.out.println("Compiler initialization failed.");
		}
	}
	
	public static ObjectCode compile(SourceCode src){
		String srcText = src.toString();
		Object functionArgs[] = { srcText };
		System.out.println(srcText);
		String result = Context.toString(compiler.call(cx, scope, scope, functionArgs));
		return new ObjectCode(result);
	}
	
	
	
}

