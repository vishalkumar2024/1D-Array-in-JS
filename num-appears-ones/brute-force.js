let arr = [4, 1, 2, 1, 4, 7, 2];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let res = arr[i];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == res) {
            count++;
        }
    }
    if (count == 1) {
        console.log(res)
    }
}

// TC=O(n*n)
// SC=O(1)