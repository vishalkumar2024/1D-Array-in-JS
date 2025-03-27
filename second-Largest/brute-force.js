// let arr = [4, 6, 3, 5, 31, 6];

// sort it
// arr = [3, 4, 5, 6, 31, 31]
function sLarge(arr) {
    let largest = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] != largest) {
            return arr[i];
        }
    }
    return -1
}
arr = [3, 4, 5, 6, 31, 31];
console.log(sLarge(arr));

// TC=O(nlogn)+O(n)
// SC=O(1)