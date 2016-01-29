package br.com.neuritos.controller

import grails.transaction.Transactional
import br.com.neuritos.converter.domain.Choice
import br.com.neuritos.converter.domain.Question
import br.com.neuritos.converter.domain.QuestionQuiz
import br.com.neuritos.converter.domain.Quiz
import br.com.neuritos.converter.domain.Team
import br.com.neuritos.converter.domain.TeamQuiz
import br.com.neuritos.converter.domain.User
import br.com.neuritos.converter.domain.UserQuestion
import br.com.neuritos.converter.domain.UserQuestionOption
import br.com.neuritos.converter.domain.UserQuizHistory

class QuizController {

	def springSecurityService
	def questionService
	def teamService
	
    def index() {
		redirect action:'create'
	}
	
	def create() {
		List<Quiz> listQuiz = Quiz.findAllByAccount(springSecurityService.getCurrentUser().getAccount())
		render view:'create', model:[edit:false, listQuiz:listQuiz, quiz:new Quiz(params)]
	}
	
	@Transactional
	def save(Quiz quizInstance) {
		if (quizInstance == null) {
			notFound()
			return
		}

		if (quizInstance.hasErrors()) {
			respond quizInstance.errors, view:'create'
			return
		}

		quizInstance.save flush:true

		redirect action:'allocateQuestions', id:quizInstance.id as Long
	}
	
	
	def edit(Quiz quizInstance) {
		respond quizInstance
	}

	@Transactional
	def update(Quiz quizInstance) {
		if (quizInstance == null) {
			notFound()
			return
		}
		
		if (quizInstance.hasErrors()) {
			respond quizInstance.errors, view:'edit'
			return
		}

		quizInstance.save flush:true
		
		redirect action: 'create'

	}
	
	def show(Long id) {
		respond Quiz.get(id)
	}
	
	@Transactional
	def delete(Long id) {
		Quiz quiz = Quiz.get(id)

		quiz.delete flush:true
		
		redirect action: 'create'
	}
	
	
	def allocateQuestions(Long id) {
		
		Quiz quiz = Quiz.findById(id)
		List<Question> listAvailableQuestions = questionService.findAvailableQuestionsByQuizId(id)
		
		render view:'allocateQuestions', model:[quiz:quiz, listAvailableQuestions:listAvailableQuestions]
	}
	
	def allocateTeam(Long id) {
		
		Quiz quiz = Quiz.findById(id)
		List<Team> listAvailableTeams = teamService.findAvailableTeamByQuizIdAndOwnerId(id, springSecurityService.getCurrentUser().getId())
		
		render view:'allocateTeam', model:[quiz:quiz, listAvailableTeams:listAvailableTeams]
	}

	def addTeamToQuiz(Long idTeam, Long idQuiz) {
		Quiz quiz = new Quiz()
		quiz.id = idQuiz
		Team team = new Team()
		team.id = idTeam
		
		TeamQuiz teamQuiz = new TeamQuiz()
		teamQuiz.quiz = quiz
		teamQuiz.team = team
		
		teamQuiz.save flush:true
		
		quiz = Quiz.findById(idQuiz)
		List<Team> listAvailableTeams = teamService.findAvailableTeamByQuizIdAndOwnerId(idQuiz, springSecurityService.getCurrentUser().getId())
		
		render (template:'/quiz/gridTeam', model:[quiz:quiz, listAvailableTeams:listAvailableTeams])
	}
	
	def addQuestionToQuiz(Long idQuestion, Long idQuiz) {
		Quiz quiz = new Quiz()
		quiz.id = idQuiz
		
		Question question = new Question()
		question.id = idQuestion
		
		QuestionQuiz questionQuiz = new QuestionQuiz()
		questionQuiz.question = question
		questionQuiz.quiz = quiz

		questionQuiz.save flush:true
				
		quiz = Quiz.findById(idQuiz)
		List<Question> listAvailableQuestions = questionService.findAvailableQuestionsByQuizId(idQuiz)

		render (template:'/quiz/gridQuestion', model:[listAvailableQuestions:listAvailableQuestions, quiz:quiz])
	}

	def deleteQuestionFromQuiz(Long idQuestionQuiz, Long idQuiz) {
		QuestionQuiz questionQuiz = new QuestionQuiz()
		questionQuiz.id = idQuestionQuiz
		
		questionQuiz.delete flush:true
		
		Quiz quiz = Quiz.get(idQuiz)
		List<Question> listAvailableQuestions = questionService.findAvailableQuestionsByQuizId(idQuiz)
		
		render (template:'/quiz/gridQuestion', model:[listAvailableQuestions:listAvailableQuestions, quiz:quiz])
	}
	
