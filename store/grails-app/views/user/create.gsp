<html>

<head>
<title><g:message code='spring.security.ui.login.title'/></title>
<asset:stylesheet href="uikit/bootstrap/bootstrap.min.css" rel="stylesheet" />
<!-- Custom styles for this template
================================================== -->
<asset:stylesheet href="uikit/uikit.css" rel="stylesheet" />
</head>
<body class="default-bg">
    <!-- Empty Block (use .abs-filler to fill page)
    ================================================== -->
    <div class="empty-block abs-filler">
      <!-- Vcenter -->
      <div class="vcenter">
        <div class="vcenter-this">
          <!-- Container -->
          <div class="container">
            <!-- Form Panel -->
            <div class="form-panel width-40pc width-100pc-xs hcenter">
              <header><g:message code="login.signUp.label"/></header>
              <fieldset>
              <g:form url="[resource:userInstance, action:'save']"  role="form">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-user"></i></div>
                    <input type="text" class="form-control" placeholder="${message(code: 'domain.user.fullNames.label')}" name="name">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-user"></i></div>
                    <input type="email" class="form-control" placeholder="${message(code: 'domain.user.emailAddress.label')}" name="username">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                    <input type="password" class="form-control" placeholder="${message(code: 'domain.user.password.label')}" name="password">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                    <input type="password" class="form-control" placeholder="${message(code: 'domain.user.ConfirmPassword.label')}">
                  </div>
                </div>
                <div class="form-group">
                  <label class="checkbox-inline"><input type="checkbox" required="" value=""><g:message code="domain.user.agree.label"/>&nbsp;<a class="href"><g:message code="domain.user.term.title.label"/></a> <g:message code="domain.user.termofUse.label"/></label>
                </div>
                <button class="btn btn-primary btn-lg btn-block"><g:message code="login.createAccount.label"/></button>
              </g:form>
              </fieldset>
            </div>
            <!-- /Form Panel -->
            <div class="align-center"><g:message code="login.alreadyAccount.label"/> <a href="${createLink(uri: '/auth')}"><g:message code="login.signIn.label"/></a></div>
          </div>
          <!-- /Container -->
        </div>
        <!-- /Vcenter this -->
      </div>
      <!-- /Vcenter -->
    </div>
    <!-- /Empty Block
    ================================================== -->
<script>
$(document).ready(function() {
	$('#username').focus();
});

</script>

</body>
</html>
