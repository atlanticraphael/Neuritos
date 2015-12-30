<!DOCTYPE html>
<html lang="en" class="style-1">
	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
					<div class="code-sample">
						<div class="tab-output row">
							<h3><g:message code="default.create.domain.label" args="[className]"/></h3>
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
									<div class="input-group w-100pc">
										<button class="btn btn-primary pull-right" type="submit" ><g:message code="default.button.create.label"/></button>
									</div>
								</div>
						    </g:form>
						</div>
					</div>
					<div class="code-sample">
						<div class="tab-output row">
							<h3><g:message code="default.listAndEntity.label" args="[entityName]"/></h3>
							<g:if test="${listTeam}">
								<table class="table table-hover table-responsive">
									<tr>
										<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
											<span class="key"><g:message code="team.name.label"/></span>
										</th>
										<th style="text-align: center;"><span class="val"><g:message code="team.creationDate.label"/></span></th>
										<th style="text-align: center;"><span class="val"><g:message code="team.numberOfMembers.label"/></span></th>
										<th></th>
									</tr>
									<g:each var="team" in="${listTeam}">
										<tr>
											<td><span class="key">${team?.name}</span></td>
											<td style="text-align: center;"><span class="val"><g:formatDate date="${team?.creationDate}" format="dd/MM/yyyy"/></span></td>
											<td style="text-align: center;"><span class="val">${team?.teamUser?.size()}</span></td>
											<td style="text-align: center;">
												<button class="btn btn-primary pull-right" onclick="allocateUsers(${team?.id })"><i class="fa fa-group"></i>&nbsp;<g:message code="default.button.manageUsers.label"/></button>
											</td>
										</tr>
									</g:each>
								</table>
							</g:if>
							<g:else>
								<div class="alert alert-danger ukb-warning" style="display: block;">
									<g:message code="team.empty.message"/>
								</div>
							</g:else>
						</div>
					</div>
				</div>
			</section>
		</div>
		<asset:javascript src="team/team.js" charset="utf-8"/>
	</body>
</html>