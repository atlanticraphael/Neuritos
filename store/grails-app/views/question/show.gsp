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
  
    <!-- Page Wrapper
    ++++++++++++++++++++++++++++++++++++++++++++ -->
    <div class="page-wrapper">
      
     <!-- Intro Block
      ============================================ -->
      <div class="intro-block intro-page">
      
        <!-- Container -->
        <div class="container cont-main">
          <!-- Section Title -->
          <div class="section-title invert-colors no-margin-b">
            <h2>Quiz</h2>
            <p>Crie sua quiz e distribua para sua turma.</p>
          </div>
          <!-- /Section Title -->
        </div>
        <!-- /Container -->
      
      </div>
      <!-- /Intro Block
      ============================================ -->

      <!-- Content Block
      ============================================ -->
		<section class="content-block default-bg">
	        <!-- Container -->
	        <div class="container cont-main">
				<div class="demo-title case-c">
					<h4>Nome: ${quizInstance?.name}</h4>
					<input type="hidden" name="quizId" value="${quizInstance?.id}" />
				</div>
				<div class="row">
					<div class="col-md-12">
						<h4 class="demo-title">Cadastrar questões</h4>
					</div>
				</div>
	        	<g:form controller="quiz" action="searchMember" role="form">>
					<div class="row">
						<div class="col-md-2">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Nome" name="name">
								<input type="hidden" name="id">
							</div>
						</div>
		
						<div class="col-md-2">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="CPF" name="cpf">
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Email" name="email">
							</div>
						</div>
						<div class="col-md-2">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Telefone" name="phoneNumber">
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<button class="btn btn-primary" type="submit"><i class="icon-left fa fa-search"></i>Search</button>
							</div>
						</div>
					</div>
				</g:form>
				<g:if test="${listUsers}">
					<g:render template="search"></g:render>
				</g:if>	
				<g:if test="${team}">
					<g:render template="quizTeam"></g:render>
				</g:if>
			</div>
		</section>
	</div>
    <asset:javascript src="quiz/quiz.js" charset="utf-8"/>
</body>
</html>
