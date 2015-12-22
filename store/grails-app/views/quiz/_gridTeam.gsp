<div class="code-sample">
	<div class="tab-output row">
		<h3><g:message code="quiz.list.teamQuiz.label"/></h3>
		<g:if test="${!quiz?.listTeamQuiz}">
			<div class="alert alert-danger ukb-error" style="display: block;">
				<g:message code="quiz.list.teamQuiz.empty.message"/>
			</div>
		</g:if>
		<ul class="vlinks vlinks-iconed vlinks-tabled vlinks-ruled vlinks-ruled-dots" style="width: 95%;">
			<g:each var="teamQuiz" in="${quiz?.listTeamQuiz}" >
				<li>
					<span class="key">
						<i class="icon fa fa-user"></i>
						<a class="title">${teamQuiz?.team?.name}</a>
					</span>
			      	<span class="val">
						<button class="btn btn-secondary option-icon-button" type="button" onclick="deleteTeamFromQuiz(${teamQuiz?.id}, ${quiz?.id})" title="${message(code: 'default.tooltip.delete.label')}"><i class="icon-center fa fa-trash"></i></button>
					</span>
				</li>
			</g:each>
	    </ul>
	</div>
</div>
<div class="code-sample">
	<div class="tab-output row">
		<h3><g:message code="quiz.list.availableTeams.label"/></h3>
		<g:if test="${listAvailableTeams}">
			<table class="table table-hover table-responsive">
				<tr>
					<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
						<span class="key"><g:message code="team.name.label"/></span></th>
					<th style="text-align: center;"><span class="val"><g:message code="team.user.label"/></span></th>
					<th></th>
				</tr>
				<g:each var="team" in="${listAvailableTeams}">
					<tr>
						<td><span class="key">
								${team?.name}
						</span></td>
						<td style="text-align: center;"><span class="val">
								${team?.user?.name}
						</span></td>
						<td style="text-align: center;">
							<button class="btn btn-primary" type="button" onclick="allocateTeam(${team?.id}, ${quiz?.id})"><i class="fa fa-cog"></i>&nbsp;<g:message code="default.button.add.label"/></button>
						</td>
					</tr>
				</g:each>
			</table>
		</g:if>
		<g:else>
			<div class="alert alert-danger ukb-error" style="display: block;">
				<g:message code="quiz.list.availableTeams.empty.message"/>
			</div>
		</g:else>
	</div>
</div>