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
		fail:showError
	})
}
function showProjects(){

}
function showError(){
	$('.container .error').html(`${error}`);
}