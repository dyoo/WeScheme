<%-- Runs a program
     Url scheme:

     http://www.wescheme.org/run?publicId=...
--%>

<%
    String publicId = request.getParameter("publicId");

    String compilationServerUrl = (new org.wescheme.project.WeSchemeProperties(getServletContext())).getCompilationServerUrl();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

<title>WeScheme</title>


<!-- Google analytics support -->
<jsp:include page="/google-analytics.jsp"/>


<!-- Add compatibility libraries for IE. -->
<jsp:include page="/js/compat/compat.jsp"/>

<link rel="stylesheet" type="text/css" href="/css/default.css" id="style" />

<script src="/js/jquery/jquery-1.3.2-min.js" type="text/javascript"></script>
<script src="/editor/jquery.createdomnodes-min.js" type="text/javascript"></script>
<script src="/js/mzscheme-vm/support-min.js" type="text/javascript"></script>
<script src="/js/mzscheme-vm/evaluator-min.js" type="text/javascript"></script>
<script src="/js/loadScript-min.js" type="text/javascript"></script>
<script src="/js/run-calc-min.js" type="text/javascript"></script>

<link rel="stylesheet" type="text/css" href="/css/fullscreen.css" id="style" />

</head>

<body onload="init('<%= compilationServerUrl %>', '<%= publicId%>')">
<div id="interactions">
</div>

</body>
</html>