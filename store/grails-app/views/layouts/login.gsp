<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><g:layoutTitle default="Grails"/></title>
    <script type="text/javascript"> var language = '${session['language']}'; </script>
    <asset:stylesheet href="bootstrap.min.css" rel="stylesheet" />
    <asset:stylesheet href="font-awesome/css/font-awesome.css" rel="stylesheet" />
    <!-- Morris -->
    <asset:stylesheet href="plugins/morris/morris-0.4.3.min.css" rel="stylesheet" />
    <!-- Gritter -->
    <asset:stylesheet href="../js/plugins/gritter/jquery.gritter.css" rel="stylesheet" />
    <asset:stylesheet href="animate.css" rel="stylesheet" />
    <asset:stylesheet href="custom.css" rel="stylesheet" />
    <asset:stylesheet href="plugins/dataTables/dataTables.bootstrap.css" rel="stylesheet" />
    <link rel="shortcut icon" href="${createLinkTo(dir:'images',file:'neuritos.ico')}" type="image/x-icon" />
    <s2ui:resources module='register' />
    <g:layoutHead />
</head>
	<body class="fundoLogin">
    <g:layoutBody />
    <%--Mensagem ao usuário quando for negado a autentificação do sistema --%>
	<s2ui:showFlash/>
    <!-- Mainly scripts -->
    <asset:javascript src="jquery-1.10.2.js" />
    <asset:javascript src="bootstrap.min.js" />
    <asset:javascript src="plugins/summernote/summernote.min.js"/>
    <asset:javascript src="plugins/multiSelect/jquery.multi-select.js"/>
    <asset:javascript src="plugins/multiSelectComboBox/jquery.multiple.select.js"/>
    <asset:javascript src="plugins/metisMenu/jquery.metisMenu.js" />
    <!-- Flot -->
    <asset:javascript src="plugins/flot/jquery.flot.js" />
    <asset:javascript src="plugins/flot/jquery.flot.tooltip.min.js" />
    <asset:javascript src="plugins/flot/jquery.flot.spline.js" />
    <asset:javascript src="plugins/flot/jquery.flot.resize.js" />
    <asset:javascript src="plugins/flot/jquery.flot.pie.js" />
    <asset:javascript src="plugins/flot/jquery.flot.symbol.js" />
    <!-- Peity -->
    <asset:javascript src="plugins/peity/jquery.peity.min.js" />
    <asset:javascript src="demo/peity-demo.js" />
    <!-- Custom and plugin javascript -->
    <asset:javascript src="inspinia.js" />
    <asset:javascript src="plugins/pace/pace.min.js" />
    <!-- jQuery UI -->
    <asset:javascript src="plugins/jquery-ui/jquery-ui.min.js" />
    <asset:javascript src="plugins/datapicker/bootstrap-datepicker.js" />
    <!-- Jvectormap -->
    <asset:javascript src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" />
    <asset:javascript src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js" />
    <!-- EayPIE -->
    <asset:javascript src="plugins/easypiechart/jquery.easypiechart.js" />
    <!-- Sparkline -->
    <asset:javascript src="plugins/sparkline/jquery.sparkline.min.js" />
    <!-- Tree -->
    <asset:javascript src="plugins/tree/MultiNestedList.js" />
    <!-- Steps -->
    <asset:javascript src="plugins/staps/jquery.steps.min.js"/>
    <!-- Tags -->
    <asset:javascript src="plugins/tags/bootstrap-tagsinput.js"/>
    <!-- Sparkline demo data  -->
    <asset:javascript src="demo/sparkline-demo.js" />
    <!-- Validações  -->
    <asset:javascript src="jquery.maskedinput.js" />
    <asset:javascript src="jquery.limittextarea.js" />
    <asset:javascript src="application.js" />
    <!-- Print  -->
    <asset:javascript src="plugins/print/jquery.PrintArea.js_4.js"/>
    <g:javascript src='jquery/jquery.jgrowl.js' plugin='spring-security-ui'/>
	<g:javascript src='spring-security-ui.js' plugin='spring-security-ui'/>
</body>
</html>