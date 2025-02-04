let arr=[1,1,1,0,0,0,1,1,1,1,1,0,1];

let count=0;
let maxCount=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]==1){
        count++;
        maxCount=Math.max(count,maxCount);
    }
    else{
        count=0;
    }
}
console.log(maxCount);

// TC=O(n)
// SC=O(1)