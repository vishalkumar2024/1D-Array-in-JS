//--------  Two pointer approach  ---------//

//constraint is that Array should be sorted here

function twoSum(arr, target) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (arr[i] + arr[j] == target) {
            return [i, j];
        }
        else if (arr[i] + arr[j] > target) j--
        else i++
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 8;
console.log(twoSum(arr, target));



// Using for loop//

// function twoSum(arr, target) {
//     for (let i = 0, j = arr.length - 1; i <= j;) {
//         if (arr[i] + arr[j] == target) {
//             return [i,j];
//         }
//         else if (arr[i] + arr[j] > target) j--
//         else i++
//     }
// }

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let target=8;
// console.log(twoSum(arr1, target));