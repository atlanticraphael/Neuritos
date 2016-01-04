<div class="form-group">
	<label for="name"><g:message code="quiz.name.label"/></label>
	<div class="input-group">
		<div class="input-group-addon">
			<i class="icon fa fa-user"></i>
		</div>
		<g:textField class="form-control" name="name" value="${quizInstance?.name}" 
			placeholder="${message(code: 'quiz.placeholder.name.label')}" required=""/>
	</div>
</div>
<hr />