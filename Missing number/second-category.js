// Given an array nums containing n distinct numbers in the range [1, n], return
//  the only number in the range that is missing from the array.

// let suppose arr=[1,0,2,3,5] is given where n =5
// we simply have to find that number which is not present b/w 1-n


function missingNumber(arr) {
    let n = arr.length + 1;
    let total = n * (n + 1) / 2;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return total - sum;
}
let arr = [1, 3, 4, 5]
console.log(missingNumber(arr));