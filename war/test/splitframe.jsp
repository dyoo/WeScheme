<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <title>Split frame test</title>
    <!-- Includes the moby runtime libraries -->
    <script src="/runtime/base.js"></script>

    <script>
    goog.require('goog.ui.Container');
    goog.require('goog.style');
    goog.require('goog.ui.SplitPane');
    goog.require('goog.ui.SplitPane.Orientation');
    </script>    

    <style>
      html {
      width: 100%;
      height: 100%;
      margin: 0px;
      }


      body {
      width: 100%;
      height: 100%;
      margin: 0px;
      }

      .wrapper {
      height: 100%;
      width: 100%;
      }

      .goog-splitpane {
      height: 100%;
      width: 100%;
      }
      
      .goog-splitpane-handle {
      border-left: 1px solid gray;
      border-right: 1px solid gray;
      background: #ccc;
      }

      .goog-splitpane-handle-horizontal {
      cursor: col-resize;
      }
      
      .goog-splitpane-handle-vertical {
      cursor: row-resize;
      }
      
      .goog-splitpane-first-container,
      .goog-splitpane-second-container {
      overflow: auto;
      }
 
    </style>


  </head>
  <body>

    <div class="wrapper" id='aSplitterWrapper'>
      <div class='goog-splitpane' id='aSplitter'> 
	<div class='goog-splitpane-first-container'> 
	  Top Frame
	</div> 

	<div class='goog-splitpane-handle'></div> 

	<div class='goog-splitpane-second-container'> 
	  Bottom Frame
	</div> 
      </div> 
    </div>

  <script>
    (function() {
    // Set up splitpane with already existing DOM.
    var splitpane1 = new goog.ui.SplitPane(
	new goog.ui.Component(), 
	new goog.ui.Component(),
        goog.ui.SplitPane.Orientation.VERTICAL);
 
    splitpane1.decorate(document.getElementById('aSplitter'));


    setInterval(function() { 

    splitpane1.setSize(goog.style.getBorderBoxSize(document.getElementById('aSplitterWrapper')));

    }, 1000);
    }());
  </script>


  </body>
</html>
