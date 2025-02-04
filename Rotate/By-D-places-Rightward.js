// let arr=[1,2,3,4,5,6,7]
let arr=[3,99,-1,-100]
d=2

// let d = 5;
let l = arr.length;
let res = []

for (let i = 0; i < l - d; i++) {
   res.push(arr[i]);
}
console.log(res)


for (let j = 0; j < d; j++) {
   arr[j] = arr[l - d + j];
}
console.log(arr)


for (let k = 0; k < l - d; k++) {
   arr[d+k] = res[k]
}
console.log(arr);

// TC=O(l-d)
// SC=O(d)  