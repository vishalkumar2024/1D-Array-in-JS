// First negative number in every window of size D

function firstNegative(arr, d) {
    let i = 0;
    let j = d - 1;
    let res = [];
    while (j < arr.length) {
        for (let k = i; k < j; k++) {
            if (arr[k] < 0) {
                res.push(arr[k]);
                break;
            }
        }
        i++; 
        j++;
    }
    return res
}
let arr = [12, -1, -7, 8, -16, 30, 23, 3];
let d = 3;
console.log(firstNegative(arr, d))

// TC=O(n*k)
 //SC=O(n)