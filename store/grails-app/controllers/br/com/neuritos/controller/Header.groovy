package br.com.neuritos.controller

import org.springframework.web.servlet.LocaleResolver
import org.springframework.web.servlet.support.RequestContextUtils

class HeaderController {

	transient springSecurityService
	
	def changeSystemLanguage(){
		LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
		localeResolver.setLocale(request, response, new Locale(params.language));
		
		session["language"] = params.language
		
		redirect uri:'/'
	}
	
	def homePage(){
		render  view:'/index'
		println
	}
}
