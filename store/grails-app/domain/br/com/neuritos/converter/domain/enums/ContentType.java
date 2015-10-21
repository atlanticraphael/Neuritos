package br.com.neuritos.converter.domain.enums;

public enum ContentType {

	VIDEO("Video"),
	PDF("PDF"),
	HTML("HTML"),
	SCORM("SCORM"),
	PPT("PPT"),
	CAPTIVATE_FLASH_SINGLE_PAGE("CAPTIVATE/FLASH-SINGLE-PAGE");

	private String description;
	
	private ContentType(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}
}