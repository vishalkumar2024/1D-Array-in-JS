// Given an array nums containing n distinct numbers in the range [0, n], return
//  the only number in the range that is missing from the array.

// let suppose arr=[1,0,2,3,5] is given where n =5
// we simply have to find that number which is not present b/w 0-n


function missing(arr) {
    let n = arr.length;
    let total = n * (n + 1) / 2
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return (total - sum);
}
let arr = [0, 1, 2, 3, 5];
console.log(missing(arr));

// TC=O(n)
// SC=O(1)

