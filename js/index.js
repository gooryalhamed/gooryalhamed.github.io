function printTime() {
	var d = new Date();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	var day = d.getDay();
	var date = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();
	switch (day){
		case 0:
		day = "Sunday";
		break;
		case 1:
		day = "Monday";
		break;
		case 2:
		day = "Tuesday";
		break;
		case 3:
		day = "Wednesday";
		break;
		case 4:
		day = "Thursday";
		break;
		case 5:
		day = "Friday";
		break;
		case 6:
		day = "Saturday";
		break;
	}
	if(hours<10){
		hours = "0" + hours;
	}
	if(mins<10){
		mins = "0" + mins;
	}
	if(secs<10){
		secs = "0" + secs;
	}
	if(hours>12){hours = hours - 12;}
	month = month + 1; document.getElementById("time").innerHTML = hours+":"+mins+":"+secs;
	document.getElementById("date").innerHTML = day + " " + date + "/" + month + "/" + year;
}
setTimeout(printTime, 1);
setInterval(printTime, 1000); /*to repeat executing setTimeout() every 1 sec*/
