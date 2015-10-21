<g:form controller="quiz" action="saveQuestion" role="form">
	<g:hiddenField name="quizId" value="${quiz?.id}"/>
	<div class="tab-output">
		<div class="form-group">
			<h4 class="no-margin">Questões</h4>
		</div>
		<div class="form-group">
			<label>Enunciado</label>
			<div class="input-group">
				<div class="input-group-addon">
					<i class="icon fa fa-file-text"></i>
				</div>
				<textarea rows="3" class="form-control" name="header"></textarea>
			</div>
		</div>
		<div class="form-group">
			<label>Quantidade alternativas</label>
			<div class="input-group">
				<div class="input-group-addon">
					<i class="icon fa fa-user"></i>
				</div>
				<input type="text" class="form-control" placeholder="quantidade alternativas" id="optionsQuantity" name="optionsQuantity">
				<input type="hidden" name="answerText" id="answer" />
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
				<button class="btn btn-primary pull-right" type="button" onclick="index();">Finalizar</button>
			</div>
		</div>
	</div>
</g:form>