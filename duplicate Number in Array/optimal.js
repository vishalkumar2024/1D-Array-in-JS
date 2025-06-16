// Given an array arr of integers, find all the elements that occur more than 
// once in the array. If no element repeats, return an empty array.

function duplicate(arr) {
    let res = [];
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            res.push(arr[i]);
        }
        else {
            map.set(arr[i]);
        }
    }
    return res;
}

let arr = [2, 3, 4, 3, 2, 5];
console.log(duplicate(arr));

// TC=O(n)
// SC=O(n)