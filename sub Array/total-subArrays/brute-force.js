let arr = [10,5,2,7,1,-10];
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        let res = []
        for (let k = i; k <= j; k++) {
            res.push(arr[k]);
        }
        console.log(res);
    }
}

