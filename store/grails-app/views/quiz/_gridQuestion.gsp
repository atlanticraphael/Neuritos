<div class="code-sample">
	<div class="tab-output row">
		<h3><g:message code="quiz.list.questionQuiz.label"/></h3>
		<g:if test="${!quiz?.listQuestionQuiz}">
			<div class="alert alert-danger ukb-error" style="display: block;">
				<g:message code="quiz.list.questionQuiz.empty.message"/>
			</div>
		</g:if>
		<ul class="vlinks vlinks-iconed vlinks-tabled vlinks-ruled vlinks-ruled-dots" style="width: 95%;">
			<g:each var="questionQuiz" in="${quiz?.listQuestionQuiz}" >
				<li>
					<span class="key">
						<i class="icon fa fa-user"></i>
						<a class="title">${questionQuiz?.question?.header}</a>
						<span class="meta">${questionQuiz?.question?.optionsQuantity}</span>
					</span>
			      	<span class="val">
						<button class="btn btn-secondary option-icon-button" type="button" onclick="deleteQuestionFromQuiz(${questionQuiz?.id}, ${quiz?.id})" title="${message(code: 'default.tooltip.delete.label')}"><i class="icon-center fa fa-trash"></i></button>
					</span>
				</li>
			</g:each>
	    </ul>
	</div>
</div>
<div class="code-sample">
	<div class="tab-output row">
		<h3><g:message code="quiz.list.availableQuestions.label"/></h3>
		<g:if test="${listAvailableQuestions}">
			<table class="table table-hover table-responsive">
				<tr>
					<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
						<span class="key"><g:message code="question.header.label"/></span></th>
					<th style="text-align: center;"><span class="val"><g:message code="question.optionsQuantity.label"/></span></th>
					<th style="text-align: center;"><span class="val"><g:message code="question.neuritosImport.label"/></span></th>
					<th style="text-align: center;"><span class="val"><g:message code="question.IdNeuritos.label"/></span></th>
					<th></th>
				</tr>
				<g:each var="question" in="${listAvailableQuestions}">
					<tr>
						<td><span class="key">${question?.header}</span></td>
						<td style="text-align: center;"><span class="val">${question?.optionsQuantity}</span></td>
						<td style="text-align: center;">
							<span class="val">
								<g:if test="${question?.neuritosImport}">
									<g:message code="default.yes.label"/>
								</g:if>
								<g:else>
									<g:message code="default.no.label"/>
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
						<td style="text-align: center;">
							<button class="btn btn-primary pull-right" type="button" onclick="allocateQuestion(${question?.id}, ${quiz?.id})"><i class="fa fa-cog"></i>&nbsp;<g:message code="default.button.add.label"/></button>
						</td>
					</tr>
				</g:each>
			</table>
		</g:if>
		<g:else>
			<div class="alert alert-danger ukb-warning" style="display: block;">
				<g:message code="quiz.list.availableQuestions.empty.message"/>
			</div>
		</g:else>
	</div>
</div>