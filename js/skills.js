$(document).ready(function(){
	var content = $('#skills-container');
	var html = $('#skills-template');
	var template = Handlebars.compile(html);
	var data = $.get('../skills.json')
	content.html() = template(data);
})