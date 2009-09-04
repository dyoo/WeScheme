<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <title>WeScheme</title>

    <!-- Add compatibility libraries for IE. -->
    <jsp:include page="/ie-compat.jsp"/>



    <link rel="stylesheet" type="text/css" href="/css/default.css"
	  id="style" />


    <!-- Google Ajax APIs -->
    <script src="http://www.google.com/jsapi"></script>
    <script>
      google.load("jquery", "1.3.2");
      google.load("jqueryui", "1.7.2");
    </script>



    <!-- Dojo stuff -->
    <script>
      var djConfig = { 
      parseOnLoad: false, 
      isDebug: false, 
      debugAtAllCosts: true,
      baseUrl: './',
      modulePaths: {bespin: '../js/bespin'}
      };
    </script>
    <script src="http://ajax.googleapis.com/ajax/libs/dojo/1.3/dojo/dojo.xd.js">
    </script>


    <link rel="stylesheet"
	  type="text/css"
	  href="http://ajax.googleapis.com/ajax/libs/dojo/1.3/dijit/themes/tundra/tundra.css"/>

    <script>
      dojo.require("dijit.layout.ContentPane");
      dojo.require("dijit.layout.BorderContainer");
      dojo.require("dojo.parser");
      dojo.addOnLoad(function() {
      dojo.parser.parse();
      });
    </script>


    <!-- JQuery UI style sheet -->
    <link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/base/jquery-ui.css"/>


    <script src="/js/flapjax-2.0.1.compressed.js"></script>
    <script src="/js/flapjax-helpers.js"></script>
    <script src="/js/jquery/jquery.createdomnodes.js"></script>
    <script src="/safeSubmit.js"></script>
    <script src="/editor/debug.js"></script>


    <script src="/openEditor/intent.js"></script>
    <script src="/openEditor/editor.js"></script>
    <script src="/openEditor/statusbar.js"></script>
    <script src="/openEditor/textcontainer.js"></script>
    <script src="/openEditor/interaction.js"></script>
    <script src="/heartbeat.js"></script>
    <script src="/js/submitpost.js"></script>

    <!-- Includes the moby runtime lbiraries -->
    <jsp:include page="/moby-runtime-includes.jsp" />
    <!-- And we need the compiler. -->
    <script src="/runtime/compiler.js"></script>



    <%
       org.wescheme.user.Session userSession = 
       (new org.wescheme.user.SessionManager()).authenticate(request, response); 
       
       %>




    <script>
      var myEditor;
      var defnSourceContainer;

      jQuery(document).ready(function() {

      // Fixme: trigger file load if the pid has been provided.

      var statusBar = new WeSchemeStatusBar(jQuery("#statusbar"));
      defnSourceContainer = new WeSchemeTextContainer(jQuery("#definitions").get(0));


      myEditor = new WeSchemeEditor(
      { userName: "<%= userSession != null? userSession.getName() : null %>",
      defn: defnSourceContainer,
      interactions: jQuery("#inter").get(0),
      filenameInput: jQuery("#filename")});
      
      jQuery("#save").click(function() { myEditor.save(); });
      jQuery("#run").click(function()  { myEditor.run(); });
      jQuery("#share").click(function()  { myEditor.share(); });
      jQuery("#account").click(function()  { submitPost("/console"); });
      jQuery("#logout").click(function() { submitPost("/logout"); });
      jQuery("#bespinMode").click(function() { defnSourceContainer.setMode("bespin")});

      <% if (request.getParameter("pid") != null) { %>
      myEditor.load({pid : parseInt(decodeURIComponent('<%= java.net.URLEncoder.encode(request.getParameter("pid"), "utf-8") %>')) });
      <% } else if (request.getParameter("publicId") != null) { %>
      myEditor.load({publicId : decodeURIComponent('<%= java.net.URLEncoder.encode(request.getParameter("publicId"), "utf-8") %>') });
      <% } %>


      // For debugging:
      //   WeSchemeIntentBus.addNotifyListener(function(action, category, data) {
      //       debugLog(action + ": " + category + " " + data.toString());
      //   });



      });


      function switchStyle(style){
      document.getElementById('style').href = '/css/'+style;
      }
    </script>
  </head>
  
  
  <body onload='setInterval("beat()",1800000);'>
    <div id="editor"
	 dojoType="dijit.layout.BorderContainer"
	 gutters="false">


      
      <div class="top"
	   dojoType="dijit.layout.ContentPane"
	   region="top">

	<div id="header">
	  <h1>WeScheme</h1>
	  <h2>Sometimes YouTube.  Perhaps iPhone.  Together, WeScheme!</h2>
	</div>
	
	<!-- The dialog div here will be used by jquery -->
	<div id="dialog" style="display:none;"></div>
	
	
	<% if (userSession != null) { %>
	<div id="toolbar">
	  <ul>
	    <li class="run">	<a id="run">Run<span>&nbsp;your program.</span></a></li>
	    <li class="save">	<a id="save">Save<span>&nbsp;for later.</span></a></li>
	    <li class="share">	<a id="share">Share<span>&nbsp;with friends.</span></a></li>
	    <li class="logout">	<a id="logout">Logout</a></li>
	    <li class="docs">	<a id="docs" target="_blank" href="/openEditor/moby-user-api.txt">API</a></li>
	    <li class="account"><a id="account">Manage<span>&nbsp;your account.</span></a></li>
	  </ul>
	</div>
	<% } else { %>
	<div id="toolbar">
	  <ul>
	    <li class="run">	<a id="run">Run<span>&nbsp;your program.</span></a></li>
            <li class="docs">	<a id="docs" target="_blank" href="/openEditor/moby-user-api.txt">API</a></li>
	    <li class="account"><a id="account">Manage<span>&nbsp;your account.</span></a></li>
	  </ul>
	</div>
	<% } %>
	

	<div id="fileInfo">
	  <label id="filenamelabel" for="filename">Project name:</label>
	  <input id="filename" type="text" style="width: 20%"/>
	</div>


      </div>








      <div class="middle"
	   dojoType="dijit.layout.ContentPane"
	   region="center">


	<div id="borderContainer"
	     dojoType="dijit.layout.BorderContainer" 
	     class="tundra"
	     gutters="false">
	  <div id="definitions"
	       dojoType="dijit.layout.ContentPane"
	       splitter="true"
	       region="center">
	    <textarea id="defn">&#59;  Write your code here</textarea>
	  </div>
	  
	  
	  <div id="interactions" 
	       dojoType="dijit.layout.ContentPane"
	       splitter="true"
	       region="bottom"
	       onclick="document.getElementById('inputBox').focus()">
	    <div id="inter">
	      
	      <div style="width: 100%;"><span>&gt; <input style="width: 75%;" type="text"/></span></div>
	    </div>
	  </div>
	</div>


      </div>
      


      <div class="bottom"
	   dojoType="dijit.layout.ContentPane"
	   region="bottom">

	<div id="footer">
	  <div id="statusbar" style="float: left; margin-left: 10px;" ></div>
	  <div id="editorMode" style="float: right; margin-right: 10px;">
            <input type="button"
		   id="bespinMode" 
		   value="Bespin Editor Mode"/>
	  </div>

	  <!-- Temporarily commented out until we fix the css styles -->
	  
<!-- 	  <div style="text-align: right; margin-right: 10px;">	     -->
<!-- 	    Editor Style:&nbsp; -->
<!-- 	    <select onchange="switchStyle(this.value)"> -->
<!-- 	      <option value="default.css" selected="true">Default</option> -->
<!-- 	      <option value="hacker.css">Hacker</option> -->
<!-- 	      <option value="compact.css">Compact</option> -->
<!-- 	      <option value="personal.css">Personal</option> -->
	      
<!-- 	    </select> -->
<!-- 	  </div> -->

	</div>
	
      </div>

    </div>
  </body>
</html>
