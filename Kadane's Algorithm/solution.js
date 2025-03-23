// Given an integer array arr, find the contiguous subarray (containing
// atleast one number) which has the largest currSum and returns its currSum and prints the subarray.

function kadaneSolution() {
    currSum = 0;
    maxSum = -Infinity
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        maxSum = Math.max(maxSum, currSum);
        if (currSum < 0) {
            currSum = 0;
        }
    }
    return maxSum;
}
let arr = [-4, 3, -1, -6, 4, 3, -19]
console.log(kadaneSolution(arr));
 
// TC=O(n)
// SC=O(1)