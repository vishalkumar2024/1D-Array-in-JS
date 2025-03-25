function appearOnes(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let res = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == res) {
                count++;
            }
        }
        if (count == 1) {
            return res;
        }
    }

}

// function appearOnes(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let res=false;
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i]==res){
//                 res=true;
//                 break;
//             }
//         }
//     }
// }
let arr = [4, 1, 2, 1, 4, 7, 2];
console.log(appearOnes(arr));


// TC=O(n*n)
// SC=O(1)