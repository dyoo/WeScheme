var _editorComponent;
var mode = "text";


function doInit(aDiv) {
    _editorComponent = new bespin.editor.Component(aDiv.id, {
        language: "scheme",
        loadfromdiv: true,
        set: {
	    strictlines: 'on',
	    closepairs: 'on'
        }
    });
    mode = 'bespin';
};


function toBespin(aDiv) {  
//     function copyToTextarea() {
// 	dojo.byId('inandout').value = _editorComponent.getContent();
//     }
    
//     function copyToEditor() {
// 	_editorComponent.setContent(dojo.byId('inandout').value);
//     }

//     function setSyntax(value) {
// 	bespin.publish("settings:language", { language: value });
//     }

    if (mode != 'bespin') {
	dojo.require("bespin.editor.component");
	dojo.addOnLoad(function() { doInit(aDiv); });
    }
}


function toText(aDiv) {
    if (mode != 'text') {
	removeAllChildren(aDiv);
	_editorComponent.dispose();
	mode = 'text';
    }
}


function removeAllChildren(node) {
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
	node.removeChild(children[i]);
    }
}