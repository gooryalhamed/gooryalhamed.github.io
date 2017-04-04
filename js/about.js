$('.row #text i').click(function(){
	showText()
})

function showText(){
	var str = $('#secondp').text()
	$('.row .mytext').html(str)
}