	def deleteTeamFromQuiz(Long idTeamQuiz, Long idQuiz) {
		TeamQuiz teamQuiz = new TeamQuiz()
		teamQuiz.id = idTeamQuiz
		
		teamQuiz.delete flush:true
		
		Quiz quiz = Quiz.get(idQuiz)
		List<Team> listAvailableTeams = teamService.findAvailableTeamByQuizIdAndOwnerId(idQuiz, springSecurityService.getCurrentUser().getId())
		
		render (template:'/quiz/gridTeam', model:[listAvailableTeams:listAvailableTeams, quiz:quiz])
	}

	def apply() {
		List<Quiz> listQuiz = Quiz.findAllByAccount(springSecurityService.getCurrentUser().getAccount())
		render view:'apply', model:[edit:false, listQuiz:listQuiz]
	}
	
	def manage(){
		render view:'manage', model:[listQuizToSend:showNotSentQuizzes(), listQuizSent:showSentQuizzes()]
	}
	
	def showNotSentQuizzes(){
		def listQuizToSend = Quiz.findAllBySent(false, [sort:"name"])
		listQuizToSend
	}
	
	def showSentQuizzes(){
		def listQuizSent = Quiz.findAllBySent(true, [sort:"name"])
		listQuizSent
	}
	
	def send(Quiz quiz){
		for(TeamQuiz teamQuiz : quiz?.listTeamQuiz){
			for(teamUser in teamQuiz?.team?.listTeamUser){
				generateQuizForUsers(quiz, teamUser?.user)
			}
		}
		redirect action:'manage'
	}
	
	def generateQuizForUsers(Quiz quiz, User user){
		UserQuizHistory userQuiz = new UserQuizHistory()
		userQuiz.quiz = quiz
		userQuiz.user = user
		
		if(userQuiz.save(flush:true)){
			for(QuestionQuiz questionQuiz : quiz?.listQuestionQuiz){
				buildQuizQuestions(questionQuiz?.question, user)
			}
			boolean successfulEmail = sendEmail(quiz)
			quiz.sent = true
			quiz.sentDate = new Date()
			quiz.save flush:true
			if(successfulEmail)
				flash.messageSend = message(code:'default.created.message.label', args: [message(code:'quiz.title.label')])
		}
	}	
	
	def buildQuizQuestions(Question question, User user){
		 UserQuestion userQuestion = new UserQuestion()
		 userQuestion.questionText = question?.header
		 userQuestion.question = question
		 userQuestion.user = user
		 
		 if(userQuestion.save(flush:true)){
			 buildAlternatives(question?.listOptions, userQuestion)
		 }
	}
	
	def buildAlternatives(def choices, UserQuestion userQuestion){
		for(Choice choice in choices){
			UserQuestionOption userQuestionOption = new UserQuestionOption()
			
			userQuestionOption.questionText = choice?.text
			userQuestionOption.userQuestion = userQuestion
			userQuestionOption.user = userQuestion?.user
			userQuestionOption.questionOption = choice
			userQuestionOption.save flush:true
		}
	}
	
	def sendEmail(Quiz quiz){
		boolean successfulEmail = true
		for(UserQuizHistory userQuiz : quiz?.listUserQuiz){
			try {
				//chamada para envio de email
			} catch (Exception e) {
				e.printStackTrace()
				successfulEmail = false
				flash.messageSendError = message(code:'manageQuiz.sendEmailError.message')
			}
			return successfulEmail
		}
	}
	
	def resendEmail(Quiz quiz){
		for(UserQuizHistory userQuiz : quiz?.listUserQuiz){
			if(!userQuiz?.finishDate){
				try {
					//chamada para envio de email
					//println userQuiz?.user?.name
					flash.messageResend = message(code:'manageQuiz.resendEmail.message')
				} catch (Exception e) {
					e.printStackTrace()
					flash.messageResendError = message(code:'manageQuiz.resendEmailError.message')
				}
			}	
		}
		redirect action: 'manage'
	}
	
	def showDetailedQuiz(Quiz quiz){
		flash.messageError = message(code:'quizDetails.list.userQuiz.empty.message')
		render view:'detailed', model:[quiz: quiz]
	}
}
