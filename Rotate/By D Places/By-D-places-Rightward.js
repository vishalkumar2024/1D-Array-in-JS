function rotate(arr, d) {
   let l = arr.length;
   let res = [];

   for (let i = 0; i < l - d; i++) {
      res.push(arr[i]);
   }

   for (let j = 0; j < d; j++) {
      arr[j] = arr[l - d + j];
   }

   for (let k = 0; k < l - d; k++) {
      arr[d + k] = res[k]
   }
   return arr
}
let arr = [3, 99, -1, -100]
d = 2;
console.log(rotate(arr, d));

// TC=O(l-d)
// SC=O(d)  