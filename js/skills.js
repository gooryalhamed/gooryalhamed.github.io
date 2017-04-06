$(document).ready(function(){
	loadSkills();
})
var ourRequest =new XMLHttpRequest();
ourRequest.open('GET', '../skills.json');
ourRequest.onload = function(){
	if (ourRequest.status >= 200 && ourRequest.status < 400){
		var ourData = JSON.parse(ourRequest.responseText);
		createHTML(ourData);
	}else{
		console.log("unable to retrieve data");
	}
};
ourRequest.onerror = function(){
	console.log("connection error");
}
ourRequest.send();
function createHTML(skillsData){
	var rowTemplate = document.getElementById("skills-template").innerHTML;
	var compiledTemplate = Handlebars.compile(rowTemplate);
	var ourGeneratedHTML = compiledTemplate(skillsData);
	document.getElementById("skills-container").innerHTML = ourGeneratedHTML;
}

