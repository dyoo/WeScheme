<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <title>WeScheme</title>

    <!-- Add compatibility libraries for IE. -->
    <jsp:include page="/js/compat/compat.jsp"/>

    <!-- Google analytics support -->
    <jsp:include page="/google-analytics.jsp"/>




    <link rel="stylesheet" type="text/css" href="/css/default.css"
	  id="style" />
<!--     <link rel="stylesheet" type="text/css" href="/css/default.css"  -->
<!-- 	  media="only screen and (min-width : 640px)" /> -->
<!--     <link rel="stylesheet" type="text/css" href="/css/phone.css"  -->
<!-- 	  media="only screen and (min-device-width : 320px) and (max-device-width : 480px)" > -->


      
    <link rel="stylesheet" type="text/css" href="/css/codemirror.css"
	  id="style" />



    <!-- JQuery -->
    <script src="/editor/jquery.js"></script>
    <script src="/js/jquery/jquery-ui-1.7.3.custom.min.js"></script>



    <!-- JQuery UI style sheet -->
    <link rel="stylesheet" type="text/css" href="/css/jquery-ui.css"/>


    <script src="/safeSubmit.js"></script>
    <script src="/editor/debug.js"></script>

    <script src="/js/flapjax-2.0.1.compressed.js"></script>
    <script src="/js/flapjax-helpers.js"></script>
    <script src="/js/jquery/jquery.createdomnodes.js"></script>
    <script src="/js/jquery/jquery.center-in-client.js"></script>
    
    <script src="/js/codemirror22/lib/codemirror.js"></script>
	<link rel="stylesheet" type="text/css" href="/js/codemirror2/lib/codemirror.css"></link>
	<script src="/js/codemirror2-contrib/scheme2/scheme2.js"></script>
	<link rel="stylesheet" type="text/css" href="/js/codemirror2-contrib/scheme2/schemecolors.css"></link>
	<link rel="stylesheet" type="text/css" href="/js/codemirror2-contrib/scheme2/schemecolors-interactive.css"></link>

	<link rel="stylesheet" type="text/css" href="/css/definitions.css"></link>

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
          var userName, pid, publicId, hideHeader, hideFooter, hideDefinitions,
              warnOnExit, interactionsText, autorunDefinitions;
          userName = pid = publicId = interactionsText = null;
          hideDefinitions = false;
          autorunDefinitions = false;
          hideHeader = false;
          hideFooter = false;
          warnOnExit = true;
      
      
          userName = "<%= userSession != null? userSession.getName() : null %>";

          <% if (request.getParameter("hideHeader") != null &&
                 request.getParameter("hideHeader").equals("true")) { %>
	     hideHeader = true;
          <% } %>


          <% if (request.getParameter("hideFooter") != null &&
                 request.getParameter("hideFooter").equals("true")) { %>
	     hideFooter = true;
          <% } %>

          <% if (request.getParameter("hideDefinitions") != null &&
                 request.getParameter("hideDefinitions").equals("true")) { %>
	     hideDefinitions = true;
          <% } %>

          <% if (request.getParameter("warnOnExit") != null &&
                 request.getParameter("warnOnExit").equals("false")) { %>
	     warnOnExit = false;
          <% } %>

          <% if (request.getParameter("autorun") != null &&
                 request.getParameter("autorun").equals("true")) { %>
	     autorunDefinitions = true;
          <% } %>

          <% if (request.getParameter("interactionsText") != null) { %>
	     interactionsText = 
	         decodeURIComponent("<%= java.net.URLEncoder.encode(
					 request.getParameter("interactionsText"), "utf-8").replaceAll("\\+", "%20") %>");
          <% } %>




          <% if (request.getParameter("pid") != null) { %>
	      pid = decodeURIComponent('<%= java.net.URLEncoder.encode(request.getParameter("pid"), "utf-8") %>');
	  <% } else if (request.getParameter("publicId") != null){ %>
   	      publicId = decodeURIComponent('<%= java.net.URLEncoder.encode(request.getParameter("publicId"), "utf-8") %>');
	  <% } else { %>
	  <% } %>

          initializeEditor({userName: userName,
                            pid : pid, 
                            publicId: publicId,
	                    hideHeader: hideHeader,
	                    hideFooter: hideFooter,
	                    hideDefinitions: hideDefinitions,
	                    warnOnExit: warnOnExit,
	                    initialInteractionsText: interactionsText,
	                    autorunDefinitions: autorunDefinitions });
      });
    </script>

  </head>
  
  
  <body>
    <div id="editor">
      
      <div class="top" id="top">
	
	<!-- The dialog div here will be used by jquery -->
	<div id="dialog" style="display:none;"></div>
	
	<div id="header">
	  <h1>WeScheme</h1>
	  <h2>Sometimes YouTube.  Perhaps iPhone.  Together, WeScheme!</h2>
	</div>

	
	<div id="toolbar">
	  <ul>
	    <li class="run">	
	      <a id="run"><img src="/images/run.png" class="button-icon" />Run</a>
	    </li>
	    <li class="stop">	
	      <a id="stop"><img src="/images/break.png" class="button-icon"/>Stop</a>
	    </li>
	    <% if (userSession != null) { %>
	    <li class="save"><a id="save"><img src="/images/save.png" class="button-icon"/>Save<span></span></a></li>
	    <li class="share"><a id="share"><img src="/images/share.png" class="button-icon"/>Share<span></span></a></li>
	    <li class="logout"><a id="logout">Logout</a></li>
	    <li class="account"><a id="account" href="/console" target="console">Programs<span></span></a></li>
	    <% } %>
	    <li class="docs">	<a id="docs" target="_blank" href="/openEditor/moby-user-api.txt">API</a></li>
	    
	  </ul>
	</div>

	<div id="fileInfo">
	  <label id="filenamelabel" for="filename">Project name:</label>
	  <input id="filename" type="text" style="width: 20%"/>
	</div>

      </div> <!-- End top -->



      <div id="middle" class="middle">
	<div id="splitpane" class="goog-splitpane">
	  <div id="definitions" class="goog-splitpane-first-container">
            <textarea id="defn">&#59;  Write your code here
</textarea>
	  </div>
	  
	  <div id="interactions" class="goog-splitpane-second-container">
	    <div id="inter">
	      <div style="width: 100%; height:100%"><span>&gt;&nbsp<input id="inputBox" style="width: 75%;height:100%" type="text"/></span></div>
	    </div>
	  </div>

	  <div class="goog-splitpane-handle"></div> 
	</div>
      </div> <!-- End middle -->
      


      <div id="bottom" class="bottom">

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
