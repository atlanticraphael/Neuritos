<g:form controller="question" action="save" role="form">
	<div class="tab-output">
		<div class="form-group">
			<h4 class="no-margin">Cadastro de Questão</h4>
		</div>
		<div class="form-group">
			<label>Enunciado</label>
			<div class="input-group">
				<div class="input-group-addon">
					<i class="icon fa fa-file-text"></i>
				</div>
				<textarea rows="3" class="form-control" name="header">${question?.header}</textarea>
			</div>
		</div>
		<div class="form-group">
			<label>Quantidade alternativas</label>
			<div class="input-group">
				<div class="input-group-addon">
					<i class="icon fa fa-user"></i>
				</div>
				<input type="text" class="form-control" placeholder="quantidade alternativas" id="optionsQuantity" name="optionsQuantity" value="${question?.optionsQuantity }">
				<input type="hidden" name="answerText" id="answer" />
				<input type="hidden" name="questionId" id="questionId" value="${question?.id }"/>
			</div>
		</div>
		<div class="form-group">
			<div class="input-group">
				<button class="btn btn-primary" type="button" onclick="addAlternatives(this.form.optionsQuantity);">Adicionar Alternativas</button>
			</div>
		</div>
		<div id="divAlternatives"></div>
		
		<hr />
		<div class="form-group">
			<div class="input-group w-100pc">
				<button class="btn btn-primary" type="submit">Salvar Questão</button>
			</div>
		</div>
	</div>
</g:form>