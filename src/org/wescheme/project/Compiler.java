package org.wescheme.project;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.http.HttpServlet;

import org.mozilla.javascript.*;

@SuppressWarnings("deprecation")
public class Compiler extends HttpServlet
{
	private static final long serialVersionUID = 6867416066840862239L;
	static Context cx;
	static Scriptable scope;	// retrieve the scope
	static Function compiler;

	static {
		try{
		cx = Context.enter();

		System.out.println("Initializing the compiler.");
		// WORKAROUND: force use of interpretive mode, because the compressed-standalone-compiler is
		// complex enough that it doesn't compile to class files anymore.
		cx.setOptimizationLevel(-1);

		scope = cx.initStandardObjects();
		FileReader fileReader = new FileReader("runtime/compressed-standalone-compiler.js");
		BufferedReader inputReader = new BufferedReader(fileReader);
		StringBuffer compilerSrc = new StringBuffer();
		String line;
		
		System.out.println("Reading compiler source");
		while((line = inputReader.readLine()) != null){
			compilerSrc.append(line + "\n");
		}
		System.out.println("Installing the compiler.");
		cx.evaluateString(scope, compilerSrc.toString(), "<cmd>", 1, null); // add the compiler to the scope
		cx.seal(null);
		
		Object fObj = scope.get("compile", scope);
		               
		
		compiler = (Function)fObj;
		System.out.println("Compiler initialized: ");
		System.out.println(cx.toString());
		Object functionArgs[] = { "1" };
		String result = Context.toString(compiler.call(cx, scope, scope, functionArgs));
		System.out.println(result);
		Context.exit();
		} catch (Exception e){
			e.printStackTrace();
			System.out.println("Compiler initialization failed.");
		}
	}
	
	// init() forces compiler initialization
	public void init() {}
	
	public static ObjectCode compile(SourceCode src){
	    Context cx = Context.enter();
		try {
		    String srcText = src.toString();
		    Object functionArgs[] = { srcText };
		    Object[] results = cx.getElements(((ScriptableObject)compiler.call(cx, scope, scope, functionArgs)));
	
		    String compiledText = results[0].toString();
		    Object[] jspermissions = cx.getElements((ScriptableObject)results[1]);

		    Set<String> permissions = new HashSet<String>();
		    for (int i = 0; i < jspermissions.length; i++) {
		    	permissions.add(jspermissions[i].toString());
		    }
		    return new ObjectCode(compiledText, permissions, false);
		} finally {
		    Context.exit();
		}
	}
}
