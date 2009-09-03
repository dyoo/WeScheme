
function toBespin() {
    dojo.require("bespin.editor.component");
    var _editorComponent;
    // Loads and configures the objects that the editor needs
    // You can use dojo.addOnLoad(...); but for that you will need to load up dojo.js first
    function doInit() {
	_editorComponent = new bespin.editor.Component('editor', {
            language: "scheme",
            loadfromdiv: true,
            set: {
		strictlines: 'on',
		closepairs: 'on'
            }
    });
    };
    
    function copyToTextarea() {
	dojo.byId('inandout').value = _editorComponent.getContent();
    }
    
    function copyToEditor() {
	_editorComponent.setContent(dojo.byId('inandout').value);
    }

    function setSyntax(value) {
	bespin.publish("settings:language", { language: value });
    }
    dojo.addOnLoad(doInit);
}


function toText() {
    // FILL ME IN
}