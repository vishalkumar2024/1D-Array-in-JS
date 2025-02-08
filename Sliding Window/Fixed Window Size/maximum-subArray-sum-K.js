let arr=[-2,3,-5,6,4,3,4,6,-4,3,3,-4,0];
let d=3;

let i=0;
let j=d-1;
let maxSum=Number.MIN_VALUE;

while(j<arr.length){
    let sum=0
    for(let k=i;k<=j;k++){
        sum+=arr[k];
        maxSum=Math.max(maxSum,sum);
    }
    i++;
    j++;
}

console.log(maxSum);


// TC=O(n+k)
// SC=O(1)