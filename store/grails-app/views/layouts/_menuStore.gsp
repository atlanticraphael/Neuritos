<!-- Nav Main -->
<nav class="nav-main navbar hnav hnav-md" role="navigation">

	<!-- Container 
          .......................................... -->
	<div class="container">

		<!-- Header-->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="sr-only">Toggle navigation</span> <i class="ti ti-menu"></i>
			</button>
			<a class="navbar-brand border-r no-border-xs" href="${createLink(uri: '/')}"> 
				<asset:image class="hidden-xs" src="logo.png" alt="" /> <!-- Default Logo --> 
				<asset:image class="visible-xs" src="logo-xs.png" alt="" /> <!-- Mobile Logo -->
			</a>
		</div>
		<!-- /Header-->

		<!-- Nav Buttons -->
		<div class="nav-buttons navbar-right">

			<!-- Login Form  -->
			<g:render template="/layouts/menu/menuLoginForm" /> 
			<!-- /Login Form -->

			<!-- Navbar btn-group -->
			<div class="navbar-btn-group btn-group navbar-left no-margin-l-xs">

				<!-- Menu Search  -->
				<g:render template="/layouts/menu/menuSearch" /> 
				<!-- /Menu Search -->
				

				<!-- Shopping Cart  -->
				<g:render template="/layouts/menu/menuCart" /> 
				<!-- /Shopping Cart -->

			</div>
			<div class="btn-wrapper navbar-el dropdown  navbar-left">
				<ul class="nav navbar-top-links navbar-right">	
					<li class="btn-group">
						<button class="btn btn-default" type="button" data-toggle="dropdown" aria-expanded="false"
							style="border:0px;background-color: #FFF;color: #000;">
							<g:message code="menu.choose.language.label"/>&nbsp;<span class="caret"></span>
						</button>
						<ul class="dropdown-menu" role="menu">
							<li><g:link controller="header" action="changeLanguageOfSystem" params="[language:'pt_br']" style="padding: 3px 5px;">
									<i class="fa fa-check" data-value="pt_br" style="display: none;"></i>&nbsp;
				          			<asset:image src="idiomas/icone_language_pt_br.jpg" width="24px" heigth="24px"/>&nbsp;
				          			<g:message code="menu.choose.language.portuguese.label"/>
				          		</g:link>
				          	</li>
				          	<li>
				          		<g:link controller="header" action="changeLanguageOfSystem"  params="[language:'en']" style="padding: 3px 5px;">
				          			<i class="fa fa-check" data-value="en" style="display: none;"></i>&nbsp;
				          			<asset:image src="idiomas/icone_language_usa.png" width="24px" heigth="24px"/>&nbsp;
				          			<g:message code="menu.choose.language.english.label"/>
				          		</g:link>
				          	</li>
							<li>
								<g:link controller="header" action="changeLanguageOfSystem"  params="[language:'es']" style="padding: 3px 5px;">
									<i class="fa fa-check" data-value="es" style="display: none;"></i>&nbsp;
									<asset:image src="idiomas/icone_language_es.jpg" width="24px" heigth="24px"/>&nbsp;
									<g:message code="menu.choose.language.spanish.label"/>
								</g:link>
							</li>
				        </ul>
					</li>
				</ul>
			</div>		
			<!-- /Navbar right -->
		</div>
		<!-- Nav Buttons -->

		<!-- Navbar Collapse-->
		<div class="collapse navbar-collapse">

			<!-- Navbar Right -->
			<ul class="nav navbar-nav navbar-left line-top">
				<li class="no-line">
					<a href="${createLink(uri: '/')}">
						<i class="ti ti-home"></i>
					</a>
				</li>
				<li class="dropdown mega">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown"><g:message code="menu.pages.label"/><i class="fa fa-angle-down toggler"></i>
					</a> <!-- Mega Menu -->
					<div class="mega-menu dropdown-menu">
						<!-- Row -->
						<div class="row">
							<!-- col -->
							<div class="col-md-3">
								<asset:image class="featured-img hidden-xs hidden-sm"
									src="menu-pic.jpg" alt="" />
							</div>
							<!-- /col -->

							<!-- col -->
							<div class="col-md-4">
								<h5>business</h5>
								<ul class="links">
									<li><a href="${createLink(uri: '/about')}"><g:message code="menu.about.label"/></a></li>
									<li><a href="${createLink(uri: '/services')}"><g:message code="menu.services.label"/></a></li>
									<li><a href="${createLink(uri: '/prices')}"><g:message code="menu.prices.label"/></a></li>
								</ul>
							</div>
							<!-- /col -->
							<!-- col -->
							<div class="col-md-4">
								<h5>outras</h5>
								<ul class="links">
									<li><a href="blog.html">blog</a></li>
									<li><a href="blog-post.html">single post</a></li>
									<li><a href="login.html">login</a></li>
									<li><a href="register.html">register</a></li>
									<li><a href="one-pager.html">One page site</a></li>
								</ul>
							</div>
							<!-- /col -->
						</div>
						<!-- /Row -->
					</div> <!-- /Mega Menu -->
				</li>
				<sec:ifAnyGranted roles="ROLE_ADMIN, ROLE_ACCOUNT_MANAGER">
					<li class="no-line">
						<a href="${createLink(uri: '/contentConverter/createConverter')}">Conversor</a>
					</li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Quiz<i class="fa fa-angle-down toggler"></i></a>
						<ul class="dropdown-menu">
							<li><a href="${createLink(uri: '/quiz')}"><g:message code="menu.createQuiz.label"/></a></li>
							<li><a href="${createLink(uri: '/team/create')}"><g:message code="menu.createTeam.label"/></a></li>
							<li><a href="${createLink(uri: '/user/createUserStore')}"><g:message code="menu.createUser.label"/></a></li>
							<li><a href="${createLink(uri: '/question/create')}"><g:message code="menu.createQuestion.label"/></a></li>
							<li><a href="${createLink(uri: '/quiz/apply')}"><g:message code="menu.applyQuiz.label"/></a></li>
						</ul>
					</li>
					<li class="no-line">
					</li>
				</sec:ifAnyGranted>
			</ul>
			<!-- /Navbar right -->
		</div>
		<!-- /Navbar Collapse -->
	</div>
	<!-- /Container
          .......................................... -->

</nav>
<!-- Nav Main -->