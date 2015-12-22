<html>
	<head>
		<title><g:message code='spring.security.ui.login.title'/></title>
		<asset:stylesheet href="uikit/bootstrap/bootstrap.min.css" rel="stylesheet" />
		<asset:stylesheet href="uikit/uikit.css" rel="stylesheet" />
	</head>
	<body class="bcolor-bg">
	    <div class="empty-block abs-filler">
    		<div class="vcenter">
        		<div class="vcenter-this">
          			<div class="container">
            			<div class="form-panel width-33pc width-100pc-xs hcenter">
              				<header><g:message code="login.acess.label"/></header>
              				<fieldset>
								<form action='${postUrl}' method='POST' id="loginForm" name="loginForm" autocomplete='off'>
					                <div class="form-group">
					                	<div class="input-group">
					                    	<div class="input-group-addon"><i class="fa fa-user"></i></div>
					                    	<input type="email" id="username" class="form-control" placeholder="Enter email" name="j_username">
					                  	</div>
					                </div>
					                <div class="form-group">
					                	<div class="input-group">
					                    	<div class="input-group-addon"><i class="fa fa-lock"></i></div>
					                    	<input type="password" id="password" class="form-control" placeholder="Enter email" name="j_password">
					                  	</div>
					                </div>
					                <div class="form-group">
					                  <label class="checkbox-inline"><input id="remember_me" type="checkbox" name="${rememberMeParameter}" value=""><g:message code="login.rememberMe.label"/></label>
					                  <a class="pull-right"><g:message code="login.forgotPassword.label"/></a>
					                </div>
									<button class="btn btn-primary btn-lg btn-block" ><g:message code="login.signIn.label"/></button>
					            </form>
              				</fieldset>
            			</div>
            			<div class="align-center orange"><g:message code="login.needAnAccount.label"/>&nbsp;<a href="${createLink(uri: '/user/create')}"><g:message code="login.signUp.label"/></a></div>
          			</div>
        		</div>
      		</div>
    	</div>
		<script>
			$(document).ready(function() {
				$('#username').focus();
			});
		</script>
	</body>
</html>
