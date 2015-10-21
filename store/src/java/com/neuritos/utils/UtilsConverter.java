package com.neuritos.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Date;
import java.util.Enumeration;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipException;
import java.util.zip.ZipFile;
import java.util.zip.ZipOutputStream;

public class UtilsConverter {
	private static final int TAMANHO_BUFFER = 2048;
	
	public static void extractZipFile( File zipFile, File directory) throws ZipException, IOException {
		ZipFile zip = null;
		File file = null;
		InputStream is = null;
		OutputStream os = null;
		byte[] buffer = new byte[TAMANHO_BUFFER];
		
		try {
			//cria diretório informado, caso não exista
			if( !directory.exists() ) {
				directory.mkdirs();
			}
			
			if( !directory.exists() || !directory.isDirectory() ) {
				throw new IOException("Informe um diretório válido");
			}
			
			zip = new ZipFile( zipFile );
			Enumeration<?> e = zip.entries();
			while( e.hasMoreElements() ) {
				ZipEntry input = (ZipEntry) e.nextElement();
				file = new File( directory, input.getName() );
				//if directory dont exist, create the structure
				//and jump for next input
				if( input.isDirectory() && !file.exists() ) {
					file.mkdirs();
					continue;
				}
				// if the structure of directories dont exist, create
				if( !file.getParentFile().exists() ) {
					file.getParentFile().mkdirs();
				}
				try {
					//read the zip file and save in disc
					is = zip.getInputStream( input );
					os = new FileOutputStream( file );
					int bytesLidos = 0;
					
					if( is == null ) {
						throw new ZipException("Erro ao ler a entrada do zip: " + input.getName());
					}
					while( (bytesLidos = is.read( buffer )) > 0 ) {
						os.write( buffer, 0, bytesLidos );
					}
				} finally {
					if( is != null ) {
						try {
							is.close();
						} catch( Exception ex ) {}
					}
					if( os != null ) {
						try {
							os.close();
						} catch( Exception ex ) {}
					}
				}
			}
		} finally {
			if( zip != null ) {
				try {
					zip.close();
				} catch( Exception e ) {}
			}
		}
	}
	
	// Deletes all files and subdirectories under dir.  
	// Returns true if all deletions were successful.  
	// If a deletion fails, the method stops attempting to delete and returns false.  
	public static boolean deleteDir(File dir) {  
		if (dir.isDirectory()) {  
			String[] children = dir.list();  
			for (int i = 0; i < children.length; i++) {  
				boolean success = deleteDir(new File(dir, children[i] ));  
				if (!success) {  
					return false;  
				}  
			}  
		}
		// The directory is now empty so delete it  
		return dir.delete();  
	}  
	
	public static String findFile(File searchFile, String fileToSearch){
		String filePath = "";
		
		if(searchFile.exists()){
			File[] file = searchFile.listFiles();
			for (int i = 0; i < file.length; i++) {
				if (file[i].isDirectory()) {  
					filePath = findFile(file[i], fileToSearch);
					if(!filePath.equals("")){
						break;
					}
			    }  
			    else {  
			        if(file[i].getName().equals(fileToSearch)){
			        	filePath = file[i].getAbsolutePath();
			        	break;
			        }
			    }  
			}
		}
		return filePath;
	}
	
	public static String formatarCPF(String cpf){
        Pattern pattern = Pattern.compile("(\\d{3})(\\d{3})(\\d{3})(\\d{2})");  
        Matcher matcher = pattern.matcher(cpf);  
        if (matcher.matches())   
            cpf = matcher.replaceAll("$1.$2.$3-$4");  
        return cpf;   
	}
	
	public static boolean isDateHourBetween(Date date, Date minorDate, Date majorDate){
		boolean isDateHourBetween = false;
		
		isDateHourBetween = date.compareTo(minorDate) == 1 || date.compareTo(minorDate) == 0;
		isDateHourBetween &= date.compareTo(majorDate) == -1 || date.compareTo(majorDate) == 0;
		
		return isDateHourBetween;
	}	
	
	public static void zipDirectory(File dir, File zipFile) throws IOException {
        FileOutputStream fout = new FileOutputStream(zipFile);
        ZipOutputStream zout = new ZipOutputStream(fout);
        zipSubDirectory("", dir, zout);
        zout.close();
    }

    private static void zipSubDirectory(String basePath, File dir, ZipOutputStream zout) throws IOException {
        byte[] buffer = new byte[4096];
        File[] files = dir.listFiles();
        for (File file : files) {
            if (file.isDirectory()) {
                String path = basePath + file.getName() + "/";
                zout.putNextEntry(new ZipEntry(path));
                zipSubDirectory(path, file, zout);
                zout.closeEntry();
            } else {
                FileInputStream fin = new FileInputStream(file);
                zout.putNextEntry(new ZipEntry(basePath + file.getName()));
                int length;
                while ((length = fin.read(buffer)) > 0) {
                    zout.write(buffer, 0, length);
                }
                zout.closeEntry();
                fin.close();
            }
        }
    }
}
