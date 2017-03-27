$(document).ready(function(){
	loadPlaylist();
})
 function loadPlaylist(){
 	$.ajax({
 		url:'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyCdCswuvxVV4Qyif3OmX614mmy7MY07b9Y&playlistId=PL1CME6_KVTbRVnak-i_Zy8jcyr0jbXAD-',
 		type:'GET',
 		dataType:'json',
 		success: function(){
 			showPlaylist();
 		},
 		fail: showError;
 	})
 }
 function loadPlaylist(){
 	var html= '';
 	html+= '<ul>'
 	$.each(,function(){

 	});
 	$().html(html);
 }
