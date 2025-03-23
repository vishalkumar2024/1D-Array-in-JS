
function duplicate(arr) {
    let res = [];
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            res.push(arr[i]);
        }
        else {
            map.set(arr[i]);
        }
    }
    return res;
}

let arr = [2, 3, 4, 3, 2, 5];
console.log(duplicate(arr));

// TC=O(n)+O(n)
// SC=O(n)