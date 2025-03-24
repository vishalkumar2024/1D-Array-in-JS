// Given an array arr of integers, find all the elements that occur more than once
//  in the array. If no element repeats, return an empty array.
function duplicate(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                res.push(arr[i]);
                break;
            }
        }
    }
    return res
}
let arr = [2, 3, 1, 2, 3]
console.log(duplicate(arr));

// TC=O(n*n)
// SC=O(n)