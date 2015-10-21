package br.com.neuritos.content.converter;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collection;

import com.neuritos.utils.UtilsConverter;

public class ConverterConteudoSCORM {
	private static String VERSION_SCORM_1_2 = "1.2";
	private static String VERSION_SCORM_1_0 = "1.0";
	private static String VERSION_SCORM_1_1 = "1.1";
	private static String PULA_LINHA = "\n";
	
	public String converter(File arquivoScorm, String pastaBaseConversor, String pastaDestino, String caminhoManifestXml, String nomeArquivoScorm, String UUID) throws IOException {
		ScormBase scormbase = new ReadXMLFile().lerManifestXml(caminhoManifestXml);
		
		if(scormbase.version.equals(VERSION_SCORM_1_2) || scormbase.version.equals("")){
			ConverterConteudoSCORM.generateHTMLVersion_1_0_1_2(scormbase, pastaDestino, pastaBaseConversor);
			return ConversorConteudoConstantes.PASTA_EXTRAC_ZIP +  UUID + "/index.html";
			
		}else if(scormbase.version.equals(VERSION_SCORM_1_0)){
			ConverterConteudoSCORM.generateHTMLVersion_1_0(scormbase, pastaDestino, pastaBaseConversor);
			return ConversorConteudoConstantes.PASTA_EXTRAC_ZIP +  UUID  + "/index.html";
			
		}else if(scormbase.version.equals(VERSION_SCORM_1_1)){
			ConverterConteudoSCORM.generateHTMLVersion_1_1(scormbase, pastaDestino, pastaBaseConversor, arquivoScorm.getAbsolutePath());
			return ConversorConteudoConstantes.PASTA_EXTRAC_ZIP +  UUID + "/index.html";
		}
		
		return "";
	}
	
