let arr = [1, 2, 3, 4, 5, 6, 7];
let l = arr.length;
var d = 3;
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
console.log(arr);

// TC=O(n+d);
// SC=O(d)  --> Bcuz of last[] array
