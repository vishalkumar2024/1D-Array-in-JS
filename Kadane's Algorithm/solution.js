function kadaneSolution() {
    sum = 0;
    maxi = -Infinity
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        maxi = Math.max(maxi, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxi
}
let arr = [-4, 3, -1, -6, 4, 3, -19]
console.log(kadaneSolution(arr));