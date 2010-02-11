package org.wescheme.test;


import com.google.apphosting.api.ApiProxy;

import junit.framework.TestCase;

public class WeSchemeBaseTestCase extends TestCase {
	public void setUp() throws Exception {
		ApiProxy.setEnvironmentForCurrentThread(new TestEnvironment());
//        ApiProxy.setDelegate(new ApiProxyLocalImpl(new File(".")){});
	}
	
	public void tearDown() throws Exception {
        ApiProxy.setDelegate(null);
        ApiProxy.setEnvironmentForCurrentThread(null);
        super.tearDown();
	}
}
