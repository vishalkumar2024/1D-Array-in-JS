// Union

function union(a, b) {
    let res = []; //SC=O(m+n)
    let m=a.length;
    let n=b.length;

        let map = new Map();  //SC=O(m+n)

        for (let i = 0; i < m; i++) { // TC=O(m)
            if (!map.has(a[i])) {
                res.push(a[i]);
                map.set(a[i], true);
            }
        }

        for (let i = 0; i < n; i++) {  //TC=O(n)
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
// SC=O(m+n)+O(m+n)~ O(m+n)