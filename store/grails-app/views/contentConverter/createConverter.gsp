<!DOCTYPE html>
<html lang="en" class="style-1">
  <head>
  	<meta name="layout" content="main">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Neuritos</title>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="uikit/js/html5shiv.js"></script>
    <script src="uikit/js/respond.min.js"></script>
    <![endif]-->
  </head>

  <body class="page-bg preload">
  
    <div class="page-wrapper nav-fixed">
      <!-- Intro Block
      ============================================ -->
      <div class="intro-block intro-search ">
      
        <!-- Container -->
        <div class="container cont-main">
        
          <!-- Search Panel-->
          <div class="search-panel" id="searchPanel">
          
            <h1><g:message code="domain.content.title.label"/></h1>
            <p><g:message code="domain.content.description.label"/></p>
            
            <!-- Search Form -->
					<div class="row filters-row grid-10">
						<g:uploadForm action="convertFile" class="search-form" role="form" controller="contentConverter">
					  	<!-- Col -->
						<div class="col-md-8">
							<div class="form-group">
								<g:if test="${!filename}">
							  		<input type="file" name="file" required="" id="file" class="form-control" file="${filename}"/>
								</g:if>
								<g:if test="${filename}">
									<!-- Col -->
									<input type="text" class="form-control" value="${filename}" readonly="readonly" />
									<!-- /Col -->
								</g:if>
							</div>
						</div>
						<!-- /Col -->
						<!-- Col -->
						<div class="col-md-4">
							<div class="form-group">
								<g:if test="${!filename}">
									<input type="submit" class="btn btn-base" value="${message(code:'default.button.convert.label')}" id="submit" />
								</g:if>
							</g:uploadForm>
								<g:uploadForm action="download" class="search-form" role="form" id="downloadForm" controller="contentConverter">
									<g:if test="${filename}">
										<!-- Col -->
											<input type="hidden" name="filename" value="${filename}" />
											<input type="hidden" name="fileId" value="${fileId}" />
											<input type="submit" class="btn btn-base" value="Download" id="download" />
											<input type="button" class="btn btn-base" value="New" id="download" onclick="newConversion()" />
										<!-- /Col -->
									</g:if>
								</g:uploadForm>
							</div>
						</div>
						<!-- /Col -->
					</div>
              <!-- /Filters Row -->
              
            <asset:image class="search-pic hidden-xs" src="executive.png" alt="" />

          </div>
          <!-- /Search Panel-->
 
        </div>
        <!-- /Container -->
      
      </div>
      <!-- /Intro Block
      ============================================ -->

      <!-- Content Block
      ============================================-->
      <section class="content-block has-sidebar default-bg">
		<!-- Container -->
		<div class="container cont-main pad-t-50pc">
			<div class="row">
				<!-- Section Title -->
				<div class="section-title">
					<h2><g:message code="domain.content.convertedFiles.label"/></h2>
					<p>Deserunt sit animi totam dicta suscipit non sapiente.</p>
				</div>
			</div>
			<!-- Content -->
			<div class="row">
				<g:each in="${listConversion}" var="conversion" status="index">
					<div class="col-sm-3 col-md-3">
						<!-- Col -->
						<div class="col-sm-12 col-md-12">
							<!-- product -->
							<div class="product">
								<div class="image"> 
									<a href="#" class="main"><asset:image src="content/icone_pdf.png" alt="" width="130px" height="130px" /></a>
								</div>
								<div class="title">
									<a class="name" href="#">${conversion.content.name}</a>
									<p class="description">${conversion.dateCreationRequest}</p>
								</div>
								<div class="links">
									<span class="price">&#36;0</span>
								    <div class="btn-group">
										<a class="btn btn-base" href="#"><i class="icon fa fa-download"></i><span><g:message code="default.tooltip.download.label"/></span></a>
										<a class="btn btn-primary" href="#"><i class="icon fa fa-trash-o"></i><span><g:message code="default.tooltip.delete.label"/></span></a>	
								    </div>
								</div>
							</div>
							<!-- /product -->
						</div>
						<!-- /Col -->
					</div>
				</g:each>
			</div>
			<!-- /Content -->
            <!-- Pagination -->
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
              <!-- /Pagination -->
            </div>
            <!-- /Main Col -->
        
        </div>
        <!-- /Container -->
    </section>
    <!-- /Content Block
    ============================================-->
    
      <!-- Footer
      =================================================== -->
      <footer class="footer-block">
      
        <!-- Container -->
        <div class="container main clearfix">
        
          <!-- Brand -->
          <div class="brand-col">
            <div class="brand">
              <asset:image src="logo-footer.png" alt="logo"/>
            </div>
          </div>
          <!-- /Brand -->
          
          <!-- Links -->
          <div class="links-col">
            <!-- Row -->
            <div class="row-fluid">
              <!-- Col -->
              <div class="col-xs-6 col-sm-3 col-md-3">
                <h5>guest</h5>
                <ul class="v-links">
                  <li><a href="#">login</a></li>
                  <li><a href="#">sign up</a></li>
                  <li><a href="#">customer support</a></li>
                  <li><a href="#">information</a></li>
                </ul>
              </div>
              <!-- Col -->
              
              <!-- Col -->
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
              <!-- /Col -->
              
              <!-- Col -->
              <div class="col-xs-6 col-sm-3 col-md-3">
                <h5>member</h5>
                <ul class="v-links">
                  <li><a href="#">Account</a></li>
                  <li><a href="#">Wishlist and Favourites</a></li>
                  <li><a href="#">Purchase History</a></li>
                  <li><a href="#">View Cart</a></li>
                </ul>
              </div>
              <!-- /Col -->
              
              <!-- Col -->
              <div class="col-xs-6 col-sm-3 col-md-3 newsletter">
                <h5>newsletter</h5>
                <form>
                  <input type="text" class="form-control" placeholder="Email Address">
                  <button class="btn btn-primary" type="button">get newsletter</button>
                </form>
              </div>
              <!-- /Col -->
           </div>
           <!-- /Row -->
          </div>
          <!-- /Links -->

        </div>
        <!-- /Container -->
        
        <!-- Bottom -->
        <div class="bottom bshadow-top">
          <!-- Container -->
          <div class="container">
          
            <span class="copy-text">&copy; 2015 Your Corporation. Theme by <a href="#">Rahisi</a> Themes.</span>
            <ul class="payment-methods clearfix">
              <li><asset:image alt="card" src="cards/visa.png"/></li>
              <li><asset:image alt="card" src="cards/paypal.png"/></li>
              <li><asset:image alt="card" src="cards/mastercard.png"/></li>
              <li><asset:image alt="card" src="cards/cirrus.png"/></li>
              <li><asset:image alt="card" src="cards/visa-debit.png"/></li>
            </ul>
            
          </div>
          <!-- /Container -->
        </div>
        <!-- /Bottom -->
      </footer>
      <!-- /Footer
      =================================================== -->
      </div>
      <script type="text/javascript">
			function newConversion() {
				window.location.href = "${createLink(uri: '/contentConverter/createConverter')}";
				
			}

      </script>
  </body>
</html>
