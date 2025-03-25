// This function returns that element of array which appears only one time 

function appearOnes(arr) {
    for (let i = 0; i < arr.length; i++) {  //TC=O(n)
        let count = 0;
        let res = arr[i]; //SC=O(n)
        for (let j = 0; j < arr.length; j++) { //TC=O(n)
            if (arr[j] == res) {
                count++;
            }
        }
        if (count == 1) {
            return res;
        }
    }
}

let arr = [4, 1, 2, 1, 4, 7, 2];
console.log(appearOnes(arr));


// TC=O(n*n)
// SC=O(n)