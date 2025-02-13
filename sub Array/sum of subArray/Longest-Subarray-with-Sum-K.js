let arr = [10, 5, 2, 7, 1, -10]
let target = 15;

let maxArray = 0;
for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum == target) {
            maxArray = Math.max(maxArray, j - i + 1);
        }
    }
}

console.log(maxArray);
