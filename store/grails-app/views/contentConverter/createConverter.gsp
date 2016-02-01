<!DOCTYPE html>
<html lang="en" class="style-1">
	<head>
	 	<meta name="layout" content="main">
	   	<meta charset="utf-8">
	   	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	   	<meta name="description" content="">
		<meta name="author" content="">
		<title><g:message code="default.welcome.label"/></title>
 	</head>
	<body class="page-bg preload">
    	<div class="page-wrapper nav-fixed">
      		<div class="intro-block intro-search ">
        		<div class="container cont-main">
          			<div class="search-panel" id="searchPanel">
            			<h1><g:message code="content.title.label"/></h1>
            			<p><g:message code="content.description.label"/></p>
						<div class="row filters-row grid-10">
							<g:uploadForm action="convertFile" class="search-form" role="form" controller="contentConverter">
								<div class="col-md-8">
									<div class="form-group">
										<g:if test="${!filename}">
							  				<input type="file" name="file" required="" id="file" class="form-control" file="${filename}"/>
										</g:if>
										<g:else>
											<input type="text" class="form-control" value="${filename}" readonly="readonly" />
										</g:else>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<g:if test="${!filename}">
											<input type="submit" class="btn btn-base" value="${message(code:'default.button.convert.label')}" id="submit" />
										</g:if>
							</g:uploadForm>
							<g:uploadForm action="download" class="search-form" role="form" id="downloadForm" controller="contentConverter">
								<g:if test="${filename}">
									<input type="hidden" name="filename" value="${filename}" />
									<input type="hidden" name="fileId" value="${fileId}" />
									<input type="submit" class="btn btn-base" value="${message(code:'default.button.download.label')}" id="download" />
									<input type="button" class="btn btn-base" value="${message(code:'default.button.new.label')}" id="download" onclick="newConversion()" />
								</g:if>
							</g:uploadForm>
						</div>
					</div>
				</div>
            	<asset:image class="search-pic hidden-xs" src="executive.png" alt="" />
          	</div>
    	</div>
    	</div>
      
		<section class="content-block has-sidebar default-bg">
			<div class="container cont-main pad-t-50pc">
				<div class="row">
					<div class="section-title">
						<h2><g:message code="content.convertedFiles.label"/></h2>
						<p><g:message code="content.guidance.default.message"/></p>
					</div>
				</div>
				<div class="row">
					<g:each in="${listConversion}" var="conversion" status="index">
						<div class="col-sm-3 col-md-3">
							<div class="col-sm-12 col-md-12">
								<div class="product">
									<div class="image"> 
										<a class="main"><asset:image src="content/icone_pdf.png" alt="" width="130px" height="130px" /></a>
									</div>
									<div class="title">
										<a class="name" href="#">${conversion?.content?.name}</a>
										<p class="description"><g:formatDate date="${conversion?.dateCreationRequest}" format="dd/MM/yyyy HH:mm:ss"/></p>
									</div>
									<div class="links">
										<span class="price">&#36;0</span>
									    <div class="btn-group">
											<g:link action="downloadFile" params="[id: conversion?.content?.id]">
												<button class="btn btn-base" type="button" title="${message(code: 'default.tooltip.download.label')}"><i class="icon-center fa fa-download"></i></button>
											</g:link>
											<g:link action="delete" params="[id: conversion?.content?.id]">
												<button class="btn btn-primary" type="button" title="${message(code: 'default.tooltip.delete.label')}"><i class="icon-center fa fa-trash"></i></button>
											</g:link>	
									    </div>
									</div>
								</div>
							</div>
						</div>
					</g:each>
				</div>
				<div class="row">
	            	<ul class="pagination">
	                	<li><a href="#">&laquo;</a></li>
	                	<li><a href="#">1</a></li>
	                	<li><a href="#">2</a></li>
	                	<li><a href="#">3</a></li>
	                	<li><a href="#">4</a></li>
	                	<li><a href="#">5</a></li>
	                	<li><a href="#">&raquo;</a></li>
	              	</ul>
	            </div>
	        </div>
	    </section>
	
		<footer class="footer-block">
			<div class="container main clearfix">
	         	<%--
	         	<div class="brand-col">
	            	<div class="brand">
	              		<asset:image src="logo-footer.png" alt="logo"/>
	            	</div>
	          	</div>
	          	<div class="links-col">
	            	
	            	<div class="row-fluid">
	              		<div class="col-xs-6 col-sm-3 col-md-3">
	                		<h5>guest</h5>
	                		<ul class="v-links">
	                  			<li><a href="#">login</a></li>
	                  			<li><a href="#">sign up</a></li>
	                  			<li><a href="#">customer support</a></li>
	                  			<li><a href="#">information</a></li>
	                		</ul>
	              		</div>
	              		<div class="col-xs-6 col-sm-3 col-md-3">
	                		<h5>information</h5>
	               			<ul class="v-links">
	               				<li><a href="#">About Us</a></li>
	               				<li><a href="#">Delivery Informations</a></li>
	               				<li><a href="#">Terms and conditions</a></li>
	               				<li><a href="#">Return Policy</a></li>
	               				<li><a href="#">Shipping and Deliveries</a></li>
	               				<li><a href="#">Enquiries</a></li>
	               			</ul>
	           			</div>
	              		<div class="col-xs-6 col-sm-3 col-md-3">
	                		<h5>member</h5>
	                		<ul class="v-links">
	                  			<li><a href="#">Account</a></li>
	                  			<li><a href="#">Wishlist and Favourites</a></li>
	                  			<li><a href="#">Purchase History</a></li>
	                  			<li><a href="#">View Cart</a></li>
	                		</ul>
	              		</div>
	              		<div class="col-xs-6 col-sm-3 col-md-3 newsletter">
	                		<h5>newsletter</h5>
	                		<form>
	                  			<input type="text" class="form-control" placeholder="Email Address">
	                  			<button class="btn btn-primary" type="button">get newsletter</button>
	                		</form>
	              		</div>
	           		</div>
	           		
		      	</div>
		      	--%>
	        </div>
        <g:render template="/layouts/footer" /> 
		</footer>
    </div>
    <asset:javascript src="contentConverter/contentConverter.js" charset="utf-8"/>
    </body>
</html>