let arr = [4,6,3,5,31,6];

// sort it
// arr = [3, 4, 5, 6, 31, 31]

let largest = arr[arr.length - 1];
let sLarge = -1
for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] != largest) {
        sLarge = arr[i];
        break;
    }
}
console.log(sLarge)