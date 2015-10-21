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
            <h2>Questão</h2>
            <p>Crie questões.</p>
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
				<div class="code-sample">
					<g:render template="form" />
				</div>
			</div>
			<g:if test="${listQuestion}">
				<!-- Container -->
				<div class="container">
					<div class="demo-title case-c">
						<h2>Questões</h2>
					</div>
					<table class="table table-hover table-responsive">
						<tr>
							<td class="border-bottom: 1px solid rgba(47, 50, 68, 0.1);">
								<span class="key">Nome</span>
							</td>
							<th style="text-align: center;"><span class="val">Quantidade de opções</span></th>
							<th style="text-align: center;"><span class="val">Neuritos import</span></th>
							<th style="text-align: center;"><span class="val">Id Neuritos</span></th>
							<th></th>
						</tr>
						<g:each var="question" in="${listQuestion}">
							<tr>
								<td><span class="key">
										${question.header}
								</span></td>
								<td style="text-align: center;"><span class="val">
										${question.optionsQuantity}
								</span></td>
								<td style="text-align: center;"><span class="val">
										${question.neuritosImport}
								</span></td>
								<td style="text-align: center;"><span class="val">
										${question.questionIdNeuritos}
								</span></td>
								<th style="text-align: center;">
									<g:link action="show" params="[id:question.id]">
											<button class="btn btn-primary" type="submit">Alterar questão</button>
									</g:link>
									<g:link action="delete" params="[id:question.id]">
										<button class="btn btn-secondary" type="button"><i class="icon-center fa fa-trash"></i></button>
									</g:link>
								</th>
							</tr>
						</g:each>
					</table>
				</div>
			</g:if>
		</section>
	</div>
	<asset:javascript src="question/question.js" charset="utf-8"/>
    <!-- /Page Wrapper
    ++++++++++++++++++++++++++++++++++++++++++++++ -->
</body>
</html>
