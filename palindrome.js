var isPalindrome = function (x) {
    let lastDigit;
    originalNum = x;
    let reverse = 0;
    if (x < 0) {
        return false;
    }
    
        while (x > 0) {
            lastDigit = x % 10;
            reverse = reverse * 10 + lastDigit;
            x = Math.floor(x / 10);
        }
        if (reverse === originalNum) return true;
        else return false;
 
};
console.log(isPalindrome(202));

// function isPalindrome(x) {
//     // Negative numbers are not palindromes
//     if (x < 0) {
//         return false;
//     }

//     let reversed = 0;
//     let temp = x;

//     // Reverse the number
//     while (temp !== 0) {
//         let digit = temp % 10; // Extract the last digit
//         reversed = reversed * 10 + digit; // Build the reversed number
//         temp = Math.floor(temp / 10); // Remove the last digit
//     }

//     // Check if the original number is equal to the reversed number
//     return reversed === x;
// }

// // Example usage
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(10)); // false
