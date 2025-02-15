// function LargestSubArray(arr, d) {
//     let i = 0;
//     let j = 0;
//     let max = 0;
//     while (j < arr.length) {
//         let sum = 0;
//         for (let k = i; k <= j; k++) {
//             sum += arr[k];
//         }
//         if (sum == d) {
//             max = Math.max(max, j - i+1);
//             i++;
//             j++;
//         }
//         else {
//             j++
//         }
//     }
//     return max
// }
// let arr=[4,1,1,1,2,3,5];
// let d=5
// console.log(LargestSubArray(arr,d));
//Need some improvement





// This code only satisfies the condition for positive array
function LargestSubArray(arr, d) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let maxLength = 0;

    while (j < arr.length) {
        sum += arr[j]; 

        while (sum > d) {
            sum -= arr[i];
            i++;
        }

        if (sum === d) {
            maxLength = Math.max(maxLength, j - i + 1);
        }
        j++; 
    }
    return maxLength;
}

let arr = [4,1,1,1,2,3,4];
let d = 5;
console.log(LargestSubArray(arr, d)); 
