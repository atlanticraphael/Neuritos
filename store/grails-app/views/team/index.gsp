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
            <p>Crie sua quiz e distribua para sua turma.ppp</p>
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
					<h2>Nova turma</h2>
				</div>
				<div class="code-sample">
					<g:form controller="quiz" action="save" role="form">
						<div class="form-group">
							<label>Nome</label>
							<div class="input-group">
								<div class="input-group-addon">
									<i class="icon fa fa-user"></i>
								</div>
								<input type="text" class="form-control" name="name" placeholder="nome da quiz">
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
        		<div class="demo-title case-c">
					<h2>Turmas</h2>
				</div>
				<hr />
        	
			    <table class="table table-bordered table-hover table-responsive">
					<tr>
						<td class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
							<span class="key">Nome</span>
						</td>
						<td>
							<span class="val">Usuário</span>
						</td>
						<td>
							<span class="val">CPF</span>
						</td>
							<td></td>
					</tr>
					<g:each var="quiz" in="${listTeam}">
						<tr>
							<td>
								<span class="key">${team.name}</span>
							</td>
							<td>
								<span class="val">${team.listUser.size()}</span>
							</td>
							<td>
								<button class="btn btn-primary btn-sm" type="submit">Edit</button>
								<button class="btn btn-primary btn-sm" type="submit">remove</button>
							</td>
						</tr>
					</g:each>
			    </table>
			</div>
		</section>
	</div>
	<asset:javascript src="quiz/quiz.js" charset="utf-8"/>
    <!-- /Page Wrapper
    ++++++++++++++++++++++++++++++++++++++++++++++ -->
</body>
</html>
