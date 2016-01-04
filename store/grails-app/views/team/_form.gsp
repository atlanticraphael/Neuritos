<div class="form-group">
	<label for="name"><g:message code="team.name.label"/></label>
	<div class="input-group">
		<div class="input-group-addon">
			<i class="icon fa fa-user"></i>
		</div>
		<g:textField class="form-control" name="name" value="${teamInstance?.name}" 
			placeholder="${message(code: 'team.placeholder.name.label')}" required=""/>
	</div>
</div>
<hr />