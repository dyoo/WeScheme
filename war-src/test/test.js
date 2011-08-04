goog.require('goog.testing.jsunit');
goog.require('plt.wescheme.browserCheck');

var sayHi = function () {
    var newHeader = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
				       'Hello world!');
    goog.dom.appendChild(document.body, newHeader);
};




var testVersionLessThan = function() {
    var versionLessThan = plt.wescheme.BrowserDetect.debug.versionLessThan;

    assertEquals('versionLessThan',
		 versionLessThan('3', '4'),
		 true);

    assertEquals('versionLessThan',
		 versionLessThan('3.1', '4'),
		 true);

    assertEquals('versionLessThan',
		 versionLessThan('3.1', '4.1'),
		 true);

    assertEquals('versionLessThan',
		 versionLessThan('4', '4.1'),
		 true);

    assertEquals('versionLessThan',
		 versionLessThan('4.1', '4'),
		 false);

    assertEquals('versionLessThan',
		 versionLessThan('4.1', '4.2'),
		 true);

    assertEquals('versionLessThan',
		 versionLessThan('4.1', '4.1.2'),
		 true);

    assertEquals('versionLessThan',
		 versionLessThan('4.1.2', '4'),
		 false);

    assertEquals('versionLessThan',
		 versionLessThan('4.1.2', '4.1.2'),
		 false);

    assertEquals('versionLessThan',
		 versionLessThan('4.1.3', '4.1.2'),
		 false);

    assertEquals('versionLessThan',
		 versionLessThan('4.1.3', '4.1.4'),
		 true);
}



var testVersionGreaterThanOrEqual = function() {
    var versionGreaterThanOrEqual = plt.wescheme.BrowserDetect.debug.versionGreaterThanOrEqual;

    assertEquals('versionGreaterThanOrEqual 1',
		 versionGreaterThanOrEqual('3', '3'),
		 true);

    assertEquals('versionGreaterThanOrEqual 2',
		 versionGreaterThanOrEqual('3', '4'),
		 false);

    assertEquals('versionGreaterThanOrEqual 3',
		 versionGreaterThanOrEqual('3.1', '4'),
		 false);

    assertEquals('versionGreaterThanOrEqual 4',
		 versionGreaterThanOrEqual('4', '3.1'),
		 true);

    assertEquals('versionGreaterThanOrEqual 5',
		 versionGreaterThanOrEqual('3.1', '4.1'),
		 false);

    assertEquals('versionGreaterThanOrEqual 6',
		 versionGreaterThanOrEqual('4', '4.1'),
		 false);

    assertEquals('versionGreaterThanOrEqual 7',
		 versionGreaterThanOrEqual('4.1', '4'),
		 true);

    assertEquals('versionGreaterThanOrEqual 8',
		 versionGreaterThanOrEqual('4.1', '4.2'),
		 false);

    assertEquals('versionGreaterThanOrEqual 9',
		 versionGreaterThanOrEqual('4.1', '4.1.2'),
		 false);

    assertEquals('versionGreaterThanOrEqual 10',
		 versionGreaterThanOrEqual('4.1.2', '4'),
		 true);

    assertEquals('versionGreaterThanOrEqual 11',
		 versionGreaterThanOrEqual('4.1.2', '4.1.2'),
		 true);

    assertEquals('versionGreaterThanOrEqual 12',
		 versionGreaterThanOrEqual('4.1.3', '4.1.2'),
		 true);

    assertEquals('versionGreaterThanOrEqual 13',
		 versionGreaterThanOrEqual('4.1.3', '4.1.4'),
		 false);
}