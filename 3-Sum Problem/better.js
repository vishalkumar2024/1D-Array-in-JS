function twoSum(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let map = new Map();
        for (let j = i + 1; j < arr.length; j++) {
            let target = -(arr[i] + arr[j])
            if (map.has(target)) {
                res.push([arr[i], target, arr[j]].sort())
                // map.set(arr[j])
            }
            else {
                map.set(arr[j]);
            }
        }
    }
    return res;
}

let arr = [-1, 0, 1, 2, -1, -4] 
console.log(twoSum(arr));
