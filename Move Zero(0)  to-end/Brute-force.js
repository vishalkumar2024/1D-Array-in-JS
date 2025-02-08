let arr = [1, 0, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let brr=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        brr.push(arr[i]);
    }
}
for(let i=brr.length;i<=arr.length-1;i++){
    brr[i]=0;
}

//TC=O(2n) --> O(n)+O(n)
//SC=O(n);