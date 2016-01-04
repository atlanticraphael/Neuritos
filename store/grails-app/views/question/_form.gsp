<div class="form-group">
	<label><g:message code="question.header.label"/></label>
	<div class="input-group">
		<div class="input-group-addon">
			<i class="icon fa fa-file-text"></i>
		</div>
		<textarea rows="3" class="form-control" name="header" required="required">${questionInstance?.header}</textarea>
	</div>
</div>
<div class="form-group">
	<label><g:message code="question.optionsQuantity.label"/></label>
	<div class="input-group">
		<div class="input-group-addon">
			<i class="icon fa fa-user"></i>
		</div>
		<input type="number" class="form-control" id="optionsQuantity" name="optionsQuantity" value="${questionInstance?.optionsQuantity }" min="1" max="5" required="required">
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