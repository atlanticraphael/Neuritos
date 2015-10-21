package br.com.neuritos.controller

import grails.converters.JSON

import org.springframework.web.servlet.LocaleResolver
import org.springframework.web.servlet.support.RequestContextUtils

class LanguageController {
	
//	transient springSecurityService
	
	def changeSystemLanguage(){
		LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
		localeResolver.setLocale(request, response, new Locale(params.idioma));
		
		session["language"] = params.language
		redirect controller: 'contentConverter', action: 'createConverter'
	}
	
}