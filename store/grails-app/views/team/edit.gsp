<!DOCTYPE html>
<html lang="en" class="style-1">
	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <g:set var="className" value="${message(code: 'team.class.label')}" />
    	<title><g:message code="default.welcome.label"/></title>
  	</head>
	<body class="page-bg preload">
    	<div class="page-wrapper">
      		<div class="intro-block intro-page">
        		<div class="container cont-main">
          			<div class="section-title invert-colors no-margin-b">
            			<h2><g:message code="team.title.label"/></h2>
						<p><g:message code="team.guidance.edit.message"/></p>
          			</div>
		        </div>
			</div>
			<section class="content-block default-bg">
		    	<div class="container cont-main">
					<div class="code-sample">
						<div class="tab-output row">
							<h3><g:message code="default.edit.domain.label" args="[className]"/></h3>
							<g:form url="[resource:teamInstance, action:'update']"  role="form">
								<g:render template="form" />
								<div class="form-group">
									<div class="input-group w-100pc">
										<g:actionSubmit class="btn btn-primary pull-right" action="update" value="${message(code: 'default.button.update.label')}" />
									</div>
								</div>
						    </g:form>
						    <div class="form-group">
								<div class="input-group">
				                	<button class="btn btn-primary pull-right" onclick="allocateUsers(${teamInstance?.id })"><i class="fa fa-group"></i>&nbsp;<g:message code="default.button.manageUsers.label"/></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<asset:javascript src="team/team.js" charset="utf-8"/>
	</body>
</html>