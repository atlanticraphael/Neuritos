<!DOCTYPE html>
<html lang="en" class="style-1">
	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<title><g:message code="default.welcome.label"/></title>
  	</head>
	<body class="page-bg preload">
    	<div class="page-wrapper">
      		<div class="intro-block intro-page">
        		<div class="container cont-main">
          			<div class="section-title invert-colors no-margin-b">
            			<h2><g:message code="quizDetails.title.label"/></h2>
            			<p><g:message code="quizDetails.guidance.default.message"/></p>
          			</div>
		        </div>
			</div>
			<section class="content-block default-bg">
		    	<div class="container cont-main">
					<div class="row grid-2">
						<div class="col-md-8">
					    	<div class="demo-title case-c">
								<h2><g:message code="quiz.title.label"/>:&nbsp;${quiz?.name}</h2>
							</div>
						</div>
						<div class="col-md-4">
							<g:link action="manage">
				                <button class="btn btn-w-m btn-primary pull-right"><i class="fa fa-arrow-left"></i>&nbsp;<g:message code="default.button.back.label"/></button>
							</g:link>
						</div>
					</div>				
					<div class="code-sample">
						<div class="tab-output row">
							<g:if test="${quiz?.countMembersInUserQuiz() == 0}">
								<div class="alert alert-danger ukb-error" style="display: block;">
									<g:message code="quizDetails.list.userQuiz.empty.message"/>
								</div>
							</g:if>
							<g:each var="teamQuiz" in="${quiz?.listTeamQuiz}">
								<h3><g:message code="team.class.label"/>:&nbsp;${teamQuiz?.team?.name}</h3>
								<table class="table table-hover table-responsive">
									<tr>
										<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
											<span class="key"><g:message code="user.name.label"/></span>
										</th>
										<th style="text-align: center;"><span class="val"><g:message code="quizDetails.startDate.label"/></span></th>
										<th style="text-align: center;"><span class="val"><g:message code="quizDetails.finishDate.label"/></span></th>
									</tr>
									<g:each var="teamUser" in="${teamQuiz?.team?.listTeamUser}">
										<tr>
											<td><span class="key">${teamUser?.user?.name}</span></td>
											<td style="text-align: center;"><span class="val"></span></td>
											<td style="text-align: center;"><span class="val"></span></td>
										</tr>
									</g:each>
								</table>
							</g:each>	
						</div>
					</div>
				</div>
			</section>
		</div>
	</body>
</html>