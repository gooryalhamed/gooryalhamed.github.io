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
$('.custom-header .collapse ul li #skills').click(function(){
	loadSkills();
});
function loadSkills(){
	$.ajax({
		url:"../skills.html",
		type:"GET"
		dataType:json,
		success:function(data){
			showResults(data)
		},
		fail:showError
	})
}
function showResults(json){
	var arr = json.name
	var html =''
	html+= '<ul>'
	for(i=0;i<arr.length;i++){
		html += '<li>'+ arr[i] +'</li>'
	}
	html+ = '</ul>'
	$('.container success').html(html)
}
function showError(error){
	$('.container .error').html("${error}");
}