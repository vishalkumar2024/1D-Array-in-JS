// This function returns the starting and ending index of that largest
// subArray whose sum is equals to target.

function subarraySum(arr, target) {
    let i = 0, j = 0;
    let sum = 0;
    let maxLength = 0;
    let result = [0, 0];

    while (j < arr.length) {
        sum += arr[j];

        while (sum > target) {
            sum -= arr[i];
            i++;
        }

        if (sum === target) {
            if (j - i + 1 > maxLength) {
                maxLength = j - i + 1;
                result = [i + 1, j + 1];
            }
        }
        j++;
    }

    return maxLength > 0 ? result : -1;
}
let arr = [10, 5, 2, 7, 1, -10]
let target = 15;
console.log(subarraySum(arr, target))  
