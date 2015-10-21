package br.com.neuritos.converter.model

import com.amazonaws.regions.Region
import com.amazonaws.regions.Regions

class AwsObject {

	Region region = Region.getRegion(Regions.US_WEST_1) //trocar para ser dinamico
	String pipelineId
	String presetId
	def accessKey
	def secretKey
	def bucketName
	
	
	def setRegionString(String regionString) {
		for (region in Regions.values()) {  
			if (region.name().equalsIgnoreCase(regionString)) {
				this.region = Region.getRegion(region)
				break
			}
		}
	}
}
