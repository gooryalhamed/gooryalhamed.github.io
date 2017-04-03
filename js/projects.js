$(document).ready(function(){
	loadProjects();
	onClickCurrent();
	onClickFavorite()
});

function onClickCurrent(){
	$('.container #current').click(function(event){
		loadProjects();
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
		html+= '<span> created at ' +item.created_at + '</span>'
		html+= '<br>'
	});
	html+='</div>'
	$('.container .panel .panel-body').html(html);
}
function showError(error){
	$('.container .error').html(`${error}`);
}
/* favorite */
function onClickFavorite(){
	$('.container #favorite').click(function(event){
		loadPinnedRepos();
		event.preventDefault();
	});
}
function loadPinnedRepos(){
	$.ajax({
		url:'https://gh-pinned-repos.now.sh/?username=gooryalhamed',
		type:'GET',
		dataType:'json',
		success:function(data){
			showPinnedRepos(data);
		}
	});
}
function showPinnedRepos(data){
	var html='';
	html+= '<div>';
	$.each(data,function(i,item){
		html+= '<h2>'+item.repo+'</h2>';
		html+= '<span> created at ' +item.language + '</span>'
		html+= '<br>'
	});
	html+='</div>'
	$('.container .panel .panel-body').html(html);
}
