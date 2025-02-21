// Given an array arr[], find the first repeating element. The element 
// should occur more than once and the index of its first occurrence should
//  be the smallest.

function firstRepeated(arr) {
    let res = -1;
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            if (res === -1 || map.get(arr[i]) < res) {
                res = map.get(arr[i]);
            }
        }
        else {
            map.set(arr[i],i+1);
        }
    }
    return res;
} 

let arr = [1, 5, 3, 4, 3, 5, 6];
console.log(firstRepeated(arr));
