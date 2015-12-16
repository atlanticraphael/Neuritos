
<!DOCTYPE html>
<html>
	<head>
		<title><g:if env="development">Grails Runtime Exception</g:if><g:else>Error</g:else></title>
		<meta name="layout" content="main">
		<g:if env="development"><asset:stylesheet src="errors.css"/></g:if>
	</head>
	<body>
		<g:if env="development">
			<g:renderException exception="${exception}" />
		</g:if>
		<g:else>
			<ul class="errors">
				<div style="display:block; clear:both;">
					<div class="jumbotron" style="color: #333; background-color: #fff; width: 90%; margin: 0 auto; margin-top: 90px; border-radius: 5px;">
						<section id="container">
							<section id="main-content" style="margin-left:0px;">
								<section class="wrapper" style="padding: 0px;">
									<span style="float: left;">
										<img src="http://s3-sa-east-1.amazonaws.com/${Params?.bucketName}/assets/img/corporate/logo-login.png">
										<br/>
										<br/>
										Funcionalidade indispon&iacute;vel no momento!
										<br/>
										Tente novamente mais tarde, e se persistir o problema, entre em contato com suporte.
										<br/>
										Obrigado!
										<br/>
									</span>
									<asset:image src="avatar-error.jpg" />
								</section>
							</section>
						</section>
					</div>
				</div>
			</ul>
		</g:else>
	</body>
</html>