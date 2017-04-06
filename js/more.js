var url='https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyCdCswuvxVV4Qyif3OmX614mmy7MY07b9Y&playlistId=PL1CME6_KVTbRVnak-i_Zy8jcyr0jbXAD-';
var request = new XMLHttpRequest();
request.open('GET', url);
request.onload = function(){
	if (request.status >= 200 && request.status < 400){
		var ourData = JSON.parse(request.responseText);
		createHTML(ourData);
	}else{
		console.log("unable to retrieve data");
	}
}
request.send();
function createHTML(data){	
	var rowTemplate = document.getElementById("videos-template").innerHTML;
	var compiledTemplate = Handlebars.compile(rowTemplate);
	var ourGeneratedHTML = compiledTemplate(data);
	document.getElementById("videos-container").innerHTML = ourGeneratedHTML;
}
