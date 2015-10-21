<div class="code-sample">
	<div class="tab-output row">
		<h3>Usuários da turma</h3>
		<g:if test="${!team.teamUser}">
			<div class="alert alert-danger ukb-error" style="display: block;">
				Não existem usuários nessa turma ainda:
			</div>
		</g:if>
			<ul class="vlinks vlinks-iconed vlinks-tabled vlinks-ruled vlinks-ruled-dots" style="width: 95%;">
				<g:each var="teamUser" in="${team.teamUser}" >
					<li>
						<span class="key">
							<i class="icon fa fa-user"></i>
							<a class="title">${teamUser.user.name}</a>
							<span class="meta">${teamUser.user.username}</span>
						</span>
				      	<span class="val">
							<button class="btn btn-secondary option-icon-button" type="button" onclick="deleteUserFromTeam(${teamUser.id}, ${teamUser.team.id})"><i class="icon-center fa fa-trash"></i></button>
						</span>
					</li>
				</g:each>
		    </ul>
	</div>
</div>
<!-- Container -->
<div class="code-sample">
	<div class="tab-output row">
		<h3>Usuários disponíveis</h3>
		<g:if test="${!listAvailableUser}">
			<div class="alert alert-danger ukb-error" style="display: block;">
				Não existem usuários disponíveis
			</div>
		</g:if>
		<g:if test="${listAvailableUser}">
			<table class="table table-hover table-responsive">
				<thead>
					<tr>
						<td class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
							<span class="key">Nome</span>
						</td>
						<td><span class="val">Email</span></td>
						<td><span class="val">Documento</span></td>
						<td><span class="val">Telefone</span></td>
						<td></td>
					</tr>
				</thead>
				<g:each var="user" in="${listAvailableUser}">
					<tr>
						<td><span class="key">
								${user.name}
						</span></td>
						<td><span class="val">
								${user.username}
						</span></td>
						<td><span class="val">
								${user.cpf}
						</span></td>
						<td><span class="val">
								${user.phoneNumber}
						</span></td>
						<td>
							<button class="btn btn-primary" type="button" onclick="allocateUser(${user.id}, ${team.id})">add</button>
						</td>
					</tr>
				</g:each>
			</table>
		</g:if>
	</div>
</div>
