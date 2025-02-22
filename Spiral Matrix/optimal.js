function SpiralMatrix(arr) {
    let m = arr.length;
    let n = arr[0].length;
    let res = []
    let colStart = 0;
    let colEnd = n - 1;
    let rowStart = 0;
    let rowEnd = m - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let j = colStart; j <= colEnd; j++) {
            res.push(arr[rowStart][j]);
        }
        rowStart++

        for (let i = rowStart; i <= rowEnd; i++) {
            res.push(arr[i][colEnd])
        }
        colEnd--

        if (rowStart <= rowEnd) {
            for (let j = colEnd; j >= colStart; j--) {
                res.push(arr[rowEnd][j])
            }
            rowEnd--
        }
        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                res.push(arr[i][colStart])
            }
            colStart++
        }
    }
    return res;
}
arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(SpiralMatrix(arr))