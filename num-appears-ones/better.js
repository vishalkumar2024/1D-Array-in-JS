function appearOnes(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++
        }
    }

    for (let key in obj) {
        if (obj[key] == 1) {
            return key;
        }
    }
}
let arr = [4, 1, 2, 1, 2];
console.log(appearOnes(arr));
// TC=O(n+n)
// SC=O(n)