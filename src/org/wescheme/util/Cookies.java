package org.wescheme.util;

import javax.servlet.http.Cookie;

public class Cookies {

	public static String getCookie(Cookie[] cookies, String parameter){
		if( cookies != null ){
			for( int ii = 0; ii < cookies.length; ++ii ){
				if( parameter.equals(cookies[ii].getName()) ){
					return cookies[ii].getValue();
				}
			}
		}
		return "";
		
	}
	
}
