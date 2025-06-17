// Given an integer array, move all 0's to the end of it while maintaining the
// relative order of the non-zero elements.


function move(arr) {
    let countZero = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] == 0) {
            countZero++;
            arr.splice(i, 1);
        }
        else {
            i++
        }
    }
    for (let i = 0; i < countZero; i++) {
        arr.push(0)
    }
    return arr
}
let arr = [0, 1, 0, 3, 12];
console.log(move(arr));

// TC=O(2n)
// SC=O(1)
