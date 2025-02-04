let a = [1, 1, 2, 2, 4, 5];
let b = [1, 1, 1, 2, 3, 5, 5, 5];

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
console.log(res);

// TC=O(n*m)
// SC=O(n)