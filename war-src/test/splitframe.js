goog.require('goog.ui.Container');
goog.require('goog.style');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.ui.SplitPane');
goog.require('goog.ui.SplitPane.Orientation');



goog.require('goog.ui.Button');
goog.require('goog.ui.Component.EventType');
goog.require('goog.ui.Component.State');
goog.require('goog.ui.Menu');
goog.require('goog.ui.MenuItem');
goog.require('goog.ui.Option');
goog.require('goog.ui.SelectionModel');
goog.require('goog.ui.Separator');
goog.require('goog.ui.Toolbar');
goog.require('goog.ui.ToolbarRenderer');
goog.require('goog.ui.ToolbarButton');
goog.require('goog.ui.ToolbarMenuButton');
goog.require('goog.ui.ToolbarSelect');
goog.require('goog.ui.ToolbarSeparator');
goog.require('goog.ui.ToolbarToggleButton');




var onLoad = function() {
    installSplitpane();
    installToolbar();
};



var installSplitpane = function() {
    var splitpane1 = new goog.ui.SplitPane(
	new goog.ui.Component(),
	new goog.ui.Component(),
        goog.ui.SplitPane.Orientation.VERTICAL);
    
    splitpane1.decorate(document.getElementById('aSplitter'));


    var vsm = new goog.dom.ViewportSizeMonitor();
    var getSize = function() {
        return goog.style.getBorderBoxSize(
            document.getElementById('aSplitterWrapper'));
    };

    var currentSize = getSize();

    var onResize = function(e) {
	var newSize = getSize();
	if (! goog.math.Size.equals(currentSize, newSize)) {
            currentSize = newSize;
            splitpane1.setSize(newSize);
	}
	synchronizeTopSize();
    };

    var synchronizeTopSize = function() {
	goog.style.setBorderBoxSize(
	    document.getElementById("aTextarea"),
	    goog.style.getBorderBoxSize(
		document.getElementById("top")));
    };


    synchronizeTopSize();



    goog.events.listen(splitpane1,
		       goog.events.EventType.CHANGE,
		       synchronizeTopSize);

    goog.events.listen(document.getElementById('aSplitterWrapper'),
                       goog.events.EventType.RESIZE,
                       onResize);
    goog.events.listen(vsm,
                       goog.events.EventType.RESIZE,
                       onResize);
};



var installToolbar = function() {
//     var t1 = new goog.ui.Toolbar();
//     t1.addChild(new goog.ui.ToolbarButton('Button'), true);
//     t1.getChildAt(0).setTooltip('This is a tooltip for a button');
//     t1.addChild(new goog.ui.ToolbarButton('AnotherButton'), true);
//     t1.addChild(new goog.ui.ToolbarSeparator(), true);
//     t1.addChild(new goog.ui.ToolbarButton('Disabled'), true);
//     t1.getChildAt(3).setEnabled(false);
//     t1.addChild(new goog.ui.ToolbarButton('YetAnotherButton'), true);
//     var toggleButton = new goog.ui.ToolbarToggleButton(goog.dom.createDom('div',
//         'icon goog-edit-bold'));
//     toggleButton.setChecked(true);
//     t1.addChild(toggleButton, true);
//     var btnLeft = new goog.ui.ToolbarButton('Left');
//     btnLeft.setCollapsed(goog.ui.Button.Side.END);
//     t1.addChild(btnLeft, true);
//     var btnCenter = new goog.ui.ToolbarButton('Center');
//     btnCenter.setCollapsed(goog.ui.Button.Side.END | goog.ui.Button.Side.START);
//     t1.addChild(btnCenter, true);
//     var btnRight = new goog.ui.ToolbarButton('Right');
//     btnRight.setCollapsed(goog.ui.Button.Side.START);
//     t1.addChild(btnRight, true);
//     t1.render(goog.dom.getElement('t1'));
};