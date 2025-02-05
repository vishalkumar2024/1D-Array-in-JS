let arr = [1, 2, 3, -4, 5, 6];
let maxSum=Number.MIN_VALUE;
let target=5;
for (let i = 0; i < arr.length; i++) {
    let sum=0;
    for (let j = i; j < arr.length; j++) {
        sum+=arr[j];
        maxSum=Math.max(sum,maxSum);
    }
}

console.log(maxSum);

// let maxSum=Math.max();
// console.log(maxSum);
