function sLarge(arr) {
    let large = arr[0];
    for (let i = 0; i < arr.length; i++) { //TC=O(n)
        if (arr[i] > large) {
            large = arr[i];
        }
    }

    let secondLarge = -1;
    for (let i = 0; i < arr.length; i++) {  //TC=O(n)
        if (arr[i] >= secondLarge && arr[i] != large) {
            secondLarge = arr[i];
        }
    }
    return secondLarge;
}
let arr = [3, 5, 3, 6, 1, 5];
console.log(sLarge(arr));

// TC=O(n+n)
// SC=O(1)