package org.wescheme.project;

import java.io.IOException;
import java.util.Properties;

import javax.servlet.ServletContext;

public class WeSchemeProperties {
	Properties props;
	public WeSchemeProperties(ServletContext ctx) throws IOException {
		this.props = new Properties();
		this.props.load(ctx.getResourceAsStream("/wescheme.properties"));
	}
	
	public String getServerBaseUrl() {
		return this.props.getProperty("WESCHEME_SERVER_BASE");
	}

	public String getAndroidPackagerUrl() {
		return this.props.getProperty("ANDROID_PACKAGER_SERVER_URL");
	}

	public String getCompilationServerUrl() {
		return this.props.getProperty("COMPILATION_SERVER_URL");
	}


}
