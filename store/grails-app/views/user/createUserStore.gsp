<!DOCTYPE html>
<html lang="en" class="style-1">
	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <g:set var="entityName" value="${message(code: 'user.title.label')}" />
   	    <g:set var="className" value="${message(code: 'user.class.label')}" />
	    <title><g:message code="default.welcome.label"/></title>
  	</head>
	<body class="page-bg preload">
    	<div class="page-wrapper">
      		<div class="intro-block intro-page">
        		<div class="container cont-main">
          			<div class="section-title invert-colors no-margin-b">
						<h2><g:message code="user.title.label"/></h2>
            			<p><g:message code="user.guidance.default.message"/></p>
          			</div>
		        </div>
			</div>
			<section class="content-block default-bg">
		    	<div class="container cont-main">
					<div class="code-sample">
						<div class="tab-output row">
							<h3><g:message code="default.create.domain.label" args="[className]"/></h3>
							<g:form url="[resource:userInstance, action:'saveUser']"  role="form">
								<g:render template="form" />
						    </g:form>
						</div>
					</div>
				</div>
			</section>
		</div>
		<asset:javascript src="team/team.js" charset="utf-8"/>
	</body>
</html>