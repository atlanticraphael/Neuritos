<div class="code-sample">
	<div class="tab-output row">
		<h3><g:message code="team.list.teamUser.label"/></h3>
		<g:if test="${!team?.teamUser}">
			<div class="alert alert-danger ukb-error" style="display: block;">
				<g:message code="team.list.teamUser.empty.message"/>
			</div>
		</g:if>
		<ul class="vlinks vlinks-iconed vlinks-tabled vlinks-ruled vlinks-ruled-dots" style="width: 95%;">
			<g:each var="teamUser" in="${team?.teamUser}" >
				<li>
					<span class="key">
						<i class="icon fa fa-user"></i>
						<a class="title">${teamUser?.user?.name}</a>
						<span class="meta">${teamUser?.user?.username}</span>
					</span>
			      	<span class="val">
						<button class="btn btn-secondary option-icon-button" type="button" onclick="deleteUserFromTeam(${teamUser?.id}, ${teamUser?.team.id})" title="${message(code: 'default.tooltip.delete.label')}"><i class="icon-center fa fa-trash"></i></button>
					</span>
				</li>
			</g:each>
	    </ul>
	</div>
</div>
<!-- Container -->
<div class="code-sample">
	<div class="tab-output row">
		<h3><g:message code="team.list.availableUsers.label"/></h3>
		<g:if test="${listAvailableUser}">
			<table class="table table-hover table-responsive">
				<thead>
					<tr>
						<td class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
							<span class="key"><g:message code="user.name.label"/></span>
						</td>
						<td><span class="val"><g:message code="user.email.label"/></span></td>
						<td><span class="val"><g:message code="user.document.label"/></span></td>
						<td><span class="val"><g:message code="user.phone.label"/></span></td>
						<td></td>
					</tr>
				</thead>
				<g:each var="user" in="${listAvailableUser}">
					<tr>
						<td><span class="key">${user?.name}</span></td>
						<td><span class="val">${user?.username}</span></td>
						<td><span class="val">${user?.cpf}</span></td>
						<td><span class="val">${user?.phoneNumber}</span></td>
						<td>
							<button class="btn btn-primary" type="button" onclick="allocateUser(${user?.id}, ${team?.id})"><i class="fa fa-cog"></i>&nbsp;<g:message code="default.button.add.label"/></button>
						</td>
					</tr>
				</g:each>
			</table>
		</g:if>
		<g:else>
			<div class="alert alert-danger ukb-error" style="display: block;">
				<g:message code="team.list.availableUsers.empty.message"/>
			</div>
		</g:else>
	</div>
</div>
