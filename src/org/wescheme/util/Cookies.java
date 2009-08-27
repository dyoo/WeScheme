package org.wescheme.util;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
    



    // Removes a cookie key from our cookies by invalidating them.
    public static void removeCookie(String name, HttpServletRequest req, HttpServletResponse res) {
    	Cookie c = new Cookie(name, "");
    	c.setMaxAge(0);
    	c.setPath("/");
    	c.setDomain(req.getHeader("host"));
    	res.addCookie(c);
    	System.out.println("removing cookie" + name);
    }	
}