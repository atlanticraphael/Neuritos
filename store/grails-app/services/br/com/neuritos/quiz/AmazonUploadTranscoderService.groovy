package br.com.neuritos.quiz

import java.io.File

import grails.transaction.Transactional

import org.apache.commons.io.IOUtils

import br.com.neuritos.converter.model.AwsObject;

import com.amazonaws.auth.AWSCredentialsProvider
import com.amazonaws.auth.BasicAWSCredentials
import com.amazonaws.auth.ClasspathPropertiesFileCredentialsProvider
import com.amazonaws.regions.Regions
import com.amazonaws.services.elastictranscoder.AmazonElasticTranscoder
import com.amazonaws.services.elastictranscoder.AmazonElasticTranscoderAsync
import com.amazonaws.services.elastictranscoder.AmazonElasticTranscoderAsyncClient
import com.amazonaws.services.elastictranscoder.AmazonElasticTranscoderClient
import com.amazonaws.services.elastictranscoder.model.CreateJobOutput
import com.amazonaws.services.elastictranscoder.model.CreateJobRequest
import com.amazonaws.services.elastictranscoder.model.CreateJobResult
import com.amazonaws.services.elastictranscoder.model.Job
import com.amazonaws.services.elastictranscoder.model.JobInput
import com.amazonaws.services.elastictranscoder.model.JobOutput
import com.amazonaws.services.elastictranscoder.model.ReadJobRequest
import com.amazonaws.services.elastictranscoder.model.ReadJobResult
import com.amazonaws.services.s3.AmazonS3Client
import com.amazonaws.services.s3.model.GetObjectRequest
import com.amazonaws.services.s3.model.ObjectListing
import com.amazonaws.services.s3.model.ObjectMetadata
import com.amazonaws.services.s3.model.PutObjectRequest
import com.amazonaws.services.s3.model.S3Object
import com.amazonaws.services.s3.model.S3ObjectSummary

@Transactional
class AmazonUploadTranscoderService {

	static final String FOLDER_VIDEO = 'content/video/'
	static final String FOLDER_SUFFIX = "/"

	AwsObject awsObject
	AwsService awsService
	AmazonElasticTranscoder amazonElasticTranscoder 
	
	AmazonUploadTranscoderService() {
//		this.awsService = awsService
//		populateAwsObject()
	}
	
	private populateAwsObject() {
		this.awsObject = awsService.getAwsObject()
	}
	
	def transcoderVideo(String awsPrefix, String filename) {
		final AWSCredentialsProvider credentialsProvider = new ClasspathPropertiesFileCredentialsProvider()
		final String key = awsPrefix + filename

		amazonElasticTranscoder = new AmazonElasticTranscoderClient(new  BasicAWSCredentials(awsObject.accessKey, awsObject.secretKey))
		amazonElasticTranscoder.setRegion(awsObject.region)

		CreateJobRequest jobRequest = new CreateJobRequest()
		jobRequest.setPipelineId(awsObject.pipelineId)

		JobInput jobInput = new JobInput()
		jobInput.setKey(key)
		jobInput.setAspectRatio("auto")
		jobInput.setContainer("auto")
		jobInput.setFrameRate("auto")
		jobInput.setInterlaced("auto")
		jobInput.setResolution("auto")
		jobRequest.setInput(jobInput)

		List<CreateJobOutput> jobOutputs = new ArrayList<CreateJobOutput>()

		CreateJobOutput createJobOutput = new CreateJobOutput()
		createJobOutput.setKey("video")
		createJobOutput.setPresetId(awsObject.presetId)
		createJobOutput.setThumbnailPattern("thumbs/thumb-{count}")
		createJobOutput.setRotate("auto")
		createJobOutput.setSegmentDuration("20")
		jobOutputs.add(createJobOutput)

		jobRequest.setOutputKeyPrefix(awsPrefix + "hls/")
		jobRequest.setOutputs(jobOutputs)

		CreateJobResult jobResult = amazonElasticTranscoder.createJob(jobRequest)
		Job job = jobResult.getJob()
		
		JobOutput jobOutput = job.getOutput()
		String status = jobOutput.getStatus()
		int i = 0
		while (!"Complete".equals(status) || i==10) {  //ate resultado ser sucesso ou 1min40s
			try {
				Thread.sleep(10000)                 //1000 milliseconds is one second.
			} catch(InterruptedException ex) {
				Thread.currentThread().interrupt()
			}
			
			status = getTransformationProgress(job.getId())
			
		}
		
		
	}

