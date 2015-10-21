package br.com.neuritos.converter

class ContentConverterFactory {

	def static create(klass, props) {
		def instance = klass.newInstance()
		props.each {name, value ->
			instance."$name" = value
		}
		instance
	}
}
