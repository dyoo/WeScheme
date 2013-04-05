package org.wescheme.user;

import java.io.IOException;
import java.io.Serializable;


import org.wescheme.util.Crypt;
import org.wescheme.util.Crypt.Token;
import org.wescheme.util.Base64;

import com.google.api.services.oauth2.model.Userinfo;
import com.google.appengine.api.users.User;

// UserInstance provides the fields that are common to WeSchemeUsers and Google users.
public class Session implements Serializable {

	private static final long serialVersionUID = -254267039192254438L;

	private String _name;
        private String _nickname;
	private boolean _admin;

	
	public Session(User user, boolean isAdmin) {

	    // FIXME: user.getAuthDomain() should probably NOT be used
	    // as part of the user name.  It's somewhat late to fix
	    // this since that name is now contaminated throughout
	    // all the program records.
		_name = user.getNickname() + "@" + user.getAuthDomain();
		_nickname = user.getNickname();
		_admin = isAdmin;
	}
	
	public Session(Userinfo info, boolean isAdmin)
	{
		_name = info.getName();
		_nickname = info.getGivenName();
		_admin = isAdmin;		
	}
	
	public Session(WeSchemeUser user) {
		_name = user.getName() + "@wescheme.org";
		_nickname = user.getName();
		_admin = false; // WeSchemeUsers are not admin -- delegate this to app engine
	}
	

    /** Returns a name for the user.  Don't treat this name as a
	way to identify the user, though!
     */
    public String getNickname() {
	return _nickname;
    }


    /**
       Returns a unique name for the user, although it should not be
       used for presentation.  For presentation purposes, use
       getNickName().
     */
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
