
// // let a=[2,2,3,4,5]
// // let b=[1,1,2,3,4];
// // let union=[];
// // // for(let i=0;i<a.length;i++){
// // //    union.push(a[i]);
// // // }
// // for(let i=0;i<a.length;i++){
// //     for(let j=0;j<b.length;j++){
// //         if(a[i]==b[j]){
// //             union.push(b[i]);
// //         }
// //     }
// // }
// // console.log(union);

// // let a=[2,2,3,4,5]
// // let b=[1,1,2,3,4];


// // for(let i=0;i<a.length;i++){

// // }


// // let a = [1, 3,3,3,3,3,4, 5];
// // let b = [2, 3,3, 4];

// // let res = [];
// // large = a.length > b.length ? a.length : b.length;

// // let i = 0;
// // let j = 0;

// // while (i < a.length && j < b.length) {
// //     if (a[i] < b[j]) {
// //         res.push(a[i]);
// //         i++
// //     }
// //     else if (b[j] < a[i]) {
// //         res.push(b[j]);
// //         j++
// //     }
// //     else if (a[i] == b[j]) {
// //         res.push(a[i]);
// //         if(a[i+1]==a[i])i++;
// //         if(b[j+1]==b[j]) j++;
// //         i++;
// //         j++;
// //     }

// // }
// // while(i<a.length){
// //   res.push(a[i]);
// //   i++
// // }
// // while(j<b.length){
// //     res.push(a[j]);
// //     j++
// // }
// // console.log(res)





// // let a = [1, 3, 3, 4, 5];
// // let b = [2, 3, 4];

// // let res = [];
// // for (let i = 0; i < a.length; i++) {
// //     res.push(a[i]);
// // }
// // for (let j = 0; j < b.length; j++) {
// //     res.push(b[j]);
// // }
// // res.sort();
// // console.log(res);

// // for (let i = 0; i < res.length; i++) {
// //     if(res[i]==res[i+1])
// // }




// function unionSortedArrays(arr1, arr2) {
//     let i = 0, j = 0; 
//     let result = []; 
//     let lastInserted = null; // To avoid duplicates

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             if (lastInserted !== arr1[i]) { // Avoid duplicates
//                 result.push(arr1[i]); 
//                 lastInserted = arr1[i];
//             }
//             i++; 
//         } 
//         else if (arr1[i] > arr2[j]) {
//             if (lastInserted !== arr2[j]) {
//                 result.push(arr2[j]); 
//                 lastInserted = arr2[j];
//             }
//             j++; 
//         } 
//         else { // Both are equal
//             if (lastInserted !== arr1[i]) { 
//                 result.push(arr1[i]); 
//                 lastInserted = arr1[i];
//             }
//             i++; 
//             j++; 
//         }
//     }

//     // Add remaining elements of arr1
//     while (i < arr1.length) {
//         if (lastInserted !== arr1[i]) {
//             result.push(arr1[i]);
//             lastInserted = arr1[i];
//         }
//         i++;
//     }

//     // Add remaining elements of arr2
//     while (j < arr2.length) {
//         if (lastInserted !== arr2[j]) {
//             result.push(arr2[j]);
//             lastInserted = arr2[j];
//         }
//         j++;
//     }

//     return result;
// }

// let arr1 = [1, 2, 4, 5, 6];
// let arr2 = [2, 3,3,3,3,3,3, 5, 7];

// console.log(unionSortedArrays(arr1, arr2)); 
// // Output: [1, 2, 3, 4, 5, 6, 7]


let a = [1, 2, 4, 5, 6];
let b = [2, 3, 3, 3, 3, 3, 3, 5, 7,23];

let res = [];
let lastItem = null;

let i = 0;
let j = 0;

while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
        if (lastItem !== a[i]) {
            res.push(a[i]);
            lastItem = a[i];
        }
        i++
    }
    else if (b[j] < a[i]) {
        if (lastItem !== b[j]) {
            res.push(b[j]);
            lastItem = b[j];
        }
        j++
    }
    else {
        if (lastItem !== a[i]) {
            res.push(a[i]);
            lastItem = a[i];
        }
        i++;
        j++;
    }
}

while (i < a.length) {
    if (lastItem !== a[i]) {
        res.push(a[i]);
        lastItem = a[i];
    }
    i++
}

while (j < b.length) {
    if (lastItem !== b[j]) {
        res.push(b[j]);
        lastItem = b[j];
    }
    j++
}
console.log(res);