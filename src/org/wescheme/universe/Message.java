package org.wescheme.universe;


import com.google.appengine.api.datastore.Key;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

/* 
 * 	A message consists of some sender, receiver, and a payload.
 * 	
 * */


@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class Message {
    @PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
    
    @Persistent
	private String sender;
	
	@Persistent
	private String receiver;
	
	@Persistent
	private String message;

	public Message(String sender, String receiver, String message) {
		this.sender = sender;
		this.receiver = receiver;
		this.message = message;
	}
	
    public Key getKey() { return key; }
	public String getSender() { return this.sender; }
	public String getReceiver() { return this.receiver; }
	public String getMessage() { return this.message; }
	
	public int hashCode() {
		return this.message.hashCode();
	}
	
	public boolean equals(Object other) {
		if (other instanceof Message) {
			Message otherMsg = (Message)other;
			return (otherMsg.sender.equals(this.sender) &&
					otherMsg.receiver.equals(this.receiver) &&
					otherMsg.message.equals(this.message));
		} else {
			return false;
		}
	}
}
