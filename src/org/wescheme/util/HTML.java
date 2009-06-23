package org.wescheme.util;

import java.util.Collection;

public class HTML {

	public static <E> String toTable(Collection<E> c){
		
		String result = "<table>";
		
		for( E o : c ){
			result += "<tr><td>" + o.toString() + "</td></tr>";
		}
		
		result += "</table>";
		
		return result;
	}
	
}
