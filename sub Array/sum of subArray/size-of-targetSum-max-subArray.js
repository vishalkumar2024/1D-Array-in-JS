// This function returns the size of that largest subArray whose sum is 
// equals to target.

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
