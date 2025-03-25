// Union

function union(a, b) {
    let res = []; 
        let map = new Map(); // Using a map to track unique elements

        for (let i = 0; i < a.length; i++) {
            if (!map.has(a[i])) {
                res.push(a[i]);
                map.set(a[i], true);
            }
        }

        for (let i = 0; i < b.length; i++) {
            if (!map.has(b[i])) {
                res.push(b[i]);
                map.set(b[i], true);
            }
        }

        return res;
}

let a = [1, 2, 3, 4, 5]
let b = [1, 2, 3]
console.log(union(a, b));


// TC=O(m+n)
// SC=O(m)