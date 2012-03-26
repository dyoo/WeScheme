goog.require('goog.testing.jsunit');
goog.require('plt.wescheme.browserCheck');

goog.provide('plt.wescheme.tests.testBrowserCheck');


var versionMatches = plt.wescheme.BrowserDetect.debug.versionMatches;
var isOldIE = plt.wescheme.BrowserDetect.debug.isOldIE;

var testVersionMatches = function() {
    assertTrue(versionMatches("Explorer", "7", { browser: "Explorer", lessThan: "8"}));
    assertTrue(versionMatches("Explorer", "7.1", { browser: "Explorer", lessThan: "8"}));
    assertFalse(versionMatches("Explorer", "8", { browser: "Explorer", lessThan: "8"}));
    assertFalse(versionMatches("Explorer", "7", { browser: "Explorer", lessThan: "7"}));

    assertTrue(versionMatches("Explorer", "7", { browser: "Explorer", greaterThanOrEqual: "7"}));
    assertTrue(versionMatches("Explorer", "7.0.1", { browser: "Explorer", greaterThanOrEqual: "7"}));
    assertFalse(versionMatches("Explorer", "7.0.1", { browser: "Explorer", greaterThanOrEqual: "8"}));
};



var testIsOldIE = function() {
    assertFalse(isOldIE("Chrome", "12"));
    assertFalse(isOldIE("Safari", "5"));
    assertTrue(isOldIE("Explorer", "6"));
    assertTrue(isOldIE("Explorer", "7"));
    assertTrue(isOldIE("Explorer", "7.1"));
    assertTrue(isOldIE("Explorer", "7.9"));
    assertFalse(isOldIE("Explorer", "8"));
    assertFalse(isOldIE("Explorer", "9"));
};



plt.wescheme.tests.testBrowserCheck = {
    testVersionMatches : testVersionMatches
};
