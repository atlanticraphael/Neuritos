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
					<h2>Nome:${team?.name}</h2>
				</div>
				<div class="code-sample">
					<g:render template="formSearch" />
				</div>
				
				<div id="teamUserDiv">
					 <g:render template="grid" model="model" />
				</div>
			</div>
		</section>
	</div>
	<asset:javascript src="team/team.js" charset="utf-8"/>
    <!-- /Page Wrapper
    ++++++++++++++++++++++++++++++++++++++++++++++ -->
</body>
</html>
