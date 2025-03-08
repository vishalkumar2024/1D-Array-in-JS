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

        return reverse===originalNum?true:false
};
console.log(isPalindrome(2092));

