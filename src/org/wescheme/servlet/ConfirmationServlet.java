package org.wescheme.servlet;


import java.io.IOException;
import java.util.Properties;

import javax.cache.CacheException;
import javax.jdo.PersistenceManager;
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

import org.wescheme.keys.KeyManager;
import org.wescheme.user.WeSchemeUser;
import org.wescheme.util.Base64;
import org.wescheme.util.Crypt;
import org.wescheme.util.PMF;
import org.wescheme.util.Crypt.KeyNotFoundException;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
public class ConfirmationServlet extends HttpServlet  {

	private static final long serialVersionUID = 4278468977009746717L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException{
		Crypt.Token code;
		try {
			code = (Crypt.Token) Base64.decodeToObject(req.getParameter("code"));
		} catch (Exception e){
			resp.sendError(500);			
			return;
		}

		String name = req.getParameter("name");
		String addy = req.getParameter("email");
		addy += name;
		Crypt.Token nt = KeyManager.generateToken(addy, "dailyKey");
		Crypt.Token ot = KeyManager.generateToken(addy, "staleDailyKey");

		if( nt.equals(code) || ot.equals(code) ){
			PersistenceManager pm = PMF.getManager();
			try {
				Key k = KeyFactory.createKey("WeSchemeUser", name);
				WeSchemeUser u = pm.getObjectById(WeSchemeUser.class, k);
				u.activate();
			} finally { 
				pm.close();
			}
		} 		

	}


	public static String sendConfirmationEmail(String username, String addy) throws CacheException, KeyNotFoundException{

		Properties props = new Properties();
		Session session = Session.getDefaultInstance(props, null);

		Crypt.Token t = KeyManager.generateToken(addy + username, "dailyKey");

		String msgBody = 
			"You registered for WeScheme. To complete your WeScheme registration, please follow this link:\n" +
			"http://www.WeScheme.org/CompleteRegistration?" +
			"code=" + t.toString() +
			"&name=" + username +
			"&email=" + addy +
			"If you didn't register for WeScheme, don't worry! This confirmation will expire in 24 hours." +
			"\nThanks,\nThe WeScheme Team";

		try {
			Message msg = new MimeMessage(session);
			msg.setFrom(new InternetAddress("admin@wescheme.org"));
			msg.addRecipient(Message.RecipientType.TO,
					new InternetAddress(addy, true));
			msg.setSubject("Activating your WeScheme account.");
			msg.setText(msgBody);
			Transport.send(msg); 

			System.out.println("Sending mail to " + addy);

		} catch (AddressException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		return t.toString();

	}
}
