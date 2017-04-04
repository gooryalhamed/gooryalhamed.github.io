$('.row .mytext i').click(function(){
	if($(this).attr('id')=="forward"){
		showText1()
	}else if($(this).attr('id')=="back"){
		showText2()
	}
})

function showText1(){
	var str = $('#secondp').text();
	$('.row .mytext').html(str);
}

function showText2(){
	var str = $('.row #firstp').text();
	$('.row .mytext').html(str);
}