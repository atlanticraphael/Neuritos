package br.com.neuritos.quiz

import grails.transaction.Transactional
import groovy.sql.Sql
import br.com.neuritos.converter.domain.enums.AwsMapper
import br.com.neuritos.converter.model.AwsObject

@Transactional
class AwsService {

	def dataSource
	
    def getAwsObject() {

		def sql = new Sql(dataSource)
		
		def rows = sql.rows("""
			SELECT P.COD_PARAM, P.NAME_PARAM 
			FROM TNE_SYSTEM_PARAMS P
			WHERE COD_PARAM IN('PIPELINE_ID', 'BUCKET_NAME','PRESET_ID', 'AWS_REGION')
			UNION
			SELECT F.NAME, TO_CHAR(F.PARAM_VALUE) AS NAME_PARAM 
			FROM TNE_SYSTEM_PARAMS_FIELD F
			INNER JOIN TNE_SYSTEM_PARAMS P ON P.ID = F.SYSTEMPARAMS_ID
			WHERE COD_PARAM = 'CREDENTIALS_S3'
			""")
		
		AwsObject awsObject = new AwsObject()
		rows.each { row ->
			
			if (AwsMapper.REGION.getDescription().equalsIgnoreCase(row.cod_param)) {
				awsObject.setRegionString(row.name_param)
			} else if (AwsMapper.BUCKET_NAME.getDescription().equalsIgnoreCase(row.cod_param)) {
				awsObject.bucketName = row.name_param
			} else if (AwsMapper.ACCESS_KEY.getDescription().equalsIgnoreCase(row.cod_param)) {
				awsObject.accessKey = row.name_param
			} else if (AwsMapper.SECRET_KEY.getDescription().equalsIgnoreCase(row.cod_param)) {
				awsObject.secretKey = row.name_param
			} else if (AwsMapper.PRESET_ID.getDescription().equalsIgnoreCase(row.cod_param)) {
				awsObject.presetId = row.name_param
			} else if (AwsMapper.PIPELINE_ID.getDescription().equalsIgnoreCase(row.cod_param)) {
				awsObject.pipelineId = row.name_param
			}
		}

		sql.close()
		awsObject
    }
}
