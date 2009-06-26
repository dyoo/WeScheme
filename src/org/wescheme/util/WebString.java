package org.wescheme.util;

public class WebString {

	private String content_;
	
	public String toString(){
		return content_;
	}
	
	public WebString(WebString w){
		content_ = new String(w.toString());
	}	

	public WebString(Object o){
		String s = o.toString();
		content_ = s
			.replaceAll("<", "&lt;")
			.replaceAll(">", "&gt;")
			.replaceAll("'", "&#039;")
			.replaceAll("\"", "&#034;");
	}
	
	


	
}
