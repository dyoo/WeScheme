package org.wescheme.util;

import java.io.Serializable;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.logging.Logger;

import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

public class Crypt {

	
	
	private static SecureRandom prng;
	private static MessageDigest SHA256;
	
	static {
		
		try {
			prng = SecureRandom.getInstance("SHA1PRNG");
			SHA256 = MessageDigest.getInstance("SHA-256");

		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
	}
	
	public static byte[] hash(String s)  {
	
			MessageDigest h;
			try {
				h = (MessageDigest) SHA256.clone();
				return h.digest(s.getBytes("UTF-8"));
			} catch (Exception e) {
				// TODO This should probably explode in a dramatic, show stopping way.
				e.printStackTrace();
			}
				
			return null;
	
	}
	
	public static byte[] getBytes(){
		return getBytes(16);
	}
	
	public static byte[] getBytes(int n){
		byte[] token = new byte[n];
		prng.nextBytes(token);
		return token;
		
	}
	
	public static long makeLong(){
		byte[] dat = new byte[8];
		prng.nextBytes(dat);
		int out = 0;
		for( byte b : dat ){
			out = out << 1 | b;
		}
		return out;
		
	}
	
	@PersistenceCapable()
	public static class Key implements Serializable {
		static Logger logger = Logger.getLogger(Key.class.getName());
		
		private static final long serialVersionUID = 6490160398746446795L;
		@PrimaryKey
		@Persistent
		private String name;
		@Persistent
		private byte[] val;
		
		public Key(String name, byte[] k){
			logger.info("Crypt.Key constructor: constructing key " + name);
			this.name = name;
			this.val = k;
		}
		
		public byte[] getValue(){
			return this.val;
		}
		
		public String getName(){
			return this.name;
		}
		
		public void setValue(byte[] newVal) {
			this.val = Arrays.copyOf(newVal, newVal.length);
		}
		
		public String toString(){
			return Base64.encodeBytes(val);
		}
		
		public boolean equals(Object other) {
			if (other instanceof Key) {
				Key o = (Key) other;
				if (! o.name.equals(this.name)) 
					return false;
				if (o.val.length != this.val.length)
					return false;
				for(int i = 0; i < this.val.length; i++) {
					if (this.val[i] != o.val[i])
						return false;
				}
				return true;
			} else {
				return false;
			}
		}
		
	}
	
	public static class KeyNotFoundException extends Exception {
		private static final long serialVersionUID = 6774994961239032293L;
		
	}

	public static class Token implements Serializable {
		private static final long serialVersionUID = 1046568928116040134L;
		private byte[] _val;
		
		public Token(String s, Key key){
			_val = hash(s + key.toString());
		}

		public byte[] getValue(){
			return _val;
		}
		
		public String toString(){
			return Base64.encodeBytes(_val);
		}
		
		public boolean equals(Token t){
			return Arrays.equals(_val, t._val);
		}
	}
	
}
