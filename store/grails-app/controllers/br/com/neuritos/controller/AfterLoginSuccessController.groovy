package br.com.neuritos.controller

import org.springframework.web.servlet.support.RequestContextUtils

import br.com.neuritos.converter.domain.User
import org.springframework.web.servlet.LocaleResolver
import org.springframework.web.servlet.support.RequestContextUtils

class AfterLoginSuccessController {

	def springSecurityService
	
    def onAuthenticationSuccess() { 
		User usuario = springSecurityService.getCurrentUser()
		LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request)
		localeResolver.setLocale(request, response, new Locale(usuario?.applicationLanguage?.toString() ?: 'pt_br'))
		String url = request.getRequestURL()

		session["language"] = usuario?.applicationLanguage
		session["login"] = usuario?.username
		session["username"] = usuario?.name
		session["password"] = usuario?.password

		render view:'/index'
	}
}
