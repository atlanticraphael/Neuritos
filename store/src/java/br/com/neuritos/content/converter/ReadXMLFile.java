package br.com.neuritos.content.converter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class ReadXMLFile extends DefaultHandler{

	List<String> titles = new ArrayList<String>();
	List<String> identifierrefs = new ArrayList<String>();
	String schemaversionString = "";
	ScormBase scormbase = new ScormBase();
	boolean version = false;
	boolean title = false;
	boolean item = false;
	
	public ReadXMLFile(){
		titles = new ArrayList<String>();
		identifierrefs = new ArrayList<String>();
		schemaversionString = "";
		scormbase = new ScormBase();
	}
	
	public ScormBase lerManifestXml(String caminhoManifestXml) {
		parseDocument(caminhoManifestXml);
		
		scormbase.identifierrefs = identifierrefs;
		scormbase.titles = titles;
		scormbase.version = schemaversionString;
		
		System.out.println("Titles = " + scormbase.titles.size());
		System.out.println("Href = " + scormbase.identifierrefs.size());
		System.out.println("Version = " + schemaversionString);
		
		return scormbase;
	}

	private void parseDocument(String caminhoManifestXml) {
		SAXParserFactory spf = SAXParserFactory.newInstance();
		try {
			SAXParser sp = spf.newSAXParser();
			sp.parse(caminhoManifestXml, this);
			
		}catch(SAXException se) {
			se.printStackTrace();
		}catch(ParserConfigurationException pce) {
			pce.printStackTrace();
		}catch (IOException ie) {
			ie.printStackTrace();
		}
	}
	
	public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
		if (qName.equalsIgnoreCase("manifest") && attributes.getIndex("version") >= 0) {
			schemaversionString = attributes.getValue(attributes.getIndex("version"));
			version = true;
		}

		if (qName.equalsIgnoreCase("title")) {
			title = true;
		}

		if (qName.equalsIgnoreCase("resource") && attributes.getIndex("href") >= 0) {
			identifierrefs.add(attributes.getValue(attributes.getIndex("href")));
			item = true;
		}
	}

	public void characters(char ch[], int start, int length) throws SAXException {
		if (version) {
			version = false;
		}

		if (title) {
			System.out.println("<<<<<<<<<<<<<<<<<<< title : " + new String(ch, start, length));
			titles.add(new String(ch, start, length));
			title = false;
		}

		if (item) {
			item = false;
		}

	}
}
