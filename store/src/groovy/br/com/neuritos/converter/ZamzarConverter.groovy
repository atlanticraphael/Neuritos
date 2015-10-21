package br.com.neuritos.converter

import java.awt.Graphics2D
import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream;
import java.io.File;

import javax.imageio.ImageIO;

import java.awt.RenderingHints;
import java.awt.AlphaComposite;

import grails.plugins.rest.client.RestBuilder
import grails.plugins.rest.client.RestResponse
import grails.transaction.Transactional
import groovyx.net.http.HttpURLClient

import org.apache.http.client.HttpClient

import groovyx.net.http.*

import org.codehaus.groovy.grails.web.json.JSONElement;
import org.codehaus.groovy.grails.web.json.JSONObject
import org.codehaus.groovy.grails.io.support.FileSystemResource

import com.google.gson.JsonElement;

import br.com.neuritos.content.converter.ConversorConteudoConstantes;
import grails.converters.*

class ZamzarConverter extends AbstractConverter {

	static final String AUTHENTICATION = "c1f6959a98542bcb77d8efe776263420f48ad2cf"
	static final String ZAMZAR_URL = 'https://api.zamzar.com'
	String format
	String contentType
	RestBuilder rest = new RestBuilder()

	@Override
	def convert(File file, String baseConvertFolder, String destinationFolder, String UUID) {
		
		format = "png"
		JSONElement jsonElement = convertFile(format, file)
		String zamzarStatus = ""
		int i = 0
		
		while (!zamzarStatus.equals("successful") || i==10) {  //ate resultado ser sucesso ou 1min40s
			try {
				Thread.sleep(10000)                 //1000 milliseconds is one second.
			} catch(InterruptedException ex) {
				Thread.currentThread().interrupt()
			}
			jsonElement = checkConversion(jsonElement.id)
			zamzarStatus = jsonElement.status
			i++
		}
		
		List listFiles = jsonElement.target_files
		int numPgs = jsonElement.target_files.size() - 1
		boolean result = false
		
		if ("successful".equals(zamzarStatus)) {
			
			super.generateImgFolder(baseConvertFolder, destinationFolder)
			if (listFiles.size() == 1) {
				byte[] fileArray = downloadConvertedFile(listFiles.get(0).id)
				super.generateImg(fileArray, destinationFolder, "page_" + (0+1))
				numPgs = 1
			} else {
				for(int j = 0; j < listFiles.size(); j++) {
					
					String name = listFiles.get(j).name
					
					if (!name.toLowerCase().endsWith(".png")) {
						continue;
					}
					
					byte[] fileArray = downloadConvertedFile(listFiles.get(j).id)
					super.generateImg(fileArray, destinationFolder, "page_" + (j+1))
				}
			}
			super.generateHTML(numPgs, baseConvertFolder, destinationFolder)
		}
		
		baseConvertFolder + ConversorConteudoConstantes.PASTA_EXTRAC_CONVERSOR + UUID
	}
	
	private JSONElement convertFile(String targetFormat, File sourceFile) {

		RestResponse resp = rest.post(ZAMZAR_URL + "/v1/jobs") {
			auth AUTHENTICATION, ""
			target_format = targetFormat
			source_file = sourceFile
		}
		
		resp.json
	}

	private JSONElement checkConversion(Integer conversionId) {
		RestResponse resp = rest.get(ZAMZAR_URL + "/v1/jobs/${conversionId}"){
			auth AUTHENTICATION, ""
		}
		
		resp.json
	}


	private byte[] downloadConvertedFile(Integer fileId) {

		Authenticator.setDefault (new Authenticator() {
			PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication (AUTHENTICATION, "".toCharArray());
			}
		})

		def http = new HttpURLClient( url: ZAMZAR_URL)
		def resp = http.request(path: '/v1/files/' + fileId + '/content', contentType: ContentType.BINARY)

		read(resp.getData())
	}

	private read(ByteArrayInputStream bais) {
		byte[] array = new byte[bais.available()];
		bais.read(array);
   
		array;
   }

	@Override
	def getContentType() {
		contentType;
	}
}
