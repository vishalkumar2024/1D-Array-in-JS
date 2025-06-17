//Two step process
function majorityElement(arr) {
    let count = 0;
    let candidate;
    let mid = Math.floor(arr.length / 2);
    //Finding eligible candidate
    for (let i = 0; i < arr.length; i++) {
        if (count == 0) {
            candidate = arr[i];
            count=1;
        }
        else if (arr[i] == candidate) {
            count++
        }
        else count--;
    }
   
    // checking this candidate appears more than mid or not
    let cnt=0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==candidate) cnt++;
    }
    if(cnt>mid) return candidate;
    else return -1
}

let arr = [4, 4, 3, 3, 4, 4, 1];
console.log(majorityElement(arr));

// TC=O(n)
// SC=O(1)
