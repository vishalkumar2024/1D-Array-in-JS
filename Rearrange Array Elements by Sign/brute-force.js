// This function returns the array of nums such that every consecutive 
// pair of integers have opposite signs.

function rearrangeArray(arr) {
    let resPosi = [];      //SC=O(n/2)
    let resNega = [];      //SC=O(n/2)
    let res = [];          //SC=O(n)
    for (let i = 0; i < arr.length; i++) {      // O(n)
        if (arr[i] >= 0) resPosi.push(arr[i]);
        else if (arr[i] < 0) resNega.push(arr[i]);
    }

    for (let i = 0; i < arr.length / 2; i++) {    // O(n/2) ~ O(n)
        res.push(resPosi[i]);
        res.push(resNega[i]);
    }
    return res;
}
let arr = [3,1,-2,-5,2,-4]
console.log(rearrangeArray(arr));

// TC=O(n)+O(n)
// SC=O(n) - O(n)+O(n)+O(n)