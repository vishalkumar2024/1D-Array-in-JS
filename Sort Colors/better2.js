// Given an array nums with n objects colored red, white, or blue, sort them 
// in-place so that objects of the same color are adjacent, with the colors in
//  the order red, white, and blue. We will use the integers 0, 1, and 2 to
//  represent the color red, white, and blue, respectively. You must solve this
//  problem without using the library's sort function.

function sortColors(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            res.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            res.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 2) {
            res.push(arr[i]);
        }
    }
    return res;
}
let arr = [2, 0, 0, 2, 1, 0, 2];
console.log(sortColors(arr));

// TC=O(3*n)
// SC=O(n) 