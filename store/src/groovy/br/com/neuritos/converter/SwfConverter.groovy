package br.com.neuritos.converter

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths

import br.com.neuritos.converter.domain.enums.ContentType

import com.neuritos.utils.UtilsConverter

class SwfConverter extends AbstractConverter {

	String swfFilePath
	String swfFilename
	File extractionFolder
	
	@Override
	def convert(File extractedZipFile, String baseConvertFolder, String destinationFolder, String UUID) {
		UtilsConverter.deleteDir(new File(destinationFolder + "/index.html"))
		
		File folder = new File(destinationFolder)
		File[] files = extractionFolder.listFiles()
		
		for (File file : files) {
			if (swfFilename.equals(file.getName())) {
				Path source = Paths.get(file.getAbsolutePath());
				Path destinationPath = Paths.get(folder.getAbsolutePath())
				Files.copy(source, destinationPath.resolve("fundo.swf"))
				continue
			}
			super.deleteDir(file)
		}
		
		PrintWriter indexFileWriter = new PrintWriter(destinationFolder + "/index.html", "UTF-8")

		File cabecalho = new File(baseConvertFolder + "base_conversor_conteudo_swf/cabecalho.html")
		FileInputStream fis = null
		fis = new FileInputStream(cabecalho)

		int content;
		while ((content = fis.read()) != -1) {
			indexFileWriter.print((char) content)
		}

		File rodape = new File(baseConvertFolder + "base_conversor_conteudo_swf/rodape.html")
		fis = new FileInputStream(rodape)

		content = 0;
		while ((content = fis.read()) != -1) {
			indexFileWriter.print((char) content)
		}

		indexFileWriter.close()
		
		File cssSrcFolder = new File(baseConvertFolder + "base_conversor_conteudo_swf/css")
		File jsSrcFolder = new File(baseConvertFolder + "base_conversor_conteudo_swf/js")
		File includesSrcFolder = new File(baseConvertFolder + "base_conversor_conteudo_swf/assets/scripts")
		
		File cssDestFolder = new File(destinationFolder + "/css")
		File jsDestFolder = new File(destinationFolder + "/js")
		File includesDestFolder = new File(destinationFolder + "/assets/scripts")
		
		if (!includesDestFolder.exists()) {
			includesDestFolder.mkdirs()
		}

		if(!cssSrcFolder.exists()){
			System.exit(0)

		}else{
			try{
				super.copyFolder(cssSrcFolder,cssDestFolder)
			}catch(IOException e){
				e.printStackTrace()
				System.exit(0)
			}
		}

		if(!jsSrcFolder.exists()){
			System.exit(0)

		}else{

			try{
				super.copyFolder(jsSrcFolder,jsDestFolder)
			}catch(IOException e){
				e.printStackTrace()
				System.exit(0)
			}
		}
		
		UtilsConverter.deleteDir(includesDestFolder)
		if(!includesSrcFolder.exists()){
			System.exit(0)

		}else{

			try{
				super.copyFolder(includesSrcFolder,includesDestFolder)
			}catch(IOException e){
				e.printStackTrace()
				System.exit(0)
			}
		}
		
//		baseConvertFolder + '/content/extractZip/' + UUID
		baseConvertFolder + '/content/conversor/' + UUID
    }

	@Override
	def getContentType() {
		ContentType.CAPTIVATE_FLASH_SINGLE_PAGE;
	}
}
