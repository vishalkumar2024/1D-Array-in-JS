// Given an array arr[]. Rotate the array to the left (counter-clockwise direction)
// by d steps, where d is a positive integer. Do the mentioned change in the array
// in place.

function rotate(arr, d) {
    function swap(arr, start, end) {
        for (let i = start, j = end - 1; i <= j; i++, j--) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
    d = d % arr.length;

    swap(arr, 0, d)   //TC=O(d)+
    swap(arr, d, arr.length)  //TC=O(n-d)+
    swap(arr, 0, arr.length)   //TC=O(n)

    return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let d = 2;
console.log(rotate(arr,d));


// TC=O(2n);
// SC=O(1)