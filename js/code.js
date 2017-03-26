$('.container .intro-text .btn-contact').click(function(){
	$('#frm-contact').show();
});
$('#frm-contact span').click(function(){
	$('#frm-contact').hide();
});
$('#frm-contact #success > .close').click(function(){
	//$('#frm-contact #success .alert-danger').hide();
	alert('close')
});

