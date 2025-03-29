let arr = [34,44,67,7,43,34];
let low=arr[0];
for (let i = 0; i < arr.length; i++) {
    if ( arr[i]<low ) {
        low = arr[i];
    }
}

console.log(`The lowest number in arr is ${low}`)
// console.log(Math.min(...arr))

