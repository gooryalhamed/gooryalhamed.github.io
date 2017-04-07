var url='https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyCdCswuvxVV4Qyif3OmX614mmy7MY07b9Y&playlistId=PL1CME6_KVTbRVnak-i_Zy8jcyr0jbXAD-';
$.ajax({
	url:url,
	type:'GET',
	dataType:'json',
	success: function(data){
		const template = Handlebars.compile($('#videos-template').html())
		$('#videos-container').html(template(data))
	}
