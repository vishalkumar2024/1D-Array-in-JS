
// -------  Brute Force pproach  -------//

// let arr=[3,5,7,38,15,12,4];
// let target=15;

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==target)
//             console.log(arr[i],arr[j]);
//     }
// }

//--------  Two pointer approach  ---------//

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let target = 8;

// let i = 0;
// let j = arr.length - 1;
// while (i <= j) {
//     if (arr[i] + arr[j] == target) {
//         console.log(arr[i], arr[j]);
//         break;
//     }
//     else if (arr[i] + arr[j] > target) j--
//     else if (arr[i] + arr[j] < target) i++
// }

// Using for loop//

// for (let i = 0, j = arr.length - 1; i <= j;) {
//     if (arr[i] + arr[j] == target) {
//         console.log(arr[i], arr[j]);
//         break;
//     }
//     else if (arr[i] + arr[j] > target) j--
//     else if (arr[i] + arr[j] < target) i++
// }
