var interval = setInterval(countDown, 1000);





function countDown() {

var now = new Date().getTime();

var time = new Date().toLocaleDateString();

var dest = new Date("Jan 1, 2038 00:00:00").getTime();

var diff = dest - now;

var days = Math.floor(diff / (1000* 60*60*24));


var hours = Math.floor((diff % (1000* 60*60*24)) / (1000 * 60 * 60));

var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

var seconds = Math.floor((diff % (1000 * 60)) / 1000);

document.getElementById("down").innerHTML = days + " Days " + hours + " Hours " + seconds + " Seconds";

}

