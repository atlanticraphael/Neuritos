<!DOCTYPE html>
<html lang="en" class="style-1">
	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title><g:message code="default.welcome.label"/></title>
  	</head>
	<body class="page-bg preload">
    	<div class="page-wrapper">
      		<div class="intro-block intro-page">
        		<div class="container cont-main">
          			<div class="section-title invert-colors no-margin-b">
            			<h2><g:message code="quiz.title.label"/></h2>
						<p><g:message code="quiz.guidance.question.message"/></p>
          			</div>
		        </div>
			</div>
			<section class="content-block default-bg">
		    	<div class="container cont-main">
		        	<div class="row grid-2">
						<div class="col-md-8">
					    	<div class="demo-title case-c">
								<h2><g:message code="quiz.name.label"/>:&nbsp;${quiz?.name}</h2>
							</div>
						</div>
						<div class="col-md-4">
							<g:link action="allocateTeam" params="[id:quiz.id]">
				                <button class="btn btn-w-m btn-primary pull-right"><i class="fa fa-cog"></i>&nbsp;<g:message code="default.button.assignTeam.label"/></button>
							</g:link>
						</div>
					</div>
					<div id="quizQuestionDiv">
						<g:render template="gridQuestion" model="model" />
					</div>
				</div>
			</section>
		</div>
		<asset:javascript src="quiz/quiz.js" charset="utf-8"/>
	</body>
</html>