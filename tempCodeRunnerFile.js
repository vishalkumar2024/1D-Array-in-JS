function isPalindrome(arr) {
    let i = 0;
    let j = arr.length-1;
    while (i <= j) {
        if (arr[i] !== arr[j]) {
            return false
        }
        i++;
        j--;
    }
    return true
}
let arr = [1,2,3,3, 