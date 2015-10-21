<!DOCTYPE html>
<html lang="en" class="style-1">
  <head>
  	<meta name="layout" content="main">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Neuritos</title>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="uikit/js/html5shiv.js"></script>
    <script src="uikit/js/respond.min.js"></script>
    <![endif]-->
  </head>

  <body class="page-bg preload">

	<div class="page-wrapper nav-fixed">
		<div class="page-wrapper">
			<div class="intro-block intro-page">
				<div class="container cont-main">
					<div class="section-title invert-colors no-margin-b">
						<h2>Quiz</h2>
						<p>Crie sua quiz e distribua para sua turma.</p>
					</div>
				</div>
			</div>
			<section class="content-block default-bg">

				<!-- Container -->
				<div class="container cont-main">
					<div class="demo-title case-c">
						<h2>Nova quiz</h2>
					</div>
					<div class="code-sample">
						<g:form controller="quiz" action="save" role="form">
							<div class="form-group">
								<label>Nome</label>
								<div class="input-group">
									<div class="input-group-addon">
										<i class="icon fa fa-user"></i>
									</div>
									<input type="text" class="form-control" name="name"
										placeholder="nome da quiz">
								</div>
							</div>
							<div class="form-group">
								<button class="btn btn-primary pull-right">Criar Quiz</button>
							</div>
						</g:form>
					</div>
				</div>
				<!-- Container -->
				<div class="container">
					<g:if test="${!listQuiz}">
						<div class="alert alert-danger ukb-warning" style="display: block;">
							Não existe nenhuma quiz cadastrada
						</div>
					</g:if>
				
					<g:if test="${listQuiz}">
						<div class="demo-title case-c">
							<h2>Quizzes</h2>
						</div>
						<table class="table table-hover table-responsive">
							<tr>
								<th class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
									<span class="key">Nome</span>
								</th>
								<th style="text-align: center;"><span class="val">Questões</span></th>
								<th style="text-align: center;"><span class="val">Turmas</span></th>
								<th></th>
							</tr>
							<g:each var="quiz" in="${listQuiz}">
								<tr>
									<td><span class="key">
											${quiz.name}
									</span></td>
									<td style="text-align: center;">
										<span class="val">
											${quiz.listQuestionQuiz.size()}
										</span>
									</td>
									<td style="text-align: center;">
										<span class="val">
											${quiz.listTeamQuiz.size()}
										</span>
									</td>
									<td style="text-align: center;">
										<g:link action="allocateQuestions" params="[id:quiz.id]">
											<button class="btn btn-primary" type="submit">Alterar quiz</button>
										</g:link>
										<g:link action="delete" params="[id:quiz.id]">
											<button class="btn btn-secondary" type="button"><i class="icon-center fa fa-trash"></i></button>
										</g:link>
									</td>
								</tr>
							</g:each>
						</table>
					</g:if>
				</div>
			</section>
		</div>
	</div>
	<asset:javascript src="quiz/quiz.js" charset="utf-8"/>
</body>
</html>
