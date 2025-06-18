// This function returns that element of array which appears only one time 

function appearOnes(arr) {
    let map = new Map();    //SC=O(n)
    for (let i = 0; i < arr.length; i++) {  //TC=O(n)
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], 1);
        }
    }

    for (let [key, value] of map) {  //TC=O(n)
        if (value == 1) {
            return key;
        }
    }
}

let arr = [4, 1, 2, 1, 2];
console.log(appearOnes(arr));

// TC=O(n+n)
// SC=O(n)