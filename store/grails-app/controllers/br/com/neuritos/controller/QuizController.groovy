package br.com.neuritos.controller

import br.com.neuritos.converter.domain.Account
import br.com.neuritos.converter.domain.Choice;
import br.com.neuritos.converter.domain.Question;
import br.com.neuritos.converter.domain.QuestionQuiz;
import br.com.neuritos.converter.domain.Quiz
import br.com.neuritos.converter.domain.Team
import br.com.neuritos.converter.domain.TeamQuiz;
import br.com.neuritos.converter.domain.User
import grails.transaction.Transactional

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
	
	
	def show(Long id) {
		respond Quiz.get(id)
	}
	
	def delete(Long id) {
		Quiz quiz = Quiz.get(id)

		if (quiz.listTeamQuiz.size() > 0) {
			quiz.listTeamQuiz.each { it.delete(flush: true) }
		}

		if (quiz.listQuestionQuiz.size() > 0) {
			quiz.listQuestionQuiz.each { it.delete(flush: true) }
		}
						
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
				
	def applyQuiz(Long idQuiz, Long idTeam) {
		
	}
	
}
