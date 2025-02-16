// Given an array of positive integers. This function returns all the
// leaders in the array. An element is considered a leader if it is
// greater than or equal to all elements to its right. The rightmost element
// is always a leader.


function leader(arr) {
    let n = arr.length;
    let res = [];
    res.push(arr[n - 1]);
    let max = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {  //TC=O(n)
        if (arr[i] >= max) {
            max = arr[i];
            res.push(arr[i]);
        }
    }

    //reversing the res array to get correct output
    let i = 0;
    let j = res.length - 1;
    while (i <= j) {         //TC=O(n/2)
        let temp = res[i];
        res[i] = res[j];
        res[j] = temp;
        i++;
        j--;
    }
    return res;
}
let arr = [10, 4, 2, 4, 1];
console.log(leader(arr));

// TC=O(n)
// SC=O(n)
