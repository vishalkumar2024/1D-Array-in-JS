// function leader(arr) {
//     let res = []
//     for (let i = 0; i < arr.length;) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 break
//                 i++
//             }

//         }
//     }
//     return res;
// }
// let arr = [16, 17, 4, 3, 5, 2] // [17, 5, 2]
// console.log(leader(arr))


function leader(arr) {
    let n = arr.length;
    let res = [];
    res.push(arr[n - 1]);
    let max = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {  //TC=O(n)
        if (arr[i] >= max) {
            max = arr[i];
            res.push(arr[i]);
        }
    }
    let i = 0;
    let j = res.length - 1;
    while (i <= j) {         //TC=O(n/2)
        let temp = res[i];
        res[i] = res[j];
        res[j] = temp;
        i++;
        j--;
    }
    return res;
}
let arr = [10, 4, 2, 4, 1]
console.log(leader(arr))

// TC=O(n)
// SC=O(n)