	def uploadContent(File fileUpload, String UUID) {

		AmazonS3Client s3client = new AmazonS3Client(new  BasicAWSCredentials(awsObject.accessKey,awsObject.secretKey))
		String awsPrefixUpdated = FOLDER_VIDEO + UUID + FOLDER_SUFFIX

		for(File f : fileUpload.listFiles()) {
			if( f.isDirectory()) {
				uploadFolderToAmazon(f, s3client, awsPrefixUpdated)

			}else if(f.isFile()){
				try {
					PutObjectRequest objectRequest = new PutObjectRequest(awsObject.bucketName, awsPrefixUpdated + f.getName(), f)

					//push the object for amazon
					s3client.putObject(objectRequest)
				} catch(Exception e){
					e.getStackTrace()
				}
			}
		}
		
		awsPrefixUpdated
	}

	def uploadFolderToAmazon(File raiz, AmazonS3Client s3client, String awsPrefixUpdated) {
		InputStream emptyContent = new ByteArrayInputStream(new byte[0])
		ObjectMetadata metadata = new ObjectMetadata()
		metadata.setContentLength(0)

		PutObjectRequest putObjectRequest =
				new PutObjectRequest(awsObject.bucketName, awsPrefixUpdated + raiz.getName() + FOLDER_SUFFIX,
				emptyContent, metadata)

		s3client.putObject(putObjectRequest)

		for(File f: raiz.listFiles()) {
			if(f.isFile()){
				File file = new File(f.getAbsolutePath())
				PutObjectRequest objectRequest = new PutObjectRequest(awsObject.bucketName, awsPrefixUpdated + raiz.getName() + FOLDER_SUFFIX + f.getName(), file)

				s3client.putObject(objectRequest)
			}else{
				uploadFolderToAmazon(f, s3client, awsPrefixUpdated + raiz.getName() + FOLDER_SUFFIX)
			}
		}
	}

	def getTransformationProgress(String jobId) {

		try{
			BasicAWSCredentials awsCredentials = new BasicAWSCredentials(awsObject.accessKey, awsObject.secretKey)
			AmazonElasticTranscoderAsync awsTranscodeClient = new AmazonElasticTranscoderAsyncClient(awsCredentials)
			ReadJobRequest readJobRequest = new ReadJobRequest()

			readJobRequest.setId(jobId)

			ReadJobResult result = amazonElasticTranscoder.readJob(readJobRequest)

			Job job = result.getJob()
			JobOutput jobOutput = job.getOutput()
			String status = jobOutput.getStatus()
			
		} catch(Exception e) {
			e.printStackTrace()
		}
	}

	def downloadTranscodedFolder(String UUID, String destinationFolder) {
		AmazonS3Client s3Client = new AmazonS3Client(new  BasicAWSCredentials(awsObject.accessKey,awsObject.secretKey))
		
		String awsPrefix = FOLDER_VIDEO + UUID + FOLDER_SUFFIX
		
		ObjectListing folder = s3Client.listObjects(awsObject.bucketName, awsPrefix)
		
		List<S3ObjectSummary> list = folder.getObjectSummaries()
		for(S3ObjectSummary file: list) {
			
			if (file.getKey().endsWith(".ts") || file.getKey().endsWith(".m3u8")) {
				S3Object obj = s3Client.getObject(awsObject.bucketName, file.getKey())
				String key = obj.getKey()
				String filename = key.substring(key.lastIndexOf(FOLDER_SUFFIX), key.size())
				
				File hlsFolder = new File(destinationFolder + '/hls/')
				if (!hlsFolder.exists()) {
					hlsFolder.mkdir()
				}
				
				IOUtils.copy(obj.getObjectContent(), new FileOutputStream(destinationFolder + '/hls/' + filename))
				obj.close()
			}
			
		}
	}
	
}
