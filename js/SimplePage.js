//var message = prompt("Enter your name here");
var content = document.getElementById("time");
//content.textContent = "Welcome "+message;

function displayDate() {
    var time = new Date().toLocaleTimeString();
    content.textContent = time;
}
setInterval(displayDate, 1000);