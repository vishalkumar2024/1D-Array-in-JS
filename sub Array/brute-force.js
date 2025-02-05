let arr=[10, 5, 2, 7, 1, -10]
let length=0;
for(let i=0;i<arr.length;i++){
    for(let j=i;i<arr.length;i++){
        let sum=0;
        for(let k=i;k<j;k++){
           sum+=arr[k];
           if(sum==9) {
            console.log(sum)
            length=Math.max(length,j-i+1)
           }
        }
    }
}
console.log(length)