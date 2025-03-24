function moveZero(arr) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (let i = 0; i < arr.length; i++) {  //O(k)
        if (arr[i] == 0) {
            j = i;  // J will always be at zero
            break;
        }
    }
    for (let i = j + 1; i < arr.length; i++) {   //O(n-k)
        if (arr[i] > arr[j]) {
            swap(arr, i, j);
            j++;
        }
    }
    return arr;
}
let arr = [1,0,0,2,0];
console.log(moveZero(arr));

// TC=O(n)  --> O(k)+O(n-k)
// SC=O(1)


