package org.wescheme.project;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import org.mozilla.javascript.*;

//TODO Compiler is hosed. Argh.

@SuppressWarnings("deprecation")
public class Compiler
{
	private static final long serialVersionUID = 6867416066840862239L;
	static Context cx = Context.enter();
	static Scriptable scope = cx.initStandardObjects();	// retrieve the scope
	static Function compiler;
	
	static {
		cx = Context.enter();
		scope = cx.initStandardObjects();
		try {
			initCompiler();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	static public void initCompiler() throws IOException {
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
		
	}
	
	public static ObjectCode compile(SourceCode src){
		String srcText = src.toString();
		Object functionArgs[] = { srcText };
		String result = Context.toString(compiler.call(cx, scope, scope, functionArgs));
		return new ObjectCode(result);
	}
	
	
	
}

