package br.com.neuritos.quiz

import grails.transaction.Transactional
import br.com.neuritos.content.converter.ConversorConteudoConstantes
import br.com.neuritos.converter.AbstractConverter
import br.com.neuritos.converter.ContentConverterFactory
import br.com.neuritos.converter.HtmlConverter
import br.com.neuritos.converter.ScormConverter
import br.com.neuritos.converter.SwfConverter
import br.com.neuritos.converter.ZamzarConverter
import br.com.neuritos.converter.domain.Content
import br.com.neuritos.converter.domain.enums.ContentType

import com.neuritos.utils.UtilsConverter

@Transactional
class ContentConverterService {

	def mp4ConverterService
	def amazonUploadTranscoderService
	
	def convertContent(File file, String baseConvertFolder, String destinationFolder, String UUID, String pathForExtract){
		def content = new Content()
		
		AbstractConverter abstractConverter = getConverterFactoryType(file, baseConvertFolder, UUID)
		
		content.setPath(abstractConverter.convert(file, baseConvertFolder, destinationFolder, UUID))
		content.setContentType(ContentType.valueOf(abstractConverter.contentType.toString()))

		content
	}

	def zipContent(String path, String fileName, String extractionFolder) {
		File contentFolder = new File(path)
		File zip = new File(extractionFolder + "/" + fileName + ".ne")
		UtilsConverter.zipDirectory(contentFolder, zip)
		
		zip
	}
	
	def getConverterFactoryType(File file, String baseConvertFolder, String UUID) {
		String filenameLower = file.name.toLowerCase()
		AbstractConverter abstractConverter = null
		
		if (filenameLower.endsWith(".zip")) {
			File extractionFolder = new File(baseConvertFolder + '/content/extractZip/' + UUID)
			UtilsConverter.extractZipFile(file, extractionFolder)
			
			String xmlManifestPath = UtilsConverter.findFile(extractionFolder, "imsmanifest.xml")
			String filename = file.name.replace('.zip','')
			
			if(!xmlManifestPath.equals("")){
				String swfFilePath = UtilsConverter.findFile(extractionFolder, filename + ".swf")
				
				if (!"".equals(swfFilePath)) {
					abstractConverter = ContentConverterFactory.create(SwfConverter, [swfFilePath:swfFilePath, swfFilename:filename+ ".swf", extractionFolder:extractionFolder])
				} else {
					abstractConverter = ContentConverterFactory.create(ScormConverter, [manifestPath: xmlManifestPath, extractionFolder:extractionFolder])
				}
			} else {
				abstractConverter = ContentConverterFactory.create(HtmlConverter, [manifestPath: xmlManifestPath])
			}
		} else if (filenameLower.endsWith(".pdf")) {
			abstractConverter = ContentConverterFactory.create(ZamzarConverter, [format: 'png', contentType: ContentType.PDF])
		} else if (file.name.toLowerCase().endsWith(".mp4")) {
			abstractConverter = mp4ConverterService
		} else if (filenameLower.endsWith(".ppt") || filenameLower.endsWith(".pptx")){
			abstractConverter = ContentConverterFactory.create(ZamzarConverter, [format: 'html', contentType: ContentType.PPT])
		}
		
	}
	
	def createExtractFolders(String webRootDir, String convertDestinationFolder) {
		File pathExtractZip = new File(webRootDir + '/content')
		File pathExtractConversor = new File(convertDestinationFolder)

		if(!pathExtractZip.exists()){
			pathExtractZip.mkdirs()
		}

		if(!pathExtractConversor.exists()){
			pathExtractConversor.mkdirs()
		}
	}
	
	def createDownloadFolder(String webRootDir) {
		File pathDownloadFolder = new File(webRootDir + '/content/downloads')
		
		if (!pathDownloadFolder.exists()) {
			pathDownloadFolder.mkdirs()
		}
		
		return pathDownloadFolder.getAbsolutePath()
	}
	
	def extractContent(File file, String convertBaseFolder, String destinationFolder, String UUID, String pathForExtract, String filenameWithoutExtension) {
		String fileExtractFolder = convertBaseFolder + '/content/extractZip/' + UUID
		UtilsConverter.extractZipFile(file, new File(fileExtractFolder))
		
		String path = UtilsConverter.findFileByDepth(new File(fileExtractFolder), "index.html", 0)
		String name = new File(path)?.getParentFile()?.getName()
		
		if(!name?.equals("null") && name != null & !name?.equals(UUID) && !name?.contains("Slide")){
			fileExtractFolder += "/" + name
			UUID += "/" + name
		}
		
		File indexFile = new File(fileExtractFolder + '/index.html');
		File mp4File = new File(fileExtractFolder + '/' + filenameWithoutExtension + ".mp4");
		String indexPath = ConversorConteudoConstantes.PASTA_EXTRAC_ZIP +  UUID + '/index.html';
		if (!indexFile.exists() && !mp4File.exists()) {
			indexPath = ConversorConteudoConstantes.PASTA_EXTRAC_ZIP +  UUID + '/' + filenameWithoutExtension + '/index.html';
		} else if(mp4File.exists()) {
			indexPath = ConversorConteudoConstantes.PASTA_EXTRAC_ZIP +  UUID + '/' + filenameWithoutExtension + '.mp4'
		}
		
		return indexPath
	}

	def downloadVideoFromS3(String fileId, String destinationFolder) {
		
		File transcodedFolder = amazonUploadTranscoderService.downloadTranscodedFolder(fileId, destinationFolder)
	}
}
