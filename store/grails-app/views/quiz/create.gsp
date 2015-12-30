<!DOCTYPE html>
<html lang="en" class="style-1">
	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <g:set var="entityName" value="${message(code: 'quiz.title.label')}" />
    	<title><g:message code="default.welcome.label"/></title>
  	</head>
	<body class="page-bg preload">
    	<div class="page-wrapper">
      		<div class="intro-block intro-page">
        		<div class="container cont-main">
          			<div class="section-title invert-colors no-margin-b">
            			<h2><g:message code="quiz.title.label"/></h2>
						<p><g:message code="quiz.guidance.default.message"/></p>
          			</div>
		        </div>
			</div>
			<section class="content-block default-bg">
		    	<div class="container cont-main">
					<div class="code-sample">
						<div class="tab-output row">
							<h3><g:message code="default.create.domain.label" args="[entityName]"/></h3>
							<g:form controller="quiz" action="save" role="form">
								<div class="form-group">
									<label><g:message code="quiz.name.label"/></label>
									<div class="input-group">
										<div class="input-group-addon">
											<i class="icon fa fa-user"></i>
										</div>
										<input type="text" class="form-control" name="name" required="required"
											placeholder="${message(code: 'quiz.placeholder.name.label')}">
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
							<g:if test="${listQuiz}">
								<table class="table table-hover table-responsive">
									<tr>
										<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
											<span class="key"><g:message code="quiz.name.label"/></span>
										</th>
										<th style="text-align: center;"><span class="val"><g:message code="question.title.label"/></span></th>
										<th style="text-align: center;"><span class="val"><g:message code="team.title.label"/></span></th>
										<th></th>
									</tr>
									<g:each var="quiz" in="${listQuiz}">
										<tr>
											<td><span class="key">${quiz?.name}</span></td>
											<td style="text-align: center;"><span class="val">${quiz?.listQuestionQuiz?.size()}</span></td>
											<td style="text-align: center;"><span class="val">${quiz?.listTeamQuiz?.size()}</span></td>
											<td style="text-align: center;">
												<g:link action="allocateQuestions" params="[id:quiz?.id]">
													<button class="btn btn-primary" type="submit" title="${message(code: 'default.tooltip.edit.label')}"><i class="icon-center fa fa-edit"></i></button>
												</g:link>
												<g:link action="delete" params="[id:quiz?.id]">
													<button class="btn btn-secondary" type="button" title="${message(code: 'default.tooltip.delete.label')}"><i class="icon-center fa fa-trash"></i></button>
												</g:link>
											</td>
										</tr>
									</g:each>
								</table>
							</g:if>
							<g:else>
								<div class="alert alert-danger ukb-warning" style="display: block;">
									<g:message code="quiz.empty.message"/>
								</div>
							</g:else>
						</div>
					</div>
				</div>
			</section>
		</div>
		<asset:javascript src="quiz/quiz.js" charset="utf-8"/>
	</body>
</html>