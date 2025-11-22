// letcode 2149

function alternate(arr) {
    let posit = []; //SC=O(n) or
    let neg = [];   //SC=O(n)
    for (let i = 0; i < arr.length; i++) { //TC=O(n)
        if (arr[i] < 0) {
            neg.push(arr[i])
        }
        else {
            posit.push(arr[i]);
        }
    }
    let res = [];  //SC=O(n)

    let i = 0;
    let j = 0;
    while (i < posit.length && j < neg.length) { //TC=O(n)
        res.push(posit[i]);
        res.push(neg[j]);
        i++
        j++
    }
    while (i < posit.length) {
        res.push(posit[i])
        i++
    }
    while (j < neg.length) {
        res.push(neg[j])
        j++;
    }
    return res;
}

let arr =[9, 4, -2, -1, 5, 0, -5, -3, 2]
console.log(alternate(arr));
// output - [5, -5, 2, -2, 4, -8, 7, 1, 8, 0]

// TC=O(n)+O(n)~ O(n)
// SC=O(n)+O(n)~ O(n)
