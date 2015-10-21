<!DOCTYPE html>
<html lang="en" class="style-1">
  <head>
  	<meta name="layout" content="main">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Neuritos</title>
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
            <p>Atribuição de turma.</p>
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
	        	<div class="row grid-2">
		       		<div class="col-md-8">
					        <div class="demo-title case-c">
								<h2>Nome:${quiz?.name}</h2>
						</div>
					</div>
					<div class="col-md-4">
						<g:link action="create">
			                <button class="btn btn-w-m btn-primary pull-right">Finalizar</button>
						</g:link>
					</div>
				</div>
				<div id="quizTeamDiv">
					<g:render template="gridTeam" model="model" />
				</div>
			</div>
		</section>
	</div>
	<asset:javascript src="quiz/quiz.js" charset="utf-8"/>
    <!-- /Page Wrapper
    ++++++++++++++++++++++++++++++++++++++++++++++ -->
</body>
</html>
