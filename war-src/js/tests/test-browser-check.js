goog.require('goog.testing.jsunit');
goog.require('plt.wescheme.browserCheck');

goog.provide('plt.wescheme.tests.testBrowserCheck');


var versionMatches = plt.wescheme.BrowserDetect.debug.versionMatches;

var testVersionMatches = function() {
    assertTrue(versionMatches("Explorer", "7", { browser: "Explorer", lessThan: "8"}));
    assertFalse(versionMatches("Explorer", "8", { browser: "Explorer", lessThan: "8"}));
    assertFalse(versionMatches("Explorer", "7", { browser: "Explorer", lessThan: "7"}));

    assertTrue(versionMatches("Explorer", "7", { browser: "Explorer", greaterThanOrEqual: "7"}));
    assertTrue(versionMatches("Explorer", "7.0.1", { browser: "Explorer", greaterThanOrEqual: "7"}));
    assertFalse(versionMatches("Explorer", "7.0.1", { browser: "Explorer", greaterThanOrEqual: "8"}));
};





plt.wescheme.tests.testBrowserCheck = {
    testVersionMatches : testVersionMatches
};
