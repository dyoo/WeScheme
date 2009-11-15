package org.wescheme.universe;


/**
 * A Mailbox holds a set of messages.  We'll associate a single Mailbox per universe session.
 * @author dyoo@cs.wpi.edu
 *
 */

import java.util.Map;
import java.util.List;
import java.util.HashMap;
import java.util.ArrayList;


public class Mailbox {
	private Map<String, List<Message>> undeliveredMessages;
	

	public Mailbox() {
		this.undeliveredMessages = new HashMap<String, List<Message>>();
	}

	/*
	 * Pushes a new message into the mailbox, to be delivered to a particular receiver.
	 */
	public void pushMessage(Message msg) {
		if (!this.undeliveredMessages.containsKey(msg.getReceiver())) {
			this.undeliveredMessages.put(msg.getReceiver(), new ArrayList<Message>());
		}
		this.undeliveredMessages.get(msg.getReceiver()).add(msg);
	}
	
	
	/*
	 * Collects the list of messages queued up for the receiver.  The list is in the order
	 * that the messages were pushed.  If there are no messages available, returns
	 * the empty list.
	 */
	public List<Message> pullMessages(String receiver) {		
		if (this.undeliveredMessages.containsKey(receiver)) {
			List<Message> result = this.undeliveredMessages.get(receiver);
			this.undeliveredMessages.remove(receiver);
			return result;
		} else {
			return new ArrayList<Message>();
		}
	}
	
	/*
	 * Returns true if the given receiver has messages waiting for him or her.
	 */
	public boolean hasMessagesPending(String receiver) {
		return (this.undeliveredMessages.containsKey(receiver) &&
				this.undeliveredMessages.get(receiver).size() > 0);
	}

}
