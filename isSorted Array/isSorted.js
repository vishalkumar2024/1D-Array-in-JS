function isSorted(arr, n) {
    let bool = true;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            bool = false;
            break;
        }
        else {
            bool = true;
        }
    }
    if (bool == true) return "sorted";
    else return "unsorted"
}
const arr = [1,1,2,3];
console.log(isSorted(arr, arr.length))