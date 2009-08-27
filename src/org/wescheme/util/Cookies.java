package org.wescheme.util;

import java.io.IOException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Cookies {

	// Returns the decoded cookie object, assuming that the cookie was encoded
	// using Base64.
	public static Object getDecodedCookie(Cookie[] cookies, String parameter) throws IOException, ClassNotFoundException{
		if( cookies != null ){
			for( int ii = 0; ii < cookies.length; ++ii ){
				if( parameter.equals(cookies[ii].getName()) ){
					Object val = Base64.decodeToObject(cookies[ii].getValue());
					System.out.println("Retrieving " + parameter + " = " + val);
					return val;
				}
			}
		}
		return null;		
	}
	
	// Returns the literal string value associated with the cookie, or "" if we
	// can't find anything.
	public static String getUndecodedCookie(Cookie[] cookies, String name) {
		if( cookies != null ){
			for( int ii = 0; ii < cookies.length; ++ii ){
				if( name.equals(cookies[ii].getName()) ){
					return cookies[ii].getValue();
				}
			}
		}
		return "";		
	}
	
    // Adds an object as a cookie value.  We encode the value with Base64.
    public static void addCookieObject(String name, java.io.Serializable value, HttpServletRequest req, HttpServletResponse res) throws IOException {
    	String valString = Base64.encodeObject(value);
    	Cookie c = new Cookie(name, valString);
    	c.setPath("/");
    	c.setMaxAge(-1);
    	res.addCookie(c);
    	System.out.println("Adding cookie" + name + " : " + valString);
    }
   
    // Adds a cookie value to the response.  The programmer here is responsible for encoding the string value. 
    public static void addUnencodedCookie(String name, String value, HttpServletRequest req, HttpServletResponse res) throws IOException {
    	Cookie c = new Cookie(name, value);
    	c.setPath("/");
    	c.setMaxAge(-1);
    	res.addCookie(c);
    }
    

    // Removes a cookie key from our cookies by invalidating them.
    public static void removeCookie(String name, HttpServletRequest req, HttpServletResponse res) {
    	Cookie c = new Cookie(name, "");
    	c.setMaxAge(0);
    	c.setPath("/");
    	res.addCookie(c);
    	System.out.println("removing cookie" + name);
    }	
}