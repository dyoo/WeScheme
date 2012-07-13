/*global goog,easyXDM*/
/*jslint browser: true, vars: true, white: true, plusplus: true, maxerr: 50, indent: 4 */

goog.provide("plt.wescheme.RoundRobin");
goog.require("plt.wescheme.WeSchemeProperties");


(function() {
    "use strict";
    //////////////////////////////////////////////////////////////////////

    // Initializes the evaluator to use round-robin compilation, given a list of
    // servers.
    var getServerList = function() {
        return plt.wescheme.WeSchemeProperties.compilation_servers.split(/\s+/);
    };


    // Initializes the remote procedure call between the client and
    // the given serverUrl.  Due to the peculiarities of easyXDM, we
    // need to ping the server up front to see if the connection is
    // alive: we don't get a reliable error exception if the server is
    // down from the very beginning.
    var initializeXhr = function(serverUrl, afterInitialize) {
        var xhr = new easyXDM.Rpc(
            { remote: serverUrl,
              // This lazy flag must be set to avoid a very ugly
              // issue with Firefox 3.5.
              lazy: true
            }, 
            { remote: { compileProgram: {} }});
        // We initiate compilation of the empty program and see
        // if the server responds.  If it does, we add the server
        // to the list of known good servers.
        xhr.compileProgram("", 
                           "",
                           function(bytecode) {
                               xhrs.push(xhr);
                               if (! AT_LEAST_ONE_SERVER_READY) {
                                   AT_LEAST_ONE_SERVER_READY = true;
                                   afterInitialize();
                               }
                           },
                           function(err) {
                           });
    };


    var xhrs = [];

    var AT_LEAST_ONE_SERVER_READY = false;
    var initialize = function(afterInitialize, onFailure) {
        if (AT_LEAST_ONE_SERVER_READY) {
            afterInitialize();
        } else {
            setTimeout(function() {
                if (! AT_LEAST_ONE_SERVER_READY) {
                    onFailure();
                }
            }, 10000);


            // Configures the evaluator to use round-robin compilation between
            // a set of servers.  Compilation will also fall back to other
            // servers under network failure.
            var compilation_servers = getServerList();
            var i;
            for (i = 0; i < compilation_servers.length; i++) {
                initializeXhr(compilation_servers[i], afterInitialize);
            }
        }
    };



    var onAllCompilationServersFailing = function(onDoneError) {
        // If all servers are failing, we simulate a 
        // compile time error with the following content:
        onDoneError(
            JSON.stringify(
                "WeScheme appears to be busy or unavailable at this time." +
                "  Please try again later."));
    };


    // Try using server n to compile the expression.  If network
    // failure occurs, try the next one in round-robin order, up
    // to xhrs.length tries.
    var tryServerN = function(n, countFailures, 
                              programName, code, 
                              onDone, onDoneError) {

        if (n < xhrs.length) {
            xhrs[n].compileProgram(
                programName,
                code,
                onDone,
                function(errorStruct) {
                    // If the content of the message is the
                    // empty string, communication with
                    // the server failed.
                    if (errorStruct.message === "") {
                        if (countFailures >= xhrs.length) {
                            onAllCompilationServersFailing(onDoneError);
                        } else {
                            tryServerN(((n + 1) % xhrs.length),
                                       countFailures + 1,
                                       programName,
                                       code,
                                       onDone,
                                       onDoneError);
                        }
                    } else {
                        onDoneError(errorStruct.message);
                    }
                });
        } else {
            onAllCompilationServersFailing(onDoneError);
        }
    };


    var roundRobinIndex = 0;
    var roundRobinCompiler = 
        function(programName, code, onDone, onDoneError) {
            if (xhrs.length > 0) {
                roundRobinIndex = (((roundRobinIndex + 1) % xhrs.length));
                tryServerN(roundRobinIndex, 0,
                           programName, code, onDone, onDoneError);
            } else {
                onAllCompilationServersFailing(onDoneError);
            }
        };

    

    //////////////////////////////////////////////////////////////////////
    plt.wescheme.RoundRobin.initialize = initialize;
    plt.wescheme.RoundRobin.roundRobinCompiler = roundRobinCompiler;

}());

