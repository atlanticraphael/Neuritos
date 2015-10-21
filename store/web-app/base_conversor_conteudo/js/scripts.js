$(document).ready(function(){
	new APIContentPDF().startContentPDF();
});

$(function() {
	Page.init(new ApiContentHtml().getParameterByName("lastPageView"));
});
