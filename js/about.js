$('.row .mytext #forward').click(function(){
	showText2()
})
$('.row .mytext #back').click(function(){
	showText1()
})
function showText2(){
	$('.row #firstp').hide()
	$('.row #secp').removeClass("hidden");
}
function showText1(){
	$('.row #secp').addClass("hidden");
	$('.row #firstp').removeClass("fadein").show()
}
