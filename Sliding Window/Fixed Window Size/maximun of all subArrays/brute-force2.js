function abc(arr, d) {
    let i = 0;
    let res=[]
    let count=0;
    while (i <= arr.length - d) {
        let max = Number.MIN_VALUE;
        while (count < d) {
            if (arr[count + i] > max) {
                max = arr[count + i];
            }
            count++;
        }
        res.push(max);
        count = 0;
        i++;
    }
    return res
}
let arr = [120, -1, 17, 8, -16, 20, 23, 39];
let d = 3;
console.log(abc(arr,d));