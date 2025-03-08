function findUnique(k, arr) {
    let map = {};                   //SC=O(n/3)
    for (let i = 0; i < arr.length; i++) {  //TC=O(n)
        if (map[arr[i]] == undefined) {
            map[arr[i]] = 1;
        }
        else {
            map[arr[i]]++;
        }
    }
    for (let key in map) {    // TC=O(n/3)
        if (map[key] != k) {
            return key;
        }
    }
}
let arr= [6, 2, 5, 2, 2, 6, 6];
let k=3;
console.log(findUnique(k,arr));

// TC=O(n)
// SC=O(n)