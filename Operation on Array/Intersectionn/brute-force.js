// intersetion
// Given two unsorted integer arrays a[] and b[] each consisting of distinct elements,
// the task is to return the count of elements in the intersection (or common elements)
// of the two arrays.

function intersection(a, b) {
    let res = [];
    let lastItem = null;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                if (lastItem != a[i]) {
                    res.push(a[i]);
                    lastItem = a[i];
                    break;
                }
            }
        }
    }
    return res;
}

let a = [10, 1, 2,10, 2, 4, 5];
let b = [1, 1, 1, 2, 3, 5, 5, 5,10];
console.log(intersection(a, b));

// TC=O(n*m)
// SC=O(n)
