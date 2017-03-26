function loadSkills(){
	$.ajax({
		url:'../skills.json',
		type:'GET'
		dataType:json,
		success:function(data){
			showSkills(data)
		},
		fail:showError
	})
}
function showSkills(json){
	var data = JSON.stringify(json);
	var html =''
	html+= '<ul>'
	for(i=0;i<data.length;i++){
		html += '<li>'
		html+ ='<h2>'+ data[i].name + '</h2>'
		html+= '<p>' + data[i].desc + '</p>'
		html+= '</li>'
	}
	html+ = '</ul>'
	$('.container .success').html(html)
}
function showError(error){
	$('.container .error').html(`${error}`);
}