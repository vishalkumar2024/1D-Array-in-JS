// Given an array arr, rotate the array by one position in Anti-clockwise 
// direction.

function rotate(arr) {
    let last = arr[0];
    for (let i = 0; i < arr.length - 1; i++) { //TC=O(n)
        arr[i] = arr[i + 1];
    }

    arr[arr.length - 1] = last;
    return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(rotate(arr))

// TC=O(n)
// SC=O(n) --> as I am using the array given