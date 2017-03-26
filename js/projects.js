$('').click(function(){
	
})

function loadProjects(token){
	$.ajax({
		url:'',
		type:'GET'
		dataType:jsonp,
		beforeSend: function(xhr) {
     		xhr.setRequestHeader("Authorization", "token " + token);
    	},
		success:function(data){
			showProjects(data)
		},
		fail:showError2
	})
}
function showProjects(){

}
function showError(){

}