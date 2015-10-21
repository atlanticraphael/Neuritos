package br.com.neuritos.quiz

import grails.transaction.Transactional

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths

import br.com.neuritos.content.converter.ConversorConteudoConstantes
import br.com.neuritos.converter.AbstractConverter
import br.com.neuritos.converter.domain.enums.ContentType


@Transactional
class Mp4ConverterService extends AbstractConverter {

	def videoConverterService
	def amazonUploadTranscoderService
	def uploadS3Service

	boolean isStore;

//	Mp4ConverterService(boolean isStore) {
//		this.isStore = isStore;
//	}

	@Override
	def convert(File file, String baseConvertFolder, String destinationFolder, String UUID) {
		Path currentFilePath = Paths.get(file.getAbsolutePath());
		Path destinationPath = Paths.get(baseConvertFolder + ConversorConteudoConstantes.PASTA_EXTRAC_CONVERSOR + UUID + "/" + file.getName())
		Files.copy(currentFilePath, destinationPath)

		if (isStore) {
			String awsPrefix = amazonUploadTranscoderService.uploadContent(new File(baseConvertFolder + ConversorConteudoConstantes.PASTA_EXTRAC_CONVERSOR + UUID + "/"), UUID)
			amazonUploadTranscoderService.transcoderVideo(awsPrefix, file.getName())
		}

		baseConvertFolder + ConversorConteudoConstantes.PASTA_EXTRAC_CONVERSOR + UUID
	}

	@Override
	def getContentType() {
		ContentType.VIDEO
	}
}
