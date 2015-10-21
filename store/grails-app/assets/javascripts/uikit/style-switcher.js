$().ready(function() {

  var path = "assets/uikit/switcher/switcher.code";
  
  $.ajax({
  crossOrigin: true,
  url: path,
  dataType: "html",
  success: function(data) {
    $("body").append(data);
  },
  error: function(err) {
    console.log(err.statusText);        
  }
});

});