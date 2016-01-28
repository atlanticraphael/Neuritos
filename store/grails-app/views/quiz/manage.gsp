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
            			<h2><g:message code="manageQuiz.title.label"/></h2>
            			<p><g:message code="manageQuiz.guidance.default.message"/></p>
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
							<g:if test="${flash.messageSend}">
								<div class="alert alert-info ukb-error" style="display: block;">
									${flash.messageSend}
									<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
								</div>
							</g:if>
							<g:if test="${flash.messageSendError}">
								<div class="alert alert-danger ukb-error" style="display: block;">
									${flash.messageSendError}
									<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
								</div>
							</g:if>
							<h3><g:message code="manageQuiz.listToSend.label"/></h3>
							<g:if test="${listQuizToSend}">
								<table class="table table-hover table-responsive">
									<tr>
										<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
											<span class="key"><g:message code="quiz.name.label"/></span>
										</th>
										<th style="text-align: center;"><span class="val"><g:message code="quiz.creationDate.label"/></span></th>
										<th style="text-align: center;"><span class="val"><g:message code="team.numberOfMembers.label"/></span></th>
										<th></th>
									</tr>
									<g:each var="quiz" in="${listQuizToSend}">
										<tr>
											<td><span class="key">${quiz?.name}</span></td>
											<td style="text-align: center;"><span class="val"><g:formatDate date="${quiz?.creationDate}" format="dd/MM/yyyy"/></span></td>
											<td style="text-align: center;"><span class="val">${quiz?.countMembers()}</span></td>
											<td style="text-align: center;">
												<g:if test="${quiz?.countMembers() == 0}">
													<g:link action="send" params="[id:quiz?.id]">
														<button class="btn btn-primary pull-right" type="submit" disabled="disabled"><i class="fa fa-envelope-o"></i>&nbsp;<g:message code="default.button.send.label"/></button>
													</g:link>
												</g:if>
												<g:else>
													<g:link action="send" params="[id:quiz?.id]">
														<button class="btn btn-primary pull-right" type="submit"><i class="fa fa-envelope-o"></i>&nbsp;<g:message code="default.button.send.label"/></button>
													</g:link>
												</g:else>
											</td>
										</tr>
									</g:each>
								</table>
							</g:if>
							<g:else>
								<div class="alert alert-danger ukb-warning" style="display: block;">
									<g:message code="manageQuiz.listToSend.empty.message"/>
								</div>
							</g:else>
						</div>
					</div>
					<div class="code-sample">
						<div class="tab-output row">
							<g:if test="${flash.messageResend}">
								<div class="alert alert-info ukb-error" style="display: block;">
									${flash.messageResend}
									<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
								</div>
							</g:if>
							<g:if test="${flash.messageResendError}">
								<div class="alert alert-danger ukb-error" style="display: block;">
									${flash.messageResendError}
									<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
								</div>
							</g:if>
							<h3><g:message code="manageQuiz.listSent.label"/></h3>
							<g:if test="${listQuizSent}">
								<table class="table table-hover table-responsive">
									<tr>
										<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
											<span class="key"><g:message code="quiz.name.label"/></span>
										</th>
										<th style="text-align: center;"><span class="val"><g:message code="manageQuiz.sentDate.label"/></span></th>
										<th style="text-align: center;"><span class="val"><g:message code="team.numberOfMembers.label"/></span></th>
										<th style="text-align: center;"><span class="val"><g:message code="manageQuiz.numbersOfAnsweredMembers.label"/></span></th>
										<th></th>
									</tr>
									<g:each var="quiz" in="${listQuizSent}">
										<tr>
											<td><g:link action="showDetailedQuiz" id="${quiz?.id}"><span class="key">${quiz?.name}</span></g:link></td>
											<td style="text-align: center;"><span class="val"><g:formatDate date="${quiz?.sentDate}" format="dd/MM/yyyy"/></span></td>
											<td style="text-align: center;"><span class="val">${quiz?.countMembersInUserQuiz()}</span></td>
											<td style="text-align: center;"><span class="val">${quiz?.countFinalizedUser()}</span></td>
											<td style="text-align: center;">
												<g:link action="resendEmail" params="[id:quiz?.id]">
													<button class="btn btn-primary pull-right" type="submit"><i class="fa fa-mail-reply-all"></i>&nbsp;<g:message code="default.button.resend.label"/></button>
												</g:link>
											</td>
										</tr>
									</g:each>
								</table>
							</g:if>
							<g:else>
								<div class="alert alert-danger ukb-warning" style="display: block;">
									<g:message code="manageQuiz.listSent.empty.message"/>
								</div>
							</g:else>
						</div>
					</div>
				</div>
			</section>
		</div>
	</body>
</html>