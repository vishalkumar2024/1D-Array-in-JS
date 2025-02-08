// // Maximum of all subArrays in res[];

// function firstNegative(arr, d) {
//     let i = 0;
//     let j = d - 1;
//     let res = [];
//     while (j < arr.length) {
//         let max = Number.MIN_VALUE
//         for (let k = i; k <= j; k++) {
//             if (arr[k] > max) {
//                 max = arr[k]
//             }
//         }
//         res.push(max);
//         i++;
//         j++;
//     }
//     return res;
// }
let arr = [120, -1, 17, 8, -16, 20, 23, 39];
// let d = 3;
// console.log(firstNegative(arr, d))

// // TC=O(n*k)
// //SC=O(n)

function abc(arr, d) {
    let i = 0;
    let res=[]
    let count=0;
    while (i <= arr.length - d) {
        let max = Number.MIN_VALUE;
        while (count < d) {
            if (arr[count + i] > max) {
                max = arr[count + i];
            }
            count++;
        }
        res.push(max);
        count = 0;
        i++;
    }
    return res
}

console.log(abc(arr,3))