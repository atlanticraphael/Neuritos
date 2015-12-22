<!DOCTYPE html>
<html lang="en" class="style-1">
	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta name="description" content="">
	    <meta name="author" content="">
   	    <g:set var="entityName" value="${message(code: 'team.title.label')}" />
   	    <g:set var="className" value="${message(code: 'team.class.label')}" />
    	<title><g:message code="default.welcome.label"/></title>
	</head>
    <body class="page-bg preload">
    	<div class="page-wrapper">
	    	<div class="intro-block intro-page">
        		<div class="container cont-main">
          			<div class="section-title invert-colors no-margin-b">
            			<h2><g:message code="team.title.label"/></h2>
            			<p><g:message code="team.guidance.default.message"/></p>
          			</div>
        		</div>
      		</div>
			<section class="content-block default-bg">
		        <div class="container cont-main">
		        	<div class="demo-title case-c">
						<h2><g:message code="default.create.domain.label" args="[className]"/></h2>
					</div>
					<div class="code-sample">
						<g:form controller="team" action="save" role="form">
							<div class="form-group">
								<label><g:message code="team.name.label"/></label>
								<div class="input-group">
									<div class="input-group-addon">
										<i class="icon fa fa-user"></i>
									</div>
									<input type="text" class="form-control" name="name"
										placeholder="${message(code: 'team.placeholder.name.label')}">
								</div>
							</div>
							<hr />
							<div class="form-group">
								<button class="btn btn-primary pull-right"><g:message code="default.button.create.label"/></button>
							</div>
						</g:form>
					</div>
				</div>
				<div class="container">
					<div class="demo-title case-c">
						<h2><g:message code="default.listAndEntity.label" args="[entityName]"/></h2>
					</div>
					<table class="table table-hover table-responsive">
						<tr>
							<td class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
								<span class="key"><g:message code="team.name.label"/></span>
							</td>
							<td><span class="val"><g:message code="team.creationDate.label"/></span></td>
							<td><span class="val"><g:message code="team.numberOfMembers.label"/></span></td>
							<td></td>
						</tr>
						<g:each var="team" in="${listTeam}">
							<tr>
								<td><span class="key">${team?.name}</span></td>
								<td><span class="val"><g:formatDate date="${team?.creationDate}" format="dd/MM/yyyy"/></span></td>
								<td><span class="val">${team?.teamUser?.size()}</span></td>
								<td>
									<button class="btn btn-primary btn-sm" onclick="allocateUsers(${team?.id })"><i class="fa fa-group"></i>&nbsp;<g:message code="default.button.manageUsers.label"/></button>
								</td>
							</tr>
						</g:each>
					</table>
				</div>
			</section>
		</div>
		<asset:javascript src="team/team.js" charset="utf-8"/>
	</body>
</html>
