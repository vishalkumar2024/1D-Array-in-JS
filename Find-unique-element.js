function findUnique(k, arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] == undefined) {
            map[arr[i]] = 1;
        }
        else {
            map[arr[i]]++;
        }
    }
    for (let key in map) {
        if (map[key] != k) {
            return key;
        }
    }
}
let arr= [6, 2, 5, 2, 2, 6, 6];
let k=3;
console.log(findUnique(k,arr));
