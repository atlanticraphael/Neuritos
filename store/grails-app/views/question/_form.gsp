<div class="form-group">
	<label for="header"><g:message code="question.header.label"/></label>
	<div class="input-group">
		<div class="input-group-addon">
			<i class="icon fa fa-file-text"></i>
		</div>
		<g:textArea class="form-control" name="header" cols="40" rows="5" maxlength="100000" value="${questionInstance?.header}" required=""/>		
	</div>
</div>
<div class="form-group">
	<label for="optionsQuantity"><g:message code="question.optionsQuantity.label"/></label>
	<div class="input-group">
		<div class="input-group-addon">
			<i class="icon fa fa-user"></i>
		</div>
		<g:field name="optionsQuantity" type="number" value="${questionInstance?.optionsQuantity}" min="1" max="5" required="" class="form-control"/>
		<input type="hidden" name="answerText" id="answer" />
		<input type="hidden" name="questionId" id="questionId" value="${questionInstance?.id }"/>
	</div>
</div>
<div class="form-group">
	<div class="input-group">
		<button class="btn btn-primary" type="button" onclick="addAlternatives(this.form.optionsQuantity);"><i class="fa fa-cog"></i>&nbsp;<g:message code="default.button.addAlternatives.label"/></button>
	</div>
</div>
<div id="divAlternatives"></div>

<hr />