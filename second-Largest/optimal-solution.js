
//This function finds the second largest number in an array
function secondLarge() {
    let large = arr[0];
    let sLarge = -1;

    for (let i = 0; i < arr.length; i++) { //TC=O(n)
        if (arr[i] > large) {
            sLarge = large;
            large = arr[i];
        }
        else if (arr[i] > sLarge && arr[i] != large) {
            sLarge = arr[i];
        }
    }
    if (sLarge < 0) return -1;
    else return sLarge;
}
let arr = [12, 5, 3, 8, 5];
console.log(secondLarge(arr));

// TC=O(n)
// SC=O(1)