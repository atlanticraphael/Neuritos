<g:form controller="team" action="searchUser" role="form">
	<div class="row">
		<div class="col-md-2">
			<h6><g:message code="user.name.label"/></h6>
		</div>
		<div class="col-md-2">
			<h6><g:message code="user.email.label"/></h6>
		</div>
		<div class="col-md-2">
			<h6><g:message code="user.document.label"/></h6>
		</div>
		<div class="col-md-2">
			<h6><g:message code="user.phone.label"/></h6>
		</div>
	</div>
	<div class="row">
		<div class="col-md-2">
			<div class="form-group">
				<input type="text" class="form-control" name="name">
				<input type="hidden" name="idTeam" value="${team?.id}">
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
		    <button class="btn btn-primary center-block form-control"><i class="fa fa-search"></i>&nbsp;<g:message code="default.button.searchUser.label"/></button>
		</div>
	</div>
</g:form>