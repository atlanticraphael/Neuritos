<div class="btn-wrapper navbar-el dropdown  navbar-left">
	<ul class="nav navbar-top-links navbar-right">	
		<li class="btn-group">
			<button class="btn btn-default" type="button" data-toggle="dropdown" aria-expanded="false"
				style="border:0px;background-color: #FFF;color: #000;">
				<g:message code="menu.choose.language.label"/>&nbsp;<span class="caret"></span>
			</button>
			<ul class="dropdown-menu" role="menu">
				<li><g:link controller="header" action="changeSystemLanguage" params="[language:'pt_br']" style="padding: 3px 5px;">
						<i class="fa fa-check" data-value="pt_br" style="display: none;"></i>&nbsp;
	          			<asset:image src="idiomas/icone_language_pt_br.jpg" width="24px" heigth="24px"/>&nbsp;
	          			<g:message code="menu.choose.language.portuguese.label"/>
	          		</g:link>
	          	</li>
	          	<li>
	          		<g:link controller="header" action="changeSystemLanguage"  params="[language:'en']" style="padding: 3px 5px;">
	          			<i class="fa fa-check" data-value="en" style="display: none;"></i>&nbsp;
	          			<asset:image src="idiomas/icone_language_usa.png" width="24px" heigth="24px"/>&nbsp;
	          			<g:message code="menu.choose.language.english.label"/>
	          		</g:link>
	          	</li>
				<li>
					<g:link controller="header" action="changeSystemLanguage"  params="[language:'es']" style="padding: 3px 5px;">
						<i class="fa fa-check" data-value="es" style="display: none;"></i>&nbsp;
						<asset:image src="idiomas/icone_language_es.jpg" width="24px" heigth="24px"/>&nbsp;
						<g:message code="menu.choose.language.spanish.label"/>
					</g:link>
				</li>
	        </ul>
		</li>
	</ul>
</div>