package org.wescheme.user;


import java.util.Properties;
import javax.mail.MessagingException;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.wescheme.util.Base64;
import org.wescheme.util.Crypt;

public class ConfirmationServlet extends HttpServlet {

	private static final long serialVersionUID = 4278468977009746717L;

	public void service(HttpServletRequest req, HttpServletResponse resp){
		req.getParameter("code");
		req.getParameter("name");
	}
	
	public static String sendConfirmationEmail(String addy){
	
		Properties props = new Properties();
		Session session = Session.getDefaultInstance(props, null);
		
		String key = Base64.encodeBytes(Crypt.getBytes(8));

		String msgBody = 
			"You registered for WeScheme. To complete your WeScheme registration, please follow this link:\n" +
			"http://www.WeScheme.org/CompleteRegistration?code=" + key + "&name=" + addy +
			"\nThanks,\nThe WeScheme Team";
		
		try {
			Message msg = new MimeMessage(session);
			msg.setFrom(new InternetAddress("admin@wescheme.org"));
			msg.addRecipient(Message.RecipientType.TO,
                     	new InternetAddress(addy, true));
			msg.setSubject("Activating your WeScheme account.");
			msg.setText(msgBody);
			Transport.send(msg); 
			} catch (AddressException e) {
				e.printStackTrace();
			} catch (MessagingException e) {
				e.printStackTrace();
			}
		return key;
		
	}
}
