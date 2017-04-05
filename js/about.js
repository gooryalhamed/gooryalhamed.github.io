$('.row .mytext #forward').click(function(){
	showTextForward()
})

// $('.row .mytext #back').click(function(){
// 	showTextBack()
// })

function showTextForward(){
	var html='<p class="mytext">I joined <a href="http://www.re-coded.com/" target="_blank">Re:Coded </a>program on July 2016. My passion for programming prompted me to join this amazing training course. Whithin Re:Coded I learnt many progrmming languages such as HTML, CSS, JS, SQL, RUBY on RAILS and REACT.<br>Re:Coded prepared me to be a full stack web developer. It gave me a new life.<br>I want to practice all the skills I have learned and transform them into real software. I will not stop learning more and more. <i class="fa fa-chevron-circle-left arrow" id="back" onclick="showTextBack()"></i></p>';
	var element = $('.row .mytext');
	// console.dir(window.getComputedStyle(element[0]).animationDelay);
	element[0].style.animationDelay = 0;
	element.html(html);
}

function showTextBack(){
	var html = '<p class="mytext">I studied computer engineering at Damascus university in Syria. I learned to code from the internet. I didn not know how amazing is coding until I watched a video about desiging UI password protected. After that I started to watch more videos and I fell in love with this brilliant science.<br>My first trip was with VBA Access where I developed a small application to manage the database system for shops. <i class="fa fa-chevron-circle-right arrow" id="forward" onclick="showTextBack()"></i></p>';
	$('.row .mytext').html(html);
}