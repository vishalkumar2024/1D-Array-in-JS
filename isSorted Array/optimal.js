function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false
    }
    return true;
}
arr = [10, 20, 30, 40, 50]
console.log(isSorted(arr));

// TC=O(n)
// SC=O(1)