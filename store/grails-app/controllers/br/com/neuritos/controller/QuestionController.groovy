package br.com.neuritos.controller

import grails.converters.JSON
import grails.transaction.Transactional
import br.com.neuritos.converter.domain.Choice
import br.com.neuritos.converter.domain.Question
import br.com.neuritos.converter.domain.User

class QuestionController {

	def springSecurityService
	
	def create() {
		List<Question> listQuestion = Question.findAll()
		render view:'create', model:[listQuestion:listQuestion]
	}
	
	@Transactional
	def save(Question questionInstance) {
		if (questionInstance == null) {
			notFound()
			return
		}

		if (questionInstance.hasErrors()) {
			respond questionInstance.errors, view:'createQuestion'
			return
		}
		
		questionInstance.save flush:true
		
		String []choices = params.text
		int answerNumber = Integer.parseInt(params.answerText)
		
		List<Choice> listOptions = new ArrayList<Choice>()
		Long order = 1
		for (int i = 0; i < questionInstance.optionsQuantity; i++) {
			Choice choice = new Choice()
			choice.text = choices[i]
			choice.optionOrder = order
			choice.question = questionInstance
			
			if (i == answerNumber)
				choice.answer = true
				
			choice.save flush:true	
			order++
		}
		
		redirect action:'create'
	}
	
	@Transactional
	def searchMember(User userInstance) {
		List<User> listUser = User.findAllBy(userInstance)
		respond listUser 
		
	}
	
	def show(Long id) {
		def question = Question.get(id)
		render view:'create', model:[question:question]
	}
	
	
	def loadAlternatives(Long questionId) {
		def question = Question.get(questionId)
		render question.listOptions as JSON
	}
	
	def delete(Long id) {
		Question question = Question.get(id)
		question.delete flush:true
		
		redirect action:'create'
	}
	
	def edit(Question questionInstance) {
		respond questionInstance
	}

	@Transactional
	def update(Question questionInstance) {
		if (questionInstance == null) {
			notFound()
			return
		}
		
		if (questionInstance.hasErrors()) {
			respond questionInstance.errors, view:'edit'
			return
		}

		questionInstance.save flush:true
		
		/*String []choices = params.text
		int answerNumber = Integer.parseInt(params.answerText)
		
		List<Choice> listOptions = new ArrayList<Choice>()
		Long order = 1
		for (int i = 0; i < questionInstance.optionsQuantity; i++) {
			Choice choice = new Choice()
			choice.text = choices[i]
			choice.optionOrder = order
			choice.question = questionInstance
			
			if (i == answerNumber)
				choice.answer = true
				
			choice.save flush:true
			order++
		}*/
		
		redirect action: 'create'
	}
}
