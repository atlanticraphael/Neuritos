package br.com.neuritos.quiz

import br.com.neuritos.converter.domain.Question
import br.com.neuritos.converter.domain.User
import grails.transaction.Transactional
import groovy.sql.Sql

@Transactional
class QuestionService {

	def dataSource
	
    def findAvailableQuestionsByQuizId(Long idQuiz) {
		def sql = new Sql(dataSource)
		
		def rows = sql.rows("""

			SELECT * FROM TNE_QUESTION Q
			WHERE Q.ID NOT IN(
				SELECT QU.QUESTION_ID FROM TNE_QUESTION_QUIZ QU
				WHERE QU.QUIZ_ID = '${idQuiz}') 
				""")
				
		List<Question>  listQuestions = new ArrayList<Question>()
		
		rows.each{ row ->
			Question question = new Question()
			question.id    = row.id
			question.header  = row.header
			question.neuritosImport  = row.neuritos_import
			question.optionsQuantity  = row.options_quantity
			question.questionIdNeuritos   = row.question_id_neuritos
			
			listQuestions << question
		}
		
		sql.close()
		
		listQuestions
		
    }
}
