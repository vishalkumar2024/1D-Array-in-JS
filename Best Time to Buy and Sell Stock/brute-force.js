// Leetcode 121 Question

function maxProfit(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] - arr[i] > sum) {
                sum = arr[j] - arr[i]
            }
        }
    }
    return sum;
}
let arr = [7,1,5,3,6,4];
console.log(maxProfit(arr))

// TC=O(n*n)
// SC=O(1)