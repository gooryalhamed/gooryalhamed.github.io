$(document).ready(function(){
	loadSkills();
})
function loadSkills(){
	$.get('skills.json',function(data){
		var html =''
		html+= '<ul>'
			$.each(data.skills,function(i,res){
		html += '<li>'
		html+='<h2>'+ res.name + '</h2>'
		html+= '<p>' + res.desc + '</p>'
		html+= '</li>'
		html+= '</ul>'
	})
			$('.container #success').append(html)
	});
}