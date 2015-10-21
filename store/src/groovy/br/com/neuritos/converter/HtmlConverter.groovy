package br.com.neuritos.converter

import br.com.neuritos.converter.domain.enums.ContentType


class HtmlConverter extends AbstractConverter {
	
	String manifestPath

	@Override
	def convert(File file, String baseConvertFolder, String destinationFolder, String UUID) {
		baseConvertFolder + '/content/extractZip/' + UUID
	}

	@Override
	def getContentType() {
		ContentType.HTML
	}

}
