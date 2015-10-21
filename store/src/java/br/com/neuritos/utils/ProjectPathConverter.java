package br.com.neuritos.utils;

import java.io.File;
import java.util.Calendar;


public class ProjectPathConverter {
	
	public static String getOutputContentPath(String pathProject, String UUID){
		Calendar currentDate = Calendar.getInstance();
		String paths = "/" + Integer.toString(currentDate.get(Calendar.YEAR));
		paths += "/" + Integer.toString(currentDate.get(Calendar.MONTH) + 1);
		paths += "/id_" + UUID;
		
		String fullPath = pathProject + paths;
		createDirectoryIfDoesNotExist(fullPath);
		return fullPath;
	}
	
	private static void createDirectoryIfDoesNotExist(String path) {
		File directory = new File(path);
		if(directory.exists() == false){
			directory.mkdirs();
		}
	}
}
