package br.com.neuritos.converter.domain.enums;

public enum ApplicationLanguage {

	pt_br("Português"),
	en("Inglês"),
	es("Espanhol");

	private String description;
	
	private ApplicationLanguage(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}
}