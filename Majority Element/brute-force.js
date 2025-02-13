// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2



function majorityElement(arr) {
    let mid = Math.floor(arr.length / 2);
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }

    for (let key in obj) {
        if (obj[key] > mid) {
            return Number(key);
        }
    }
}
let arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(arr));

// TC=O(n)
// SC=O(n)