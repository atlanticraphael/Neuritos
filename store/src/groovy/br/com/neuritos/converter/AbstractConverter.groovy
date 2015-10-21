package br.com.neuritos.converter

import java.awt.Graphics2D
import java.awt.RenderingHints
import java.awt.Transparency
import java.awt.image.BufferedImage

import javax.imageio.ImageIO

import br.com.neuritos.converter.domain.enums.ContentType

abstract class AbstractConverter {

	static final int IMG_WIDTH = 1050
	static final int IMG_HEIGHT = 840
	ContentType contentType

	abstract def convert(File file, String baseConvertFolder, String destinationFolder, String UUID);
	abstract def getContentType();
	
	def generateHTML(int qtd, String pastaPadrao, String pastaDestino) throws FileNotFoundException, UnsupportedEncodingException, IOException {
		PrintWriter writer = new PrintWriter(pastaDestino + "/index.html", "UTF-8");

		File cabecalho = new File(pastaPadrao + "base_conversor_conteudo/cabecalho.html");
		FileInputStream fis = null;
		fis = new FileInputStream(cabecalho);

		int content;
		while ((content = fis.read()) != -1) {
			writer.print((char) content);
		}

		writer.println("");
		for (int i = 0; i < qtd; i++) {
			writer.println("\t\t\t\t\t\t<li><a id='menu" + (i+1)
					+ "'  data-previous-menu='menu" + (i)
					+ "' data-next-menu='menu" + (i + 2)
					+ "' data-page='page_" + (i+1) + ".png"
					+ "' onclick='new APIContentPDF().goToPage(" + (i+1)
					+ ", this)'  target='frameTarget'>"
					+ "Página" + (i+1) + "</a></li>");
		}
		writer.println("\t\t\t\t\t\t<input type='hidden' id='totalPage' value='"
				+ (qtd) + "'/>");

		File rodape = new File(pastaPadrao + "base_conversor_conteudo/rodape.html");
		fis = new FileInputStream(rodape);

		content = 0;
		while ((content = fis.read()) != -1) {
			writer.print((char) content);
		}

		writer.close();
		fis.close();

		File cssSrcFolder = new File(pastaPadrao + "base_conversor_conteudo/css");
		File jsSrcFolder = new File(pastaPadrao + "base_conversor_conteudo/js");

		File cssDestFolder = new File(pastaDestino + "/css");
		File jsDestFolder = new File(pastaDestino + "/js");

		if (!cssSrcFolder.exists()) {
			System.exit(0);
		} else {
			try {
				copyFolder(cssSrcFolder, cssDestFolder);
			} catch (IOException e) {
				e.printStackTrace();
				System.exit(0);
			}
		}

		if (!jsSrcFolder.exists()) {
			System.exit(0);
		} else {
			try {
				copyFolder(jsSrcFolder, jsDestFolder);
			} catch (IOException e) {
				e.printStackTrace();
				System.exit(0);
			}
		}
	}

	// Deletes all files and subdirectories under dir.
	// Returns true if all deletions were successful.
	// If a deletion fails, the method stops attempting to delete and returns false.
	boolean deleteDir(File dir) {
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
	
	
	def generateImg(byte[] fileArray, String destinationFolder, String filename) {
		BufferedImage imag = ImageIO.read(new ByteArrayInputStream(fileArray));
		BufferedImage resizedImage = getScaledInstance(imag, IMG_WIDTH, IMG_HEIGHT, false)

		generateSlidesIfNotExist(destinationFolder)

		ImageIO.write(resizedImage, "png", new File(destinationFolder + "/img/slides/" + filename + ".png"))
	}

	private generateSlidesIfNotExist(String destinationFolder) {

		File imgFolder = new File(destinationFolder + "/img/")
		if (!imgFolder.exists()) {
			imgFolder.mkdir()
		}

		File imgSlides = new File(destinationFolder + "/img/slides/")

		if (!imgSlides.exists()) {
			imgSlides.mkdir()
		}
	}

	def copyFolder(File src, File dest) throws IOException {
		if (src.isDirectory()) {
			if (!dest.exists()) {
				dest.mkdir();
			}
			String[] files = src.list();
			for (String file : files) {
				File srcFile = new File(src, file);
				File destFile = new File(dest, file);
				copyFolder(srcFile, destFile);
			}
		} else {
			InputStream input = new FileInputStream(src)
			OutputStream out = new FileOutputStream(dest)
			byte[] buffer = new byte[1024]
			int length

			while ((length = input.read(buffer)) > 0) {
				out.write(buffer, 0, length);
			}

			input.close();
			out.close();
		}
	}

	def generateImgFolder(String baseConvertFolder, String destinationFolder) {
		File imgDestFolder = new File(destinationFolder + "/img");
		File imgSrcFolder = new File(baseConvertFolder + "base_conversor_conteudo/img");

		if (!imgSrcFolder.exists()) {
		} else {
			try {
				copyFolder(imgSrcFolder, imgDestFolder);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	def BufferedImage getScaledInstance(BufferedImage img, int targetWidth, int targetHeight, boolean higherQuality) {
		int type = (img.getTransparency() == Transparency.OPAQUE) ?
				BufferedImage.TYPE_INT_RGB : BufferedImage.TYPE_INT_ARGB;

		BufferedImage ret = (BufferedImage)img;
		int w, h;
		if (higherQuality) {
			// Use multi-step technique: start with original size, then
			// scale down in multiple passes with drawImage()
			// until the target size is reached
			w = img.getWidth();
			h = img.getHeight();
		} else {
			// Use one-step technique: scale directly from original
			// size to target size with a single drawImage() call
			w = targetWidth;
			h = targetHeight;
		}


		boolean doWhile = true //refactor this
		while (w != targetWidth || h != targetHeight || doWhile) {

			doWhile = false

			if (higherQuality && w > targetWidth) {
				w /= 2;
				if (w < targetWidth) {
					w = targetWidth;
				}
			}

			if (higherQuality && h > targetHeight) {
				h /= 2;
				if (h < targetHeight) {
					h = targetHeight;
				}
			}

			BufferedImage tmp = new BufferedImage(w, h, type);
			Graphics2D g2 = tmp.createGraphics();
			g2.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BILINEAR);
			g2.drawImage(ret, 0, 0, w, h, null);
			g2.dispose();

			ret = tmp;
		}

		return ret;
	}
}
