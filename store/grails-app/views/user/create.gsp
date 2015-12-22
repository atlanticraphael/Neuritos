<html>
	<head>
		<title><g:message code='spring.security.ui.login.title'/></title>
		<asset:stylesheet href="uikit/bootstrap/bootstrap.min.css" rel="stylesheet" />
		<asset:stylesheet href="uikit/uikit.css" rel="stylesheet" />
	</head>
	<body class="default-bg">
    	<div class="empty-block abs-filler">
      		<div class="vcenter">
        		<div class="vcenter-this">
          			<div class="container">
            			<div class="form-panel width-40pc width-100pc-xs hcenter">
              				<header><g:message code="login.signUp.label"/></header>
              				<fieldset>
					        	<g:form url="[resource:userInstance, action:'save']"  role="form">
					            	<div class="form-group">
					                	<div class="input-group">
					                    	<div class="input-group-addon"><i class="fa fa-user"></i></div>
					                    	<input type="text" class="form-control" placeholder="${message(code: 'user.fullName.label')}" name="name">
					                  	</div>
					                </div>
					                <div class="form-group">
					                	<div class="input-group">
					                   		<div class="input-group-addon"><i class="fa fa-user"></i></div>
					                   		<input type="email" class="form-control" placeholder="${message(code: 'user.email.label')}" name="username">
					                	</div>
					                </div>
					                <div class="form-group">
					                	<div class="input-group">
					                		<div class="input-group-addon"><i class="fa fa-lock"></i></div>
					                    	<input type="password" class="form-control" placeholder="${message(code: 'user.password.label')}" name="password">
					                  	</div>
					                </div>
					                <div class="form-group">
					                	<div class="input-group">
					                    	<div class="input-group-addon"><i class="fa fa-lock"></i></div>
					                    	<input type="password" class="form-control" placeholder="${message(code: 'user.confirmPassword.label')}">
					                  	</div>
					               	</div>
		                			<div class="form-group">
	                  					<label class="checkbox-inline"><input type="checkbox" required="" value=""><g:message code="user.agree.label"/>&nbsp;<a class="href"><g:message code="user.termOfUse.begin.label"/></a>&nbsp;<g:message code="user.termOfUse.end.label"/></label>
	                				</div>
	                				<button class="btn btn-primary btn-lg btn-block"><g:message code="login.createAccount.label"/></button>
	              				</g:form>
              				</fieldset>
            			</div>
            			<div class="align-center">
            				<g:message code="login.alreadyAccount.label"/>&nbsp;<a href="${createLink(uri: '/auth')}"><g:message code="login.signIn.label"/></a>
            			</div>
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
