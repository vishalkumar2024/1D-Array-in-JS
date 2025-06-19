// Given an array arr, rotate the array by one position in -clockwise direction.

function rotate(arr) {
    let last = arr[arr.length - 1]
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    
    arr[0] = last
    return arr
}
let arr = [1, 2, 3, 4, 5];
console.log(rotate(arr))

// TC=O(n)
// SC=O(n) --> as I am using the array given