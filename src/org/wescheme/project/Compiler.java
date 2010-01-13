package org.wescheme.project;

import org.plt.moby.StandaloneCompiler;
import org.plt.moby.CompilationResult;
import java.io.IOException;
import javax.servlet.http.HttpServlet;

public class Compiler extends HttpServlet
{
	private static final long serialVersionUID = 6867416066840862239L;
	// Singleton compiler object
	static StandaloneCompiler compiler = null;


	private static void initCompiler() {
		if (compiler == null) {
			try {
				System.out.println("Initializing the compiler.");
				compiler = new StandaloneCompiler();
				System.out.println("Compiler initialized.");			
			} catch (IOException e) {
				throw new RuntimeException(e);
			}
		}
	}
	
	
	public static ObjectCode compile(SourceCode src){
		initCompiler();
		CompilationResult result = compiler.compile(src.toString());
		return new ObjectCode(result.getJs(), result.getPerms(), false);
	}
}
