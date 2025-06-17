// Given an integer array, move all 0's to the end of it while maintaining the
// relative order of the non-zero elements.

function moveZero(arr) {
    let brr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            brr.push(arr[i]);
        }
    }
    for (let i = brr.length; i <= arr.length - 1; i++) {
        brr[i] = 0;
    }
    return brr;
}
let arr = [1, 0, 0, 2, 3, 2, 0, 0, 4, 5, 1];
console.log(moveZero(arr));

//TC=O(2n) --> O(n)+O(n)
//SC=O(n)

//------- Another way -----//

// function move(arr) {
//     let count=0;
//     let res=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//             count++;
//         }
//         else{
//             res.push(arr[i]);
//         }
//     }
//     for(let i=0;i<count;i++){
//         res.push(0)
//     }
//     return res;
// }
// let arr=[0,1,0,3,12];
// console.log(move(arr));
