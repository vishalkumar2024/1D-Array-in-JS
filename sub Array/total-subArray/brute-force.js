let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        let res = []
        for (let k = i; k <= j; k++) {
            res.push(arr[k]);
        }
        console.log(res);
    }
}