	@SuppressWarnings("resource")
	public static void generateHTMLVersion_1_2(ScormBase scormbase, String pastaDestino, String pastaPadrao) throws FileNotFoundException, UnsupportedEncodingException, IOException {
		PrintWriter writer = new PrintWriter(pastaDestino + "/index.html", "UTF-8");

		File cabecalho = new File(pastaPadrao + "base_conversor_conteudo_scorm/cabecalho.html");
		FileInputStream fis = null;
		fis = new FileInputStream(cabecalho);

		int content;
		while ((content = fis.read()) != -1) {
			writer.print((char) content);
		}

		writer.println("");
		for (int i = 1; i < scormbase.identifierrefs.size(); i++) {
			writer.println("<li><a id='menu"+i+"'  data-previous-menu='menu"+(i-1)+"' data-next-menu='menu"+(i+1)+"' data-page='"+scormbase.identifierrefs.get(i)+"' onclick='new APIContntScorm().goToPage("+i+", this)'  target='frameTarget'> Pagina " + i + "</a></li>");
		}
		writer.println("\t\t\t\t\t\t<input type='hidden' id='totalPage' value='"+ (scormbase.titles.size()) + "'/>");

		File rodape = new File(pastaPadrao + "base_conversor_conteudo_scorm/rodape.html");
		fis = new FileInputStream(rodape);

		content = 0;
		while ((content = fis.read()) != -1) {
			writer.print((char) content);
		}

		writer.close();
		
		File cssSrcFolder = new File(pastaPadrao + "base_conversor_conteudo_scorm/css");
		File jsSrcFolder = new File(pastaPadrao + "base_conversor_conteudo_scorm/js");
		
		File cssDestFolder = new File(pastaDestino + "/css");
		File jsDestFolder = new File(pastaDestino + "/js");

		if(!cssSrcFolder.exists()){
			System.exit(0);

		}else{
			try{
				copyFolder(cssSrcFolder,cssDestFolder);
			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}

		if(!jsSrcFolder.exists()){
			System.exit(0);

		}else{

			try{
				copyFolder(jsSrcFolder,jsDestFolder);
			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}    	

	}
	
	@SuppressWarnings("resource")
	public static void generateHTMLVersion_1_0(ScormBase scormbase, String pastaDestino, String pastaPadrao) throws FileNotFoundException, UnsupportedEncodingException, IOException {
		UtilsConverter.deleteDir(new File(pastaDestino + "/index.html"));
		PrintWriter writer = new PrintWriter(pastaDestino + "/index.html", "UTF-8");

		File cabecalho = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.0/cabecalho.html");
		FileInputStream fis = null;
		fis = new FileInputStream(cabecalho);

		int content;
		while ((content = fis.read()) != -1) {
			writer.print((char) content);
		}

		File rodape = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.0/rodape.html");
		fis = new FileInputStream(rodape);

		content = 0;
		while ((content = fis.read()) != -1) {
			writer.print((char) content);
		}

		writer.close();
		
		File cssSrcFolder = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.0/css");
		File jsSrcFolder = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.0/js");
		File includesSrcFolder = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.0/includes");
		
		File cssDestFolder = new File(pastaDestino + "/css");
		File jsDestFolder = new File(pastaDestino + "/js");
		File includesDestFolder = new File(pastaDestino + "/includes");

		if(!cssSrcFolder.exists()){
			System.exit(0);

		}else{
			try{
				copyFolder(cssSrcFolder,cssDestFolder);
			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}

		if(!jsSrcFolder.exists()){
			System.exit(0);

		}else{

			try{
				copyFolder(jsSrcFolder,jsDestFolder);
			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}
		
		UtilsConverter.deleteDir(includesDestFolder);
		if(!includesSrcFolder.exists()){
			System.exit(0);

		}else{

			try{
				copyFolder(includesSrcFolder,includesDestFolder);
			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}  
	}
	
	@SuppressWarnings("resource")
	public static void generateHTMLVersion_1_0_1_2(ScormBase scormbase, String pastaDestino, String pastaPadrao) throws FileNotFoundException, UnsupportedEncodingException, IOException {
		UtilsConverter.deleteDir(new File(pastaDestino + "/index.html"));
		PrintWriter writer = new PrintWriter(pastaDestino + "/index.html", "UTF-8");

		File cabecalho = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.2/cabecalho.html");
		FileInputStream fis = null;
		fis = new FileInputStream(cabecalho);

		int content;
		while ((content = fis.read()) != -1) {
			writer.print((char) content);
		}

		File rodape = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.2/rodape.html");
		fis = new FileInputStream(rodape);

		content = 0;
		while ((content = fis.read()) != -1) {
			writer.print((char) content);
		}

		writer.close();
		
		File diretorio = new File(pastaDestino);  
		File[] arquivos = diretorio.listFiles();
		
		for (File arquivo : arquivos) {
			if(arquivo.getName().contains("modulo")){
				arquivo.renameTo(new File(pastaDestino + "/modulo1"));
			}
		}
		
		File cssSrcFolder = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.2/css");
		File jsSrcFolder = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.2/js");
		File includesSrcFolder = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.2/assets/scripts");
		
		File cssDestFolder = new File(pastaDestino + "/css");
		File jsDestFolder = new File(pastaDestino + "/js");
		File includesDestFolder = new File(pastaDestino + "/assets/scripts");

		if(!cssSrcFolder.exists()){
			System.exit(0);

		}else{
			try{
				copyFolder(cssSrcFolder,cssDestFolder);
			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}

		if(!jsSrcFolder.exists()){
			System.exit(0);

		}else{

			try{
				copyFolder(jsSrcFolder,jsDestFolder);
			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}
		
		UtilsConverter.deleteDir(includesDestFolder);
		if(!includesSrcFolder.exists()){
			System.exit(0);

		}else{

			try{
				copyFolder(includesSrcFolder,includesDestFolder);
			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}  
	}
	
	@SuppressWarnings("resource")
	public static void generateHTMLVersion_1_1(ScormBase scormbase, String pastaDestino, String pastaPadrao, String pastaExtracZip) throws FileNotFoundException, UnsupportedEncodingException, IOException {
		File file = new File(pastaExtracZip + "/index.htm");
		File file2 = new File(pastaExtracZip + "/index.html");
		file.renameTo(file2);
		
		PrintWriter writer = new PrintWriter(pastaExtracZip + "/course_novo.htm", "UTF-8");
		FileReader fileReader = new FileReader(new File(pastaExtracZip + "/course.htm"));
		BufferedReader reader = new BufferedReader(fileReader);
		String data = null;
		boolean escreve = false;
		
		File cabecalho = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.1/cabecalho.html");
		FileInputStream fis = null;
		fis = new FileInputStream(cabecalho);

		int content;
		while ((content = fis.read()) != -1) {
			writer.print((char) content);
		}		
		
		while((data = reader.readLine()) != null){
			if(data.trim().equals("</head>")){
				escreve = true;
			}
			if(escreve){
				writer.print(data + PULA_LINHA);
			}
		}
		fileReader.close();
		reader.close();
		writer.close();
		
		UtilsConverter.deleteDir(new File(pastaExtracZip + "/course.htm"));
		File course_novo_file = new File(pastaExtracZip + "/course_novo.htm");
		course_novo_file.renameTo(new File(pastaExtracZip + "/course.htm"));
		
		File jsSrcFolder = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.1/js");
		File jsDestFolder = new File(pastaExtracZip + "/inc");
		
		UtilsConverter.deleteDir(new File(pastaExtracZip + "/layouts/base.html"));
		File layoutsFolder = new File(pastaPadrao + "base_conversor_conteudo_scorm_version_1.1/layouts");
		File layoutsDestFolder = new File(pastaExtracZip + "/layouts");

		if(!layoutsFolder.exists()){
			System.exit(0);

		}else{
			try{
				copyFolder(layoutsFolder,layoutsDestFolder);
			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}

		if(!jsSrcFolder.exists()){
			System.exit(0);

		}else{
			try{
				copyFolder(jsSrcFolder,jsDestFolder);
			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}
	}

	public static void copyFolder(File src, File dest) throws IOException{
		if(src.isDirectory()){
			if(!dest.exists()){
				dest.mkdir();
			}

			String files[] = src.list();
			for (String file : files) {
				File srcFile = new File(src, file);
				File destFile = new File(dest, file);
				copyFolder(srcFile,destFile);
			}
		}else{
			InputStream in = new FileInputStream(src);
			OutputStream out = new FileOutputStream(dest); 

			byte[] buffer = new byte[1024];

			int length;
			while ((length = in.read(buffer)) > 0){
				out.write(buffer, 0, length);
			}
			
			in.close();
			out.close();
		}
	}
}