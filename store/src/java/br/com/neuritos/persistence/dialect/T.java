package br.com.neuritos.persistence.dialect;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public abstract class T {

	public static void main(String[] args) throws IOException {

		File file = new File(
				"C:\\Development\\Sources\\neuritos\\neuritosStore\\web-app\\content\\extractZip\\1d510bdf-93b3-4023-9e1d-a0a3207c736b\\12_ax-rateio-alocacao-compra.swf");
		File folder = new File(
				"C:\\Development\\Sources\\neuritos\\neuritosStore\\web-app\\content\\conversor\\1d510bdf-93b3-4023-9e1d-a0a3207c736b");

		Path source = Paths.get(file.getAbsolutePath());
		Path destinationPath = Paths.get(folder.getAbsolutePath());
		Files.copy(source, destinationPath.resolveSibling("fundo.swf"));
	}

}
