var WeSchemeEmbedded = (function() {
    var WithRpc = function(url, containerName) {
        var container = document.getElementById(containerName);
        this.rpc =
             new easyXDM.Rpc({ remote: url,
                               container: containerName,
                               props: {style: {width: "100%", height: "100%"}}
                             },
                             {remote : { run : {},
                                         requestBreak : {},
                                         setDefinitionsText : {},
                                         getDefinitionsText : {}}});
    };

    WithRpc.prototype.run = function(onSuccess, onFail) {
        this.rpc.run(onSuccess, onFail);
    };

    WithRpc.prototype.requestBreak = function(onSuccess, onFail) {
        this.rpc.requestBreak(onSuccess, onFail);
    };

    WithRpc.prototype.setDefinitionsText = function(v, onSuccess, onFail) {
        this.rpc.setDefinitionsText(v, onSuccess, onFail);
    };



    var WithoutRpc = function(url, containerName) {
        var container = document.getElementById(containerName);
        var iframe = document.createElement("iframe");
        iframe.style.width="100%";
        iframe.style.height="100%";
        container.appendChild(iframe);
        iframe.src = url;
    };

    var WeSchemeEmbedded = {};
    WeSchemeEmbedded.withRpc = function(url, containerName) {
        return new WithRpc(url, containerName);
    };

    WeSchemeEmbedded.withoutRpc = function(url, containerName) {
        return new WithoutRpc(url, containerName);
    };

    return WeSchemeEmbedded;
}());