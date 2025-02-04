// let suppose arr=[1,2,3,5] is given where n =5
// we simply have to find that number which is not present b/w 1-n


let arr = [0,1, 2, 3, 5];
let n = 5;
let total = n * (n + 1) / 2
// console.log(total)
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

}
let result = total - sum;
console.log(result)

// TC=O(n)
// SC=O(1)