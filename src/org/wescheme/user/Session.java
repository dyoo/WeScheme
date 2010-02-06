package org.wescheme.user;

import java.io.IOException;
import java.io.Serializable;

import org.wescheme.util.Crypt;
import org.wescheme.util.Crypt.Token;
import org.wescheme.util.Base64;

import com.google.appengine.api.users.User;

// UserInstance provides the fields that are common to WeSchemeUsers and Google users.
public class Session implements Serializable {

	private static final long serialVersionUID = -254267039192254438L;

	private String _name;
	private boolean _admin;
	
	public Session(User user, boolean isAdmin) {
		_name = user.getNickname() + "@" + user.getAuthDomain();
		_admin = isAdmin;
	}
	
	public Session(WeSchemeUser user) {
		_name = user.getName() + "@wescheme.org";
		_admin = false; // WeSchemeUsers are not admin -- delegate this to app engine
	}
	
	public String getName(){
		return _name;
	}

	public boolean isAdmin(){
		return _admin;
	}
	
	public boolean isValid(Crypt.Token t, Crypt.Key k) throws IOException{
		
		String s = Base64.encodeObject(this);
		Token stoken = new Token(s, k);
		return t.equals(stoken);
	}	
	
	
}
