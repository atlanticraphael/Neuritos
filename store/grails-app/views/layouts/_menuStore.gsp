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
				<%-- <g:render template="/layouts/menu/menuSearch" /> --%> 
				<!-- /Menu Search -->
				

				<!-- Shopping Cart  -->
				<%-- <g:render template="/layouts/menu/menuCart" /> --%> 
				<!-- /Shopping Cart -->

			</div>
			
			<g:render template="/layouts/header" />
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
				<%-- 
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
				--%>
				<sec:ifAnyGranted roles="ROLE_ADMIN, ROLE_ACCOUNT_MANAGER">
					<li class="no-line">
						<a href="${createLink(uri: '/contentConverter/createConverter')}"><g:message code="menu.converter.label"/></a>
					</li>
					<%--
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Quiz<i class="fa fa-angle-down toggler"></i></a>
						<ul class="dropdown-menu">
							<li><a href="${createLink(uri: '/quiz')}"><g:message code="menu.createQuiz.label"/></a></li>
							<li><a href="${createLink(uri: '/team/create')}"><g:message code="menu.createTeam.label"/></a></li>
							<li><a href="${createLink(uri: '/user/createUserStore')}"><g:message code="menu.createUser.label"/></a></li>
							<li><a href="${createLink(uri: '/question/create')}"><g:message code="menu.createQuestion.label"/></a></li>
							<li><a href="${createLink(uri: '/quiz/apply')}"><g:message code="menu.applyQuiz.label"/></a></li>
							<li><a href="${createLink(uri: '/quiz/manage')}"><g:message code="menu.manageQuiz.label"/></a></li>
						</ul>
					</li>
					--%>
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