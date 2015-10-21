package br.com.neuritos.converter.domain.enums;

public enum AwsMapper {

	REGION("AWS_REGION"),
	PIPELINE_ID("PIPELINE_ID"),
	PRESET_ID("PRESET_ID"),
	ACCESS_KEY("Chave de acesso do servidor S3"),
	SECRET_KEY("Senha de acesso do servidor S3"),
	BUCKET_NAME("BUCKET_NAME");

	private String description;
	
	private AwsMapper(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}
}