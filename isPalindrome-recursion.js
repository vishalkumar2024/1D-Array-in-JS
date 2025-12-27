
function isPalindrome(str, i, j) {
    if (str[i] != str[j]) return false;
    if (i >= j) return true;
    return isPalindrome(str, i + 1, j - 1);
}

let str = "psvsp";
let n = str.length;
console.log(isPalindrome(str, 0, n - 1))
