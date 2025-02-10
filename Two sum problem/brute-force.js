
// -------  Brute Force pproach  -------//

function twoSum() {
    let res=[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                res.push(arr[i],arr[j]);
            }
        }
    }
    return res;
}
let arr = [3, 5, 7, 38, 15, 12, 4];
let target = 15;

console.log(twoSum(arr,target))