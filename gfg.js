// Input: arr[] = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
// Output: [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]
// function arrange(arr){
//     let present=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==i){
//             present.push(arr[i]);
//         }
//     }
//     return present
// }

// let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
// console.log(arrange(arr));




// function next(arr, start, end) {
//     let i = start;
//     let j = end;
//     while (i <= j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;

//         i++;
//         j--;
//     }
//     return arr;
// }
let arr = [1, 2, 3, 4, 5, 6];
// let st = 0;
// let en = 4;
// console.log(next(arr, st, en));


function swap(arr,a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    console.log("object")
}

function reverse(arr, start, end) {
    let i = start;
    let j = end
    while (i <= j) {
        swap(arr, i, j);
        i++;
        j--;
    }
    return 1
}
console.log(reverse(arr, 0, 4));