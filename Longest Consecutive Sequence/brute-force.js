
//Leetcode 128
function sequence(arr) {
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        let max = arr[i];

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === max + 1) { // Find next number in sequence
                count++;
                max = arr[j] // Move to the next expected number
                j = -1; // Restart inner loop to find the next number
            }
        }

        maxLength = Math.max(maxLength, count);
    }

    return maxLength;
}

let arr = [102, 4, 100, 1, 101, 3, 2];
console.log(sequence(arr));  // Expected output: 4 (1,2,3,4)
