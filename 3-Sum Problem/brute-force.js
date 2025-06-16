
// // -------  Brute Force pproach  -------//

function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == target) {
                    return [i,j,k];
                }
            }
        }
    }
}
let arr = [3, 5, 7, 8, 15, 12, 4];
let target = 15;

console.log(twoSum(arr, target));


// TC=O(n*n*n)
// SC=O(1)
