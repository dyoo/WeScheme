// debugLog: string -> void
// Prints out a debug message if Firebug's console.log is available.
function debugLog(msg) {
    if (typeof console != 'undefined') {
	console.log(msg);
    }
}
