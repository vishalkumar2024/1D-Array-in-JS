// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.

// Input: arr = [4, 4, 3, 3, 4, 4, 1];
// Output: 4

function majorityElement(arr) {
    let count = 0;
    let mid = Math.floor(arr.length / 2);
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        max = Math.max(max, count);
        if (max > mid) return arr[i]
    }
}
let arr = [4, 4, 3, 3, 4, 4, 1];
console.log(majorityElement(arr))

// TC=O(n*n)
// SC=O(1)