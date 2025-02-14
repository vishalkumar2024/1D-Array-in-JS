
function rearrangeArray(arr) {
    let resPosi = [];
    let resNega = [];
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) resPosi.push(arr[i]);
        else if (arr[i] < 0) resNega.push(arr[i]);
    }
    console.log(resNega, resPosi)
    for (let i = 0; i < arr.length / 2; i++) {
        res.push(resPosi[i]);
        res.push(resNega[i]);
    }
    return res;
}
let arr = [3,1,-2,-5,2,-4]
console.log(rearrangeArray(arr));