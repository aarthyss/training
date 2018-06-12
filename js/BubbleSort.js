var bubblesort = document.getElementById("bubblesort");
function bubbleSort(array){
    var temp;
    var flag;
    do {
        sort();
    } while(flag);
    function sort() {
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
    bubblesort.textContent = array;
}
