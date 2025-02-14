//--------  Two pointer approach  ---------//

//constraint is that Array should be sorted

function twoSum(arr, target) {
    let i = 0;
    let j = arr.length - 1;
    let res = [];
    while (i <= j) {
        if (arr[i] + arr[j] == target) {
            res.push(arr[i], arr[j]);
            break;
        }
        else if (arr[i] + arr[j] > target) j--
        else if (arr[i] + arr[j] < target) i++
    }
    return res;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 8;
console.log(twoSum(arr, target));



// Using for loop//

// function twoSum(arr, target) {
//     let res=[];
//     for (let i = 0, j = arr.length - 1; i <= j;) {
//         if (arr[i] + arr[j] == target) {
//             res.push(arr[i], arr[j]);
//             break;
//         }
//         else if (arr[i] + arr[j] > target) j--
//         else if (arr[i] + arr[j] < target) i++
//     }
//     return res;
// }

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let target=8;
// console.log(twoSum(arr1, target));