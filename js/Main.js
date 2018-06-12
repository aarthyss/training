var content = document.getElementById("time");
//var message = prompt("Enter your name here");
//content.textContent = "Welcome "+message;
var array = [25,10,45,16,9,100];

function displayDate() {
    var time = new Date().toLocaleTimeString();
    content.textContent = time;
}
setInterval(displayDate, 1000);

insertionSort(array);
bubbleSort(array);