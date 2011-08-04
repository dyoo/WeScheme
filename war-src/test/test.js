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




var testBrowserAcceptance = function() {
    var isFullySupported = plt.wescheme.BrowserDetect.debug.isFullySupported;
    var isPartiallySupported = plt.wescheme.BrowserDetect.debug.isPartiallySupported;
    var isUnsupported = plt.wescheme.BrowserDetect.debug.isUnsupported;

    assertEquals('ie 5', false, isFullySupported('Explorer', '5'));
    assertEquals('ie 5', false, isPartiallySupported('Explorer', '5'));
    assertEquals('ie 5', true, isUnsupported('Explorer', '5'));

    assertEquals('ie 6', false, isFullySupported('Explorer', '6'));
    assertEquals('ie 6', false, isPartiallySupported('Explorer', '6'));
    assertEquals('ie 6', true, isUnsupported('Explorer', '6'));
    
    assertEquals('ie 7', false, isFullySupported('Explorer', '7'));
    assertEquals('ie 7', false, isPartiallySupported('Explorer', '7'));
    assertEquals('ie 7', false, isUnsupported('Explorer', '7'));

    assertEquals('ie 8', false, isFullySupported('Explorer', '8'));
    assertEquals('ie 8', false, isPartiallySupported('Explorer', '8'));
    assertEquals('ie 8', false, isUnsupported('Explorer', '8'));

    assertEquals('safari 3', false, isFullySupported('Safari', '3'));
    assertEquals('safari 3', false, isPartiallySupported('Safari', '3'));
    assertEquals('safari 3', true, isUnsupported('Safari', '3'));

    assertEquals('safari 4', false, isFullySupported('Safari', '4'));
    assertEquals('safari 4', true, isPartiallySupported('Safari', '4'));
    assertEquals('safari 4', false, isUnsupported('Safari', '4'));

    assertEquals('safari 5', true, isFullySupported('Safari', '5'));
    assertEquals('safari 5', false, isPartiallySupported('Safari', '5'));
    assertEquals('safari 5', false, isUnsupported('Safari', '5'));

    assertEquals('firefox 3.5.1', true, isFullySupported('Firefox', '3.5.1'));

    assertEquals('firefox 3.5', false, isFullySupported('Firefox', '3.5'));
    assertEquals('firefox 3.5', true, isUnsupported('Firefox', '3.5'));

    assertEquals('chrome 3', false, isFullySupported('Chrome', '3'));
    assertEquals('chrome 3', true, isPartiallySupported('Chrome', '3'));
    assertEquals('chrome 3', false, isUnsupported('Chrome', '3'));

    assertEquals('chrome 11', true, isFullySupported('Chrome', '11'));
    assertEquals('chrome 11', false, isPartiallySupported('Chrome', '11'));
    assertEquals('chrome 11', false, isUnsupported('Chrome', '11'));

};