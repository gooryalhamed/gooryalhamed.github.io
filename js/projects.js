$('.container #current').click(function(){
	loadProjects();
})
function loadProjects(token){
	$.ajax({
		url:'https://api.github.com/users/gooryalhamed/repos?sort=created',
		type:'GET',
		dataType:'json',
		success:function(data){
			showProjects(data)
		},
		fail:showError
	})
}
function showProjects(json){
	var data = json.slice(0,5);
	var html = '';
	html+= '<div>';
	$.each(data,function(i,item){
		html+= '<h3>' + item.name+'</h3>'
		html+= item.html_url;
	});
	$('.container .panel .panel-body').append(html);
}
function showError(error){
	$('.container .error').html(`${error}`);
}