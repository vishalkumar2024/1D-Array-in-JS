
function rearrangeArray(arr) {
    let res = [];      //SC=O(n)
    let posiIdx = 0;
    let negaIdx = 1;
    for (let i = 0; i < arr.length; i++) {      // O(n)
        if (arr[i] >= 0) {
            res[posiIdx] = arr[i];
            posiIdx += 2;
        }
        else {
            res[negaIdx] = arr[i];
            negaIdx += 2;
        }
    }
    return res;
}
let arr = [9, 4, -2, -1, 5, 0, -5, -3, 2 ,10, 11, 12]
console.log(rearrangeArray(arr));

// TC=O(n)
// SC=O(n) 