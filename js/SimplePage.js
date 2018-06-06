//var message = prompt("Enter your name here");
var content = document.getElementById("time");
//content.textContent = "Welcome "+message;
var sort = document.getElementById("sort");

function displayDate() {
    var time = new Date().toLocaleTimeString();
    content.textContent = time;
}
setInterval(displayDate, 1000);

(function () {
    var array = [25,10,45,16,9,100];
    var temp;
    var flag;
    do {
        arraySort();
    } while(flag);
    function arraySort() {
        flag = false;
        for (var i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                flag = true;
            }
        }
    }
    sort.textContent = array;
})();