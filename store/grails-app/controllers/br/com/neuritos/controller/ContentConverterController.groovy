package br.com.neuritos.controller

import grails.transaction.Transactional
import br.com.neuritos.converter.domain.Content
import br.com.neuritos.converter.domain.Conversion
import br.com.neuritos.utils.ProjectPathConverter

class ContentConverterController {

	def contentConverterService
	def springSecurityService
	
	def createConverter() {
		List<Conversion> listConversion = Conversion.list()
		render view:'createConverter', model:[edit : false, listConversion:listConversion]
	}

	@Transactional
	def convertFile() {
		def file = request.getFile('file')
		String fullPath = ''
		
		if(file.empty){
			return
		}
			
		String fileName = file.originalFilename
		
		if(fileName.toString().toLowerCase().endsWith(".wmv")){
			flash.message = message(code: 'content.formato.video.invalido')
			render view:'create', model:[fullPathFile : fullPath, edit : false, nomeArquivo : fileName]
			return
		}
		
		String fileNameWithoutExtension = fileName.toString().substring(0, fileName.toString().toLowerCase().lastIndexOf("."))
		
		String UUID = UUID.randomUUID().toString()
		def webRootDir = servletContext.getRealPath("/")
		String convertDestinationFolder = webRootDir + 'content/conversor/' + UUID
		
		//cria pastas para a extracao
		contentConverterService.createExtractFolders(webRootDir, convertDestinationFolder)
		
		String downloadFolder = contentConverterService.createDownloadFolder(webRootDir)
		
		String pathForExtract = ProjectPathConverter.getOutputContentPath(webRootDir + '/content/', UUID)
		File newFile = new File(pathForExtract + '/' + fileName)
		file.transferTo(newFile)

		Content content = contentConverterService.convertContent(newFile, webRootDir, convertDestinationFolder, UUID, pathForExtract)
		content.setName(fileName)
		
		content.save flush:true
		
		Conversion conversion = new Conversion()
		conversion.setContent(content)
				
		conversion.save flush:true
		
		File neuritosFile = contentConverterService.zipContent(content.getPath(), fileNameWithoutExtension, downloadFolder)
		
		render view:'createConverter', model:[edit : false, filename : fileNameWithoutExtension + ".ne", params:params, fileId:UUID, contentId:content.id]
	}


	def download() {

		String fileName = params.filename
		String UUID = params.fileId
		String webRootDir = servletContext.getRealPath("/")

		String fileNameWithoutExtension = fileName.toString().substring(0, fileName.toString().toLowerCase().lastIndexOf("."))
		String destinationFolder = webRootDir + 'content/conversor/' + UUID
		String downloadFolder = contentConverterService.createDownloadFolder(webRootDir)
		File neuritosFile = null
		if (fileName.toString().toLowerCase().endsWith(".mp4")) {
			contentConverterService.downloadVideoFromS3(UUID, destinationFolder)
			neuritosFile = contentConverterService.zipContent(destinationFolder, fileNameWithoutExtension, downloadFolder)
		} else {
			neuritosFile = new File (webRootDir + '/content/downloads/' + fileNameWithoutExtension + '.ne')
		}
		
		response.setContentType("application/octet-stream")
		response.setHeader("Content-disposition", "filename=${neuritosFile.name}")
		neuritosFile.withInputStream { response.outputStream << it }
	}

	def delete(Long id) {
		Content content = Content.get(id)

		Conversion conversion = Conversion.findByContent(content)
		conversion.delete flush:true
		content.delete flush:true
						
		redirect action: 'createConverter'
	}
	
	def downloadFile(Long id) {
		Content content = Content.get(id)
		
		String fileName = content?.name
		Integer UUID_total_characters = 36
		
		String UUID = content?.path?.substring(content?.path?.size() - UUID_total_characters, content?.path?.size())
		String webRootDir = servletContext.getRealPath("/")

		String fileNameWithoutExtension = fileName.toString().substring(0, fileName.toString().toLowerCase().lastIndexOf("."))
		String destinationFolder = webRootDir + 'content/conversor/' + UUID
		String downloadFolder = contentConverterService.createDownloadFolder(webRootDir)
		File neuritosFile = null
		if (fileName.toString().toLowerCase().endsWith(".mp4")) {
			contentConverterService.downloadVideoFromS3(UUID, destinationFolder)
			neuritosFile = contentConverterService.zipContent(destinationFolder, fileNameWithoutExtension, downloadFolder)
		} else {
			neuritosFile = new File (webRootDir + '/content/downloads/' + fileNameWithoutExtension + '.ne')
		}
		
		response.setContentType("application/octet-stream")
		response.setHeader("Content-disposition", "filename=${neuritosFile.name}")
		neuritosFile.withInputStream { response.outputStream << it }
	}
}
