function RemoveTableRow(handler) {
	var tr = $(handler).closest('tr');

	tr.fadeOut(400, function(){ 
		tr.remove(); 
	}); 

	return false;
};
