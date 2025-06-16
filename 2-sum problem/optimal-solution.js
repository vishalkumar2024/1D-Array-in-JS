// Used Hash Map//

function twoSum(arr, target) {
    let hashMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        let valueInHash = target - arr[i];
        if (hashMap.has(valueInHash)) {
            return [hashMap.get(valueInHash), i];
        }
        else {
            hashMap.set(arr[i], i)
        }
    }
    return [];
}

let arr = [2, 5, 8, 12, 1, 9];
let target = 17;
console.log(twoSum(arr, target));

// TC=O(n)
// SC=O(n)
