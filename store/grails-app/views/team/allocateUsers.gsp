<!DOCTYPE html>
<html lang="en" class="style-1">
 	<head>
	  	<meta name="layout" content="main">
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta name="description" content="">
	    <meta name="author" content="">
	    <title><g:message code="default.welcome.label"/></title>
 	</head>
    <body class="page-bg preload">
    	<div class="page-wrapper">
      		<div class="intro-block intro-page">
        		<div class="container cont-main">
          			<div class="section-title invert-colors no-margin-b">
            			<h2><g:message code="team.title.label"/></h2>
            			<p><g:message code="team.guidance.user.message"/></p>
          			</div>
        		</div>
      		</div>
			<section class="content-block default-bg">
		        <div class="container cont-main">
		       		<div class="demo-title case-c">
						<h2><g:message code="quiz.name.label"/>:&nbsp;${team?.name}</h2>
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
	</body>
</html>
