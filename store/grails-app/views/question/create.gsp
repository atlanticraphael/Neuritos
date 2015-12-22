<!DOCTYPE html>
<html lang="en" class="style-1">
 	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta name="description" content="">
	    <meta name="author" content="">
	    <g:set var="entityName" value="${message(code: 'question.title.label')}" />
	    <g:set var="className" value="${message(code: 'question.class.label')}" />
    	<title><g:message code="default.welcome.label"/></title>
	</head>
  	<body class="page-bg preload">
  		<div class="page-wrapper">
    		<div class="intro-block intro-page">
        		<div class="container cont-main">
        			<div class="section-title invert-colors no-margin-b">
        				<h2><g:message code="question.title.label"/></h2>
            			<p><g:message code="question.guidance.default.message"/></p>
          			</div>
        		</div>
      		</div>
			<section class="content-block default-bg">
	        	<div class="container cont-main">
					<div class="code-sample">
						<g:render template="form" />
					</div>
				</div>
				<g:if test="${listQuestion}">
					<div class="container">
						<div class="demo-title case-c">
							<h2><g:message code="default.listAndEntity.label" args="[entityName]"/></h2>
						</div>
						<table class="table table-hover table-responsive">
							<tr>
								<td class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
									<span class="key"><g:message code="question.header.label"/></span>
								</td>
								<th style="text-align: center;"><span class="val"><g:message code="question.optionsQuantity.label"/></span></th>
								<th style="text-align: center;"><span class="val"><g:message code="question.neuritosImport.label"/></span></th>
								<th style="text-align: center;"><span class="val"><g:message code="question.IdNeuritos.label"/></span></th>
								<th></th>
							</tr>
							<g:each var="question" in="${listQuestion}">
								<tr>
									<td><span class="key">${question?.header}</span></td>
									<td style="text-align: center;"><span class="val">${question?.optionsQuantity}</span></td>
									<td style="text-align: center;">
										<span class="val">
											<g:if test="${question?.neuritosImport}">
												<g:message code="default.boolean.true"/>
											</g:if>
											<g:else>
												<g:message code="default.boolean.false"/>
											</g:else>
										</span>
									</td>
									<td style="text-align: center;">
										<span class="val">
											<g:if test="${!question?.questionIdNeuritos}">
												-
											</g:if>
											<g:else>
												${question?.questionIdNeuritos}
											</g:else>									
										</span>
									</td>
									<th style="text-align: center;">
										<g:link action="show" params="[id:question.id]">
											<button class="btn btn-primary" type="submit" title="${message(code: 'default.tooltip.edit.label')}"><i class="icon-center fa fa-edit"></i></button>
										</g:link>
										<g:link action="delete" params="[id:question.id]">
											<button class="btn btn-secondary" type="button" title="${message(code: 'default.tooltip.delete.label')}"><i class="icon-center fa fa-trash"></i></button>
										</g:link>
									</th>
								</tr>
							</g:each>
						</table>
					</div>
				</g:if>
			</section>
		</div>
		<asset:javascript src="question/question.js" charset="utf-8"/>
	</body>
</html>
