<g:form controller="team" action="searchUser" role="form">
	<div class="row">
		<div class="col-md-2">
			<h6>Nome</h6>
		</div>
		<div class="col-md-2">
			<h6>Email</h6>
		</div>
		<div class="col-md-2">
			<h6>Documento</h6>
		</div>
		<div class="col-md-2">
			<h6>Telefone</h6>
		</div>
	</div>
	<div class="row">
		<div class="col-md-2">
			<div class="form-group">
				<input type="text" class="form-control" name="name">
				<input type="hidden" name="idTeam" value="${team.id}">
			</div>
		</div>

		<div class="col-md-2">
			<div class="form-group">
				<input type="text" class="form-control" name="username">
			</div>
		</div>

		<div class="col-md-2">
			<div class="form-group slider-group">
				<input type="text" class="form-control" name="cpf">
			</div>
		</div>
		
		<div class="col-md-2">
			<div class="form-group slider-group">
				<input type="text" class="form-control" name="phoneNumber">
			</div>
		</div>
		
		<div class="col-md-2">
		    <button class="btn btn-primary center-block form-control"> Buscar usuário</button>
		</div>
	</div>
</g:form>