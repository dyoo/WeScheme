package org.wescheme.util;

import java.io.Serializable;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.Collections;
import java.util.logging.Logger;

import javax.cache.Cache;
import javax.cache.CacheException;
import javax.cache.CacheFactory;
import javax.cache.CacheManager;
import javax.jdo.JDOObjectNotFoundException;
import javax.jdo.PersistenceManager;
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

		private Key(String name, byte[] k){
			this.name = name;
			this.val = k;
		}

		public byte[] getValue(){
			return this.val;
		}

		public String getName(){
			return this.name;
		}

		public int getSize() {
			if (this.val == null)
				return 0;
			return this.val.length;
		}

		public void setValue(byte[] newVal) {
			this.val = Arrays.copyOf(newVal, newVal.length);
			this.saveIntoCache();
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
		

		public void rotate() {
			PersistenceManager pm = PMF.get().getPersistenceManager();
			try {
				this.val = Crypt.getBytes(this.val.length);
				pm.makePersistent(this);
			} finally {
				pm.close();
			}
			saveIntoCache();
		}

		
		/**
		 * Try to save the key into the cache.
		 */
		@SuppressWarnings("unchecked")
		private void saveIntoCache() {
			try {
				CacheFactory cf = CacheManager.getInstance().getCacheFactory();
				Cache cache = cf.createCache(Collections.emptyMap());
				cache.put(this.name, this);
			} catch (CacheException e) {
				logger.warning("Unable to install Crypt.Key into in-memory cache!");
			}
		}




		/**
		 * Gets the key with the given name.
		 * 
		 * As a possible side effect, may construct it and install it into the database.
		 * @param keyName
		 * @param size size of the key in bytes.
		 * @return
		 * @throws KeyNotFoundException
		 * @throws CacheException 
		 */
		@SuppressWarnings("unchecked")
		public static Crypt.Key getInstance(String keyName, int size) {
			Crypt.Key aKey = findTheKey(keyName, size);
			// Make sure the key gets placed in the cache.
			try {
				CacheFactory cf = CacheManager.getInstance().getCacheFactory();
				Cache cache = cf.createCache(Collections.emptyMap());
				cache.put(keyName, aKey);
			} catch (CacheException e) {
				logger.warning("Unable to install Crypt.Key into in-memory cache!");
			}
			return aKey;
		}
		

		private static Crypt.Key findTheKey(String keyName, int size) {
			// First, try to get it from the cache.
			Crypt.Key inMemoryKey = getFromInMemoryCache(keyName);
			if (inMemoryKey != null && inMemoryKey.getSize() == size) {
				logger.info("retrieved key " + keyName + " from in-memory cache.");
				return inMemoryKey;
			} 
			
			// Next, try to get it from the database.
			Crypt.Key inDbKey = getFromPersistentStorage(keyName);
			if (inDbKey != null && inDbKey.getSize() == size) {
				return inDbKey;
			} 
			
			// Finally, create it anew.
			PersistenceManager pm = PMF.get().getPersistenceManager();
			try {
				logger.info("Generating a " + (size * 8) + " bit key named " + keyName + ".");
				Crypt.Key newKey = new Crypt.Key(keyName, Crypt.getBytes(size));
				pm.makePersistent(newKey);
				return newKey;
			} finally {
				pm.close();
			}
		}


		/**
		 * 
		 * Try to retrieve the key from the in-memory cache.  Returns null if we can't find it there.
		 * @param keyName
		 * @return
		 * @throws CacheException
		 */
		private static Crypt.Key getFromInMemoryCache(String keyName) {
			try {
				CacheFactory cf = CacheManager.getInstance().getCacheFactory();
				Cache cache = cf.createCache(Collections.emptyMap());
				Object o = (Crypt.Key) cache.get(keyName);
				// attempt to fetch the key from the cache
				if( o != null && o instanceof Crypt.Key ){
					return (Crypt.Key) o;
				}
				return null;
			} catch (CacheException e) {
				return null;
			}
		}

		/**
		 * Tries to retrieve the from persistent storage.  Returns null if we can't find it.
		 * @param keyName
		 * @return
		 */
		private static Crypt.Key getFromPersistentStorage(String keyName) {
			PersistenceManager pm = PMF.get().getPersistenceManager();
			Object o;
			try {
				o = pm.getObjectById(Crypt.Key.class, keyName);
				logger.info("retrieved key " + keyName + " from persistent cache.");
				return (Crypt.Key) o;
			} catch (JDOObjectNotFoundException e) {
				return null;
			} finally {
				pm.close();
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
