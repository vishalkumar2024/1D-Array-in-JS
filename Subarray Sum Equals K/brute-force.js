// Given an array of integers nums and an integer k,this function returns the total
//  number of subarrays whose sum equals to k.

function subarray(arr, k) {
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        let sum=0;
        for (let j = i; j < arr.length; j++) {
            sum+=arr[j];
            if(sum==k){
                count++;
            }
        }
    }
    return count;
}
arr = [1, 2, 5, 4, 2, 1, 3, 5, 2];
console.log(subarray(arr, 7));


// TC=O(n*n)
// SC=O(1)