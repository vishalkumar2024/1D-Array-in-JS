//Only valid for array which has positive elements 
function subarray(arr, k) {
    let count=0,sum = 0;
    let i = 0;
    let j = 0;
    while (j < arr.length) {
        sum += arr[j];
        while (sum > k) {
            sum = sum - arr[i];
            i++;
        }
        if (sum == k) {
            count++;
        }
        j++
    }
    return count;
}
arr = [1, 2, 5, 4, 2, 1, 3, 5, 2];
console.log(subarray(arr, 7));

// TC=O(n)
// SC=O(1)
