// Given an array nums with n objects colored red, white, or blue, sort them 
// in-place so that objects of the same color are adjacent, with the colors in
// the order red, white, and blue. We will use the integers 0, 1, and 2 to
// represent the color red, white, and blue, respectively. You must solve this
// problem without using the library's sort function.

function sortColors(arr) {
    let count0 = 0, count1 = 0, count2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) count0++
        if (arr[i] == 1) count1++
        if (arr[i] == 2) count2++
    }

    for (let j = 0; j < count0; j++) {
        arr[j] = 0
    }
    for (let j = count0; j < count0 + count1; j++) {
        arr[j] = 1
    }
    for (let j = count0 + count1; j < arr.length; j++) {
        arr[j] = 2
    }
    return arr
}
let arr = [2, 0, 0, 2, 1, 0, 2, 2, 2, 0, 1, 1, 0, 2, 2, 1, 1, 0];
console.log(sortColors(arr));

// TC=O(2n)
// SC=O(1) 