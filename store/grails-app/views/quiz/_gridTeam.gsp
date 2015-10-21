<div class="code-sample">
	<div class="tab-output row">
		<h3>Turmas da quiz</h3>
		<g:if test="${!quiz.listTeamQuiz}">
			<div class="alert alert-danger ukb-error" style="display: block;">
				Não existem turmas nesta quiz
			</div>
		</g:if>
		<g:if test="${quiz.listTeamQuiz}">
			<ul class="vlinks vlinks-iconed vlinks-tabled vlinks-ruled vlinks-ruled-dots" style="width: 95%;">
				<g:each var="teamQuiz" in="${quiz.listTeamQuiz}" >
					<li>
						<span class="key">
							<i class="icon fa fa-user"></i>
							<a class="title">${teamQuiz.team.name}</a>
						</span>
				      	<span class="val">
							<button class="btn btn-secondary option-icon-button" type="button" onclick="deleteTeamFromQuiz(${teamQuiz.id}, ${quiz.id})"><i class="icon-center fa fa-trash"></i></button>
						</span>
					</li>
				</g:each>
		    </ul>
		</g:if>
	</div>
</div>

<div class="code-sample">
	<div class="tab-output row">
		<h3>Turmas disponíveis</h3>
		<g:if test="${!listAvailableTeams}">
			<div class="alert alert-danger ukb-error" style="display: block;">
				Não existem questões disponíveis
			</div>
		</g:if>
		<g:if test="${listAvailableTeams}">
			<table class="table table-hover table-responsive">
					<tr>
						<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
							<span class="key">Nome</span></th>
						<th style="text-align: center;"><span class="val">Criador da turma</span></th>
						<th></th>
					</tr>
					<g:each var="team" in="${listAvailableTeams}">
						<tr>
							<td><span class="key">
									${team.name}
							</span></td>
							<td style="text-align: center;"><span class="val">
									${team.user.name}
							</span></td>
							<td style="text-align: center;">
								<button class="btn btn-primary" type="button" onclick="allocateTeam(${team.id}, ${quiz.id})">Add</button>
							</td>
						</tr>
					</g:each>
				</table>
		</g:if>
	</div>
</div>