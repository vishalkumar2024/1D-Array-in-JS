// Given an array arr[]. Rotate the array to the left (counter-clockwise direction)
// by d steps, where d is a positive integer. Do the mentioned change in the array
// in place.

function solution(arr, d) {
    for (let i = 0; i < d; i++) { //TC=O(n)
        arr.push(arr.shift())  //TC=O(n)
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7], d = 3
// Output: [5,6,7,1,2,3,4]
console.log(solution(arr, d));

// TC=O(n*n)
// SC=O(1)