// intersection

function intersection(a, b) {
    let large = a.length > b.length ? a : b;
    let small = a.length > b.length ? b : a;

    let map = new Map();  //SC=O(m)
    for (let i = 0; i < large.length; i++) { //TC=O(m)
        map.set(large[i], true);
    }

    let res = []  //SC=O(m)
    for (let i = 0; i < small.length; i++) {  //TC=O(n)
        if (map.has(small[i])) {
            res.push(small[i])
            map.delete(small[i]); // To ensure distinct elements are counted only once

        }
    }
    return res;
}

let a = [1, 2, 5, 7];
let b = [1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 8];
console.log(intersection(a, b));

//if m= large.length and n=small.length

// TC=O(m+n)
// SC=O(m)