// Maximum subArray of size d

function maxSubArray(arr,d){
    let i=0,j=0;
    let sum=0
    let maxSum=Number.MIN_VALUE;

    while(j<arr.length){
        sum+=arr[j];
        if(j-i+1<d){
            j++
        }
        else if(j-i+1==d){
            maxSum=Math.max(sum,maxSum);
            sum=sum-arr[i];
            i++;
            j++
        }
    }
    return maxSum;
}

let arr=[-2,3,-5,6,4,3,4,6,-4,3,3,-4,0];
let d=3;
console.log(maxSubArray(arr,d));

// TC=O(n)
// SC=O(1)