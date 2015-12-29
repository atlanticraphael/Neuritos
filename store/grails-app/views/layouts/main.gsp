<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript"> var language = '${session['language'] ?: 'pt_br'}'; </script>
   	<title><g:message code="default.welcome.label"/></title>
     <!-- Bootstrap core CSS
    ================================================== -->
    <asset:stylesheet href="uikit/bootstrap/bootstrap.min.css" rel="stylesheet" />

    <!-- Custom styles for this template
    ================================================== -->
    <asset:stylesheet href="uikit/uikit.css" rel="stylesheet" />
    <asset:stylesheet href="uikit/uikit-browser.css" rel="stylesheet" />
    <g:layoutHead />
</head>
<body>
    <div>
	     <!-- Preloader 
	    ============================================ -->
	    <div class="page-preloader">
	      <div class="vcenter"> <div class="vcenter-this"><asset:image class="anim" src="loader.gif" alt="loading..." /></div></div>
	    </div>
	    <!-- /Preloader 
	    ============================================ --> 
    
        <!-- Nav Block 
      ============================================ -->
      <section class="nav-block">
      
		<!-- Nav Contact  -->
        <g:render template="/layouts/contactUs" />
		<!-- /Nav Contact  -->
        
		<!-- Nav Main  -->
		<g:render template="/layouts/menuStore" /> 
		<!-- /Nav Main -->
        
      </section>
      <!-- /Nav Block
      ============================================ -->
    </div>
    <g:layoutBody />
    
    <!-- Mainly scripts -->
    <!-- Javascript
    ================================================== -->
    <asset:javascript src="uikit/jquery-latest.min.js" />
    <asset:javascript src="uikit/uikit.js" />
    <asset:javascript src="application.js" />
    <!-- /JavaScript
    ================================================== -->
</body>
</html>