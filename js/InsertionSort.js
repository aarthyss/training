var insertionsort = document.getElementById("insertionsort");
function insertionSort(array) {
    var temp;
    for(var i = 0; i < array.length; i++) {
        for(var j = i; j <= i && j>-1; j--) {
            if(array[i] < array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                i--;
            }
        }
    }
    insertionsort.textContent = array;
}