<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <title>WeScheme</title>

    <!-- Add compatibility libraries for IE. -->
    <jsp:include page="/js/compat/compat.jsp"/>

    <link rel="stylesheet" type="text/css" href="/css/default.css"
	  id="style" />

    <link rel="stylesheet" type="text/css" href="/css/codemirror.css"
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
	  
	  jQuery("#interactions").click(function(e) {
              document.getElementById('inputBox').focus();
	      e.stopPropagation();
	      e.preventDefault();
	      return false;
          });
      });
    </script>




    <!-- JQuery UI style sheet -->
    <link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/base/jquery-ui.css"/>


    <script src="/safeSubmit.js"></script>
    <script src="/editor/debug.js"></script>

    <script src="/js/flapjax-2.0.1.compressed.js"></script>
    <script src="/js/flapjax-helpers.js"></script>
    <script src="/js/jquery/jquery.createdomnodes.js"></script>
    <script src="/js/jquery/jquery.center-in-client.js"></script>
    <script src="/js/codemirror/js/codemirror.js"></script>

    <script src="/heartbeat.js"></script>
    <script src="/js/submitpost.js"></script>


    <!-- mzscheme-vm evaluator -->
    <script src="/js/mzscheme-vm/support.js"></script>
    <script src="/js/mzscheme-vm/evaluator.js"></script>
    <script src="/js/mzscheme-vm/collections.js"></script>



    <script src="/js/openEditor/openEditor-calc.js"></script>



    <%
       org.wescheme.user.Session userSession = 
       (new org.wescheme.user.SessionManager()).authenticate(request, response); 
       
       %>


    <script>
      jQuery(document).ready(function() {
          setInterval(beat, 1800000);
          var userName, pid, publicId;
          userName = pid = publicId = null;
      
          userName = "<%= userSession != null? userSession.getName() : null %>";

          <% if (request.getParameter("pid") != null) { %>
	      pid = decodeURIComponent('<%= java.net.URLEncoder.encode(request.getParameter("pid"), "utf-8") %>');
	  <% } else if (request.getParameter("publicId") != null){ %>
   	      publicId = decodeURIComponent('<%= java.net.URLEncoder.encode(request.getParameter("publicId"), "utf-8") %>');
	  <% } else { %>
	  <% } %>

          initializeEditor({userName: userName,
                            pid : pid, 
                            publicId: publicId});
      });
    </script>

  </head>
  
  
  <body>
    <div id="editor"
	 dojoType="dijit.layout.BorderContainer"
	 gutters="false">


      
      <div class="top"
	   dojoType="dijit.layout.ContentPane"
	   region="top">
	
	<!-- The dialog div here will be used by jquery -->
	<div id="dialog" style="display:none;"></div>
	
	<div id="header">
	  <h1>WeScheme</h1>
	  <h2>Sometimes YouTube.  Perhaps iPhone.  Together, WeScheme!</h2>
	</div>

	
	<div id="toolbar">
	  <ul>
	    <li class="run">	
	      <a id="run"><img src="/images/run.png" />Run</a>
	    </li>
	    <li class="stop">	
	      <a id="stop"><img src="/images/break.png"/>Stop</a>
	    </li>
	    <% if (userSession != null) { %>
	    <li class="save"><a id="save"><img src="/images/save.png"/>Save<span></span></a></li>
	    <li class="share"><a id="share"><img src="/images/share.png"/>Share<span></span></a></li>
	    <li class="logout"><a id="logout">Logout</a></li>
	    <li class="account"><a id="account">Manage<span></span></a></li>
	    <% } %>
	    <li class="docs">	<a id="docs" target="_blank" href="/openEditor/moby-user-api.txt">API</a></li>
	    
	  </ul>
	</div>

	<div id="fileInfo">
	  <label id="filenamelabel" for="filename">Project name:</label>
	  <input id="filename" type="text" style="width: 20%"/>
	</div>

      </div> <!-- End top -->




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
              <textarea id="defn" rows="100">&#59;  Write your code here
</textarea>
	  </div>
	  
	  
	  <div id="interactions" 
	       dojoType="dijit.layout.ContentPane"
	       splitter="true"
	       region="bottom">
	    <div id="inter">
	      
	      <div style="width: 100%;"><span>&gt; <input style="width: 75%;" type="text"/></span></div>
	    </div>
	  </div>
	</div>


      </div> <!-- End middle -->
      


      <div class="bottom"
	   dojoType="dijit.layout.ContentPane"
	   region="bottom">

	<div id="footer">
	  <div id="statusbar" style="float: left; margin-left: 10px;" ></div>
	  <div id="editorMode" style="float: right; margin-right: 10px;">
            <input type="button"
		   id="bespinMode" 
		   value="Bespin Editor Mode"
                   style="display:none;"/>
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

	</div> <!-- end footer -->
	
      </div> <!-- end bottom -->

    </div> <!-- end editor -->

  </body>
</html>
