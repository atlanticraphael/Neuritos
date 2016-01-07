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
		    		<g:if test="${flash.messageError}">
						<div class="alert alert-danger ukb-warning" role="alert">
							<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
							<ul>
						    	<g:each in="${flash.messageError}"><li>${it}</li></g:each> 
						  	</ul>
						  </div>	 
					</g:if>
					<div class="code-sample">
						<div class="tab-output row">
							<h3><g:message code="default.create.domain.label" args="[className]"/></h3>
							<g:form url="[resource:teamInstance, action:'save']"  role="form">
								<g:render template="form" />
								<div class="form-group">
									<div class="input-group w-100pc">
										<g:submitButton name="create" class="btn btn-primary pull-right" value="${message(code: 'default.button.create.label')}" />
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
											<td style="text-align: center;"><span class="val">${team?.listTeamUser?.size()}</span></td>
											<td style="text-align: center;">
												<g:link action="edit" params="[id:team?.id]">
													<button class="btn btn-primary" type="submit" title="${message(code: 'default.tooltip.edit.label')}"><i class="icon-center fa fa-edit"></i></button>
												</g:link>
												<g:link action="delete" params="[id:team?.id]">
													<button class="btn btn-secondary" type="button" title="${message(code: 'default.tooltip.delete.label')}"><i class="icon-center fa fa-trash"></i></button>
												</g:link>
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