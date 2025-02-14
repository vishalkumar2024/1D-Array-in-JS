// let arr = [1, 8, -3, -4, 5, -6];
// let maxSum=Number.MIN_VALUE;
// let target=5;
// for (let i = 0; i < arr.length; i++) {
//     let sum=0;
//     for (let j = i; j < arr.length; j++) {
//         sum+=arr[j];
//         maxSum=Math.max(sum,maxSum);
//     }
// }
// console.log(maxSum);

// TC=O(n*n)
// SC=O(1)



function subarraySum(arr, target) {
    let i = 0, j = 0;
    let sum = 0;
    let maxLength = 0;

    while (j < arr.length) {
        sum += arr[j];

        while (sum > target) {
            sum -= arr[i];
            i++;
        }

        if (sum === target) {
            maxLength = Math.max(maxLength, j - i + 1);
        }

        j++;
    }

    return maxLength;
}
let arr = [1, 2, 3, 7, 5, 2, 5, 6]
let target = 13;
console.log(subarraySum(arr, target));
