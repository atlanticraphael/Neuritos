package br.com.neuritos.quiz

import grails.transaction.Transactional
import groovy.sql.Sql
import br.com.neuritos.controller.vo.DeleteVO
import br.com.neuritos.converter.domain.Question

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
	
	def findQuestionInQuestionQuiz(Long idQuestion) {
		def sql = new Sql(dataSource)
		
		def rows = sql.rows("""

			 SELECT QQ.QUIZ_ID AS ID
                  , Q.NAME AS DESCRIPTION
               FROM TNE_QUESTION_QUIZ QQ
             INNER JOIN TNE_QUIZ Q ON Q.ID = QQ.QUIZ_ID
               WHERE QQ.QUESTION_ID = ${idQuestion}
               ORDER BY Q.NAME
				""")
				
		List<DeleteVO>  recordsList = new ArrayList<DeleteVO>()
		
		rows.each{ row ->
			def item = new DeleteVO()
			item.id           = row.id
			item.description  = row.description
			item.relationship = "QUIZ"
			
			recordsList << item
		}
		
		sql.close()
		
		recordsList
	}
}
