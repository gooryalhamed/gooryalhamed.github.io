$(document).ready(function(){
	loadProjects();
	onClickCurrent();
});

function onClickCurrent(){
	$('.container #current').click(function(event){
		loadProjects();
		event.preventDefault();
	});	
} 
function onClickFavorite(){
	$('.container #favorite').click(function(event){
		loadFavProjects();
		event.preventDefault();
	});	
} 

function loadProjects(){
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
		html+= '<a href="'+item.html_url+'" target="_blank">'+item.name+'</a>';
		html+= '<br>'
	});
	$('.container .panel .panel-body').append(html);
}
function showError(error){
	$('.container .error').html(`${error}`);
}
/* favorite */
function loadFavProjects(){
	$.ajax({
		url:'',
		type:'GET',
		dataType:'json',
		success: function(){
			showFavProjects();
		},
		fail:showError
	})
}
function showFavProjects(){

}
