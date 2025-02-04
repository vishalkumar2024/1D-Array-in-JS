let a = [1, 2, 5, 7];
let b = [1,1,1,1,1,1,7,7,7,7,7,8];

let i = 0;
let j = 0;
let res = [];
let lastItem = null;
while (i < a.length && j < b.length) {
    if (a[i] == b[j]) {
        if (lastItem != a[i]) {
            res.push(a[i]);
            lastItem = a[i];
        }
        i++;
        j++;
    }
    else if(a[i]<b[j]){
        i++
    }
    else if(a[i]>b[j]){
        j++;
    }
}
console.log(res);


// TC=O(n)
// SC=O(n)