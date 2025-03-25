function appearOnes(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i])+1)
        }
        else {
            map.set(arr[i], 1);
        }
    }

    for (let [key,value] of map) {
        if (value == 1) {
            return key;
        }
    }
}

let arr = [4, 1, 2, 1, 2];
console.log(appearOnes(arr));

// TC=O(n+n)
// SC=O(n)