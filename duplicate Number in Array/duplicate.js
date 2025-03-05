
function duplicate(arr) {
    n = arr.length;
    let obj = {};
    for (let i = 0; i < n; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++
        }
    }

    let res = [];
    for (let value in obj) {
        if (obj[value] > 1) {
            res.push(value);
        }
    }
    return res.map(Number);
}

let arr = [2, 3, 4, 3, 2, 5];
console.log(duplicate(arr));

// TC=O(n)+O(n)
// SC=O(n)