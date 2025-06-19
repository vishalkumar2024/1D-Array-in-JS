// Leetcode 189
// Given an integer array nums, rotate the array to the right by d steps, where d
// is non-negative.

function solution(arr, d) {  
    for (let i = 0; i < d; i++) {  //TC=O(n)
        arr.unshift(arr.pop());  //TC=O(n)
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7], d = 3
// Output: [5,6,7,1,2,3,4]
console.log(solution(arr, d));

// TC=O(n*n)
// SC=O(1)