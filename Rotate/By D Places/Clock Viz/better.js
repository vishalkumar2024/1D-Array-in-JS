// Given an array arr[]. Rotate the array to the left (counter-clockwise direction)
// by d steps, where d is a positive integer. Do the mentioned change in the array
// in place.

function rotate(arr, d) {
    let l = arr.length;
    d = d % l;
    let last = [];
    for (let j = 0; j < d; j++) {
        last.push(arr[j])
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[d + i]

    }

    for (let k = 0; k < d; k++) {
        arr[l - d + k] = last[k]
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(arr, 2))

// TC=O(n+d);
// SC=O(d)  --> Bcuz of last[] array
