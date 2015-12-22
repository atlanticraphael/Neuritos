<!-- Btn Wrapper -->
<div class="btn-wrapper navbar-el dropdown  navbar-left">

		<sec:ifLoggedIn>
			${session['username']}, <g:link class="logout" controller="logout">
				<span class="nav-label"><g:message code="menu.logout.label" /></span>
			</g:link>
		</sec:ifLoggedIn>
		
		<sec:ifNotLoggedIn>
			<a class="btn btn-primary navbar-btn no-margin-y" href="${createLink(uri: '/login/auth')}"><i
			class="icon ti ti-user visible-sm visible-xs"></i><span
			class="hidden-xs hidden-sm" ><g:message code="login.signIn.label"/></span></a>
		</sec:ifNotLoggedIn>
	
</div>
<!-- /Btn Wrapper -->