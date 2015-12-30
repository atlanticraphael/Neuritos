<!DOCTYPE html>
<html lang="en" class="style-1">
	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <g:set var="entityName" value="${message(code: 'quiz.title.label')}" />
    	<title><g:message code="default.welcome.label"/></title>
  	</head>
	<body class="page-bg preload">
    	<div class="page-wrapper">
      		<div class="intro-block intro-page">
        		<div class="container cont-main">
          			<div class="section-title invert-colors no-margin-b">
            			<h2><g:message code="quiz.title.label"/></h2>
						<p><g:message code="quiz.guidance.edit.message"/></p>
          			</div>
		        </div>
			</div>
			<section class="content-block default-bg">
		    	<div class="container cont-main">
					<div class="code-sample">
						<div class="tab-output row">
							<h3><g:message code="default.edit.domain.label" args="[entityName]"/></h3>
							<g:form url="[resource:quizInstance, action:'update']"  role="form">
								<div class="form-group">
									<label for="name"><g:message code="quiz.name.label"/></label>
									<div class="input-group">
										<div class="input-group-addon">
											<i class="icon fa fa-user"></i>
										</div>
										<g:textField class="form-control" name="name" value="${quizInstance?.name}" 
											placeholder="${message(code: 'quiz.placeholder.name.label')}" required=""/>
									</div>
								</div>
								<hr />
								<div class="form-group">
									<div class="input-group w-100pc">
										<button class="btn btn-primary pull-right" type="submit" ><g:message code="default.button.create.label"/></button>
									</div>
								</div>
						    </g:form>
						</div>
					</div>
				</div>
			</section>
		</div>
	</body>
</html>