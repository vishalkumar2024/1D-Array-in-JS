function majorityElement(arr) {
    let count = 0;
    let res;
    let mid = Math.floor(arr.length / 2);
    for (let i = 0; i < arr.length; i++) {
        if (count == 0) {
            res = arr[i];
            count=1;
        }
        else if (arr[i] == res) {
            count++
        }
        else count--;
    }
    let cnt=0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==res) cnt++;
    }
    if(cnt>mid) return res;
    else return -1
}

let arr = [4, 4, 3, 3, 4, 4, 1];
console.log(majorityElement(arr));

// TC=O(n)
// SC=O(1)
