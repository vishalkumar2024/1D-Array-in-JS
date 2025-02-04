let arr = [3, 5, 3, 6, 1, 5];

let large = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
        large = arr[i];
    }
}
console.log(large)
let sLarge = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= sLarge && arr[i] != large) {
        sLarge = arr[i];
    }
}
console.log(sLarge);

// Time Complexity= o(2n)