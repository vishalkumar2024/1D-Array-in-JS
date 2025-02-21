// Given an array of integers nums and an integer k,this function returns the total
//  number of subarrays whose sum equals to k.

function subarray(arr, k) {
    let prefixSum = [];  //SC=O(n)
    let count = 0;
    let sum = 0
    // Storing the sum value in prefixSum array
    for (let i = 0; i < arr.length; i++) {  //TC=O(n)
        sum += arr[i];
        prefixSum[i] = sum;
    }

    let map = new Map();
    for (let j = 0; j < arr.length; j++) { //TC=O(n)
        if (prefixSum[j] == k) {
            count++;
        }

        let value = prefixSum[j] - k;
        if (map.has(value)) {
            count = count + map.get(value);
        }

        if (map.has(prefixSum[j])) {
            let currentCnt = map.get(prefixSum[j]);
            map.set(prefixSum[j], currentCnt + 1);
        } else {
            map.set(prefixSum[j], 1);
        }
    }
    return count;
}
arr = [4, -1, 4, -2, 2];
console.log(subarray(arr, 3));


// TC=O(n)
// SC=O(n) 