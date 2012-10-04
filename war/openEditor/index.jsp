<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

    <title>WeScheme</title>
    <!-- Tags for on mobile -->
    <meta name="viewport" content="width=640, initial-scale=.75, user-scalable=yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />	
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="apple-touch-icon-precomposed" href="css/images/BigLogo.png" />


    <!-- Add compatibility libraries for IE. -->
    <jsp:include page="/js/compat/compat.jsp"/>

    <!-- Google analytics support -->
    <jsp:include page="/google-analytics.jsp"/>




    <link rel="stylesheet" type="text/css" href="/css/default.css" id="style" />


      
    <link rel="stylesheet" type="text/css" href="/css/codemirror.css" id="style" />

    <!-- dynamic script loading -->
    <script src="/js/loadScript-min.js" type="text/javascript"></script>


    <!-- JQuery -->
    <script src="/js/jquery/jquery-1.3.2-min.js" type="text/javascript"></script>
    <script src="/js/jquery/jquery-ui-1.7.3.custom.min.js" type="text/javascript"></script>



    <!-- JQuery UI style sheet -->
    <link rel="stylesheet" type="text/css" href="/css/jquery-ui.css"/>


    <!-- EasyXDM and json -->
    <script src="/js/easyXDM/easyXDM-min.js" type="text/javascript"></script>
    <script type="text/javascript">
      easyXDM.DomHelper.requiresJSON("/js/easyXDM/json2-min.js");
    </script>


    <script src="/safeSubmit-min.js" type="text/javascript"></script>

    <script src="/js/flapjax-2.0.1.compressed-min.js" type="text/javascript"></script>
    <script src="/js/flapjax-helpers-min.js" type="text/javascript"></script>
    <script src="/js/jquery/jquery.createdomnodes-min.js" type="text/javascript"></script>
    <script src="/js/jquery/jquery.center-in-client-min.js" type="text/javascript"></script>
    <script src="/js/jquery/jquery.blockUI-min.js" type="text/javascript"></script>
    
    <script src="/js/codemirror2/lib/codemirror-min.js" type="text/javascript"></script>
    <script src="/js/codemirror2-contrib/scheme2/scheme2-min.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="/js/codemirror2/lib/codemirror.css"></link>
    <link rel="stylesheet" type="text/css" href="/js/codemirror2-contrib/scheme2/schemecolors.css"></link>
    <link rel="stylesheet" type="text/css" href="/js/codemirror2-contrib/scheme2/schemecolors-interactive.css"></link>
    <link rel="stylesheet" type="text/css" href="/css/definitions.css"></link>

    <!-- Design recipe widget stuff -->
    <script src="/widget/js/DRwidget-min.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="/widget/css/editor.css"></link>

    
    <script src="/js/submitpost-min.js" type="text/javascript"></script>


    <!-- mzscheme-vm evaluator -->
    <script src="/js/mzscheme-vm/support-min.js" type="text/javascript"></script>
    <script src="/js/mzscheme-vm/evaluator-min.js" type="text/javascript"></script>

    <script src="/js/openEditor/openEditor-calc-min.js" type="text/javascript"></script>



    <%
       org.wescheme.user.Session userSession = 
       (new org.wescheme.user.SessionManager()).authenticate(request, response); 

       boolean isEmbedded = false;       
       %>


    <script type="text/javascript">
      jQuery(document).ready(function() {
          var userName, pid, publicId, 
              hideHeader, hideToolbar,
              hideProjectName,
              hideFooter, hideDefinitions, hideInteractions,
              warnOnExit, interactionsText, definitionsText, autorunDefinitions, isEmbedded;
          userName = pid = publicId = interactionsText = definitionsText = null;
          hideDefinitions = false;
          hideInteractions = false;
          autorunDefinitions = false;
          hideHeader = false;
          hideToolbar = false;
          hideProjectName = false;
          hideFooter = false;
          warnOnExit = true;
          isEmbedded = false;
      


          userName = "<%= userSession != null? userSession.getName() : null %>";

          <% if (request.getParameter("hideHeader") != null &&
                 request.getParameter("hideHeader").equals("true")) { %>
	     hideHeader = true;
          <% } %>

          <% if (request.getParameter("hideToolbar") != null &&
                 request.getParameter("hideToolbar").equals("true")) { %>
	     hideToolbar = true;
          <% } %>

          <% if (request.getParameter("hideProjectName") != null &&
                 request.getParameter("hideProjectName").equals("true")) { %>
	     hideProjectName = true;
          <% } %>

          <% if (request.getParameter("hideFooter") != null &&
                 request.getParameter("hideFooter").equals("true")) { %>
	     hideFooter = true;
          <% } %>

          <% if (request.getParameter("hideDefinitions") != null &&
                 request.getParameter("hideDefinitions").equals("true")) { %>
	     hideDefinitions = true;
          <% } %>

          <% if (request.getParameter("hideInteractions") != null &&
                 request.getParameter("hideInteractions").equals("true")) { %>
	     hideInteractions = true;
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

          <% if (request.getParameter("definitionsText") != null) { %>
	     definitionsText = 
	         decodeURIComponent("<%= java.net.URLEncoder.encode(
					 request.getParameter("definitionsText"), "utf-8").replaceAll("\\+", "%20") %>");
          <% } %>


          <% if (request.getParameter("pid") != null) { %>
	      pid = decodeURIComponent('<%= java.net.URLEncoder.encode(request.getParameter("pid"), "utf-8") %>');
	  <% } else if (request.getParameter("publicId") != null){ %>
   	      publicId = decodeURIComponent('<%= java.net.URLEncoder.encode(request.getParameter("publicId"), "utf-8") %>');
	  <% } else { %>
	  <% } %>


          <%
             if (request.getParameter("embedded") != null &&
                 request.getParameter("embedded").equals("true") &&
                 // embedded mode is not allowed when pid has been provided.
                 request.getParameter("pid") == null) {
	     isEmbedded = true;
             }
          %>
          isEmbedded = <%= isEmbedded %>; // expose it on the JavaScript side too.


          initializeEditor({userName: userName,
                            pid : pid, 
                            publicId: publicId,
	                    hideHeader: hideHeader,
	                    hideToolbar: hideToolbar,
	                    hideProjectName: hideProjectName,
	                    hideFooter: hideFooter,
	                    hideDefinitions: hideDefinitions,
	                    hideInteractions: hideInteractions,
	                    warnOnExit: warnOnExit,
	                    initialInteractionsText: interactionsText,
	                    initialDefinitionsText: definitionsText,
	                    autorunDefinitions: autorunDefinitions });
      });
    </script>
	
	<script> 		
        jQuery(function()
        {
        		var viewportWidth = jQuery(window).width();
				var viewportHeight = jQuery(window).height();
                var something = jQuery("#documentation").dialog({autoOpen: false, 
                								title: "Documentation",
                								position: "right", 
                								minWidth: viewportWidth / 4,
                								minHeight: viewportHeight / 2,
                								width: viewportWidth / 3,
                								height: viewportHeight * .9,
                								beforeclose: function() {
                									jQuery(this).dialog('option', 'position', [jQuery(this).parent().offset().left, jQuery(this).parent().offset().top]);
                								}
                									 });
              //something.dialog('close');
        });
	</script>
	
	
  </head>
  
  
  <body>  
  	
  
    <div id="editor">
	      
      
        
      
      <div class="top" id="top">
	
	<!-- The dialog div here will be used by jquery -->
	<div id="dialog" style="display:none;"></div>



        <div id="design-recipe-form" style="position: absolute; left: -1000px; z-index: 10;">
	  <div class="section" id="design-recipe-contract">
            <div id="design-recipe-contract_wrapper">
              <span class="spacer" style="width: 15px;">;</span>
              <textarea id="design-recipe-name"></textarea>
              <span>:</span>
              <textarea id="design-recipe-domain"></textarea>
              <span>-></span>
              <textarea id="design-recipe-range"></textarea>
            </div>
            <span class="error" id="design-recipe-contract_error"></span>
	  </div>

          <div class="section" id="design-recipe-examples">
            <div id="design-recipe-example1_wrapper">
              <span class="spacer">(EXAMPLE </span> 
              <div class="indent-wrapper">
              	<textarea id="design-recipe-example1_header"></textarea>
              	<textarea id="design-recipe-example1_body"></textarea>
                <span class="spacer">)</span>
              </div>
            </div>
            <span class="error" id="design-recipe-example1_error"></span>
            <hr/>
            <div id="design-recipe-example2_wrapper">
              <span class="spacer">(EXAMPLE </span>
              <div class="indent-wrapper">
               	 <textarea id="design-recipe-example2_header"></textarea>
             	 <textarea id="design-recipe-example2_body"></textarea>
	             <span class="spacer">)</span>
              </div>
            </div>
            <span class="error" id="design-recipe-example2_error"></span>
          </div>

          
          <div class="section" id="design-recipe-definition">
            <div id="design-recipe-definition_wrapper">
              <span class="spacer">(define </span>
              <div class="indent-wrapper">
              	<textarea id="design-recipe-definition_header"></textarea>
              	<textarea id="design-recipe-definition_body"></textarea>
              	<span class="spacer">)</span>
              </div>
            </div>
            <span class="error" id="design-recipe-definition_error"></span>
          </div>

	  <div class="toolbar">
            <input type="button" 
                   id="design-recipe-insertCode"
                   class="button" 
                   value="Insert" 
                   style="float: right; color: black;"/>
	    <input type="button" id="design-recipe-cancel" class="button" value="Cancel" style="float: left;" />
	  </div>

        </div>








	
	<div id="header">
	  <h1>WeScheme</h1>
	  <h2>
            <a id="docs">Documentation</a>
	    <% if (userSession != null) { %>
            <a id="account" href="/console" target="console">Programs</a>
            <a id="logout">Logout</a>
	    <% } %>
      </h2>
	</div>

	
	<div id="toolbar">
	  <ul>
	    <li><a id="run"><span>Run</span></a></li>
	    <li><a id="stop"><span>Stop</span></a></li>
	    <% if (userSession != null) { %>
	    <li><a id="save"><span>Save</span></a></li>
	    <li><a id="share"><span>Share</span></a></li>
	    <% } %>
        <li><a id="recipe"><span>Recipe</span></a></li>
	  </ul>
          <ul></ul>
          <!-- This is here to force the div height.  This may be unnecessary
               as soon as we figure out what's going on with the css/html
               weirdness. -->
	</div>




	<div id="fileInfo">
	  <label id="filenamelabel" for="filename">Project name:</label>
	  <input id="filename" type="text" style="width: 20%"/>
	</div>


        <div id="documentation" class="documentation">
	  <!-- <input id="docButton" type="button" value="Click me to hide documentation"/> -->
	  <input id="resetButton" type="image" src="../images/home.png"/>
          <iframe id="docFrame" style="width:97%; height:95%"></iframe>
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




  <script type="text/javascript">
    var widget;
    jQuery(document).ready(function() {
    widget = initializeWidget(myEditor.defn.impl.editor,
                              myEditor.getTokenizer());

    jQuery("#designrecipebutton").bind("click", function(e) { e.preventDefault(); e.stopPropagation(); widget.showWidget(); });
    });
    
    <% if (isEmbedded) { %>
    // If we're in embedded mode, start up a socket for cross domain messaging support.
    var rpc = new easyXDM.Rpc({ local: "/js/easyXDM/name.html",
                                swf: "/js/easyXDM/easyxdm.swf",
                              },
                              { local : { run : function(onSuccess) {
                                                    myEditor.run(onSuccess);
                                                },
                                          requestBreak : function(onSuccess) {
                                                              myEditor.requestBreak();
                                                              onSuccess(); 
                                                         },
                                          getDefinitionsText : function(onSuccess) {
                                                                   onSuccess(myEditor.getDefinitionsText());
                                                               },
                                          setDefinitionsText : function(v, onSuccess) {
                                                                   myEditor.setDefinitionsText(v);
                                                                   onSuccess();
                                                               }}});
   <% } %>
  </script>


</html>
