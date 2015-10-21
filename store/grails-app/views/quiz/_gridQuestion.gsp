<div class="code-sample">
	<div class="tab-output row">
		<h3>Questões da quiz</h3>
		<g:if test="${!quiz.listQuestionQuiz}">
			<div class="alert alert-danger ukb-error" style="display: block;">
				Não existem questões nesta quiz
			</div>
		</g:if>
			<ul class="vlinks vlinks-iconed vlinks-tabled vlinks-ruled vlinks-ruled-dots" style="width: 95%;">
				<g:each var="questionQuiz" in="${quiz.listQuestionQuiz}" >
					<li>
						<span class="key">
							<i class="icon fa fa-user"></i>
							<a class="title">${questionQuiz.question.header}</a>
							<span class="meta">${questionQuiz.question.optionsQuantity}</span>
						</span>
				      	<span class="val">
							<button class="btn btn-secondary option-icon-button" type="button" onclick="deleteQuestionFromQuiz(${questionQuiz.id}, ${quiz.id})"><i class="icon-center fa fa-trash"></i></button>
						</span>
					</li>
				</g:each>
		    </ul>
	</div>
</div>

<div class="code-sample">
	<div class="tab-output row">
		<h3>Questões disponíveis</h3>
		<g:if test="${!listAvailableQuestions}">
			<div class="alert alert-danger ukb-error" style="display: block;">
				Não existem questões disponíveis
			</div>
		</g:if>
		<g:if test="${listAvailableQuestions}">
			<table class="table table-hover table-responsive">
					<tr>
						<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
							<span class="key">Enunciado</span></th>
						<th style="text-align: center;"><span class="val">Quantidade de alternativas</span></th>
						<th style="text-align: center;"><span class="val">Importação do Neuritos</span></th>
						<th style="text-align: center;"><span class="val">Id Questão Neuritos</span></th>
						<th></th>
					</tr>
					<g:each var="question" in="${listAvailableQuestions}">
						<tr>
							<td><span class="key">
									${question.header}
							</span></td>
							<td style="text-align: center;"><span class="val">
									${question.optionsQuantity}
							</span></td>
							<td style="text-align: center;"><span class="val">
									<g:if test="${question.neuritosImport}">
										Sim
									</g:if>
									<g:if test="${!question.neuritosImport}">
										Não
									</g:if>
							</span></td>
							<td style="text-align: center;"><span class="val">
									<g:if test="${!question.questionIdNeuritos}">
										-
									</g:if>
									${question.questionIdNeuritos}
							</span></td>
							<td style="text-align: center;">
								<button class="btn btn-primary" type="button" onclick="allocateQuestion(${question.id}, ${quiz.id})">Add</button>
							</td>
						</tr>
					</g:each>
				</table>
		</g:if>
	</div>
</div>
