<!DOCTYPE html>
<html lang="en" class="style-1">
  	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta name="description" content="">
	    <meta name="author" content="">
		<title><g:message code="default.welcome.label"/></title>
  	</head>
	<body class="page-bg preload">
		<div class="page-wrapper nav-fixed">
			<div class="page-wrapper">
				<div class="intro-block intro-page">
					<div class="container cont-main">
						<div class="section-title invert-colors no-margin-b">
							<h2><g:message code="apply.title.label"/></h2>
							<p><g:message code="aplly.guidance.default.message"/></p>
						</div>
					</div>
				</div>
				<section class="content-block default-bg">
					<div class="container cont-main">
						<div class="demo-title case-c">
							<h2><g:message code="apply.title.label"/></h2>
						</div>
					</div>
					<div class="container">
						<g:if test="${listQuiz}">
							<table class="table table-hover table-responsive">
								<tr>
									<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
										<span class="key"><g:message code="quiz.name.label"/> </span>
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
											<g:link action="allocateQuestions" params="[id:quiz.id]">
												<button class="btn btn-primary" type="submit"><g:message code="default.button.applyQuiz.label"/></button>
											</g:link>
										</td>
									</tr>
								</g:each>
							</table>
						</g:if>
						<g:else>
							<div class="alert alert-danger ukb-warning" style="display: block;">
								<g:message code="apply.list.quiz.empty.message"/>
							</div>
						</g:else>
					</div>
				</section>
			</div>
		</div>
		<asset:javascript src="quiz/quiz.js" charset="utf-8"/>
	</body>
</html>
