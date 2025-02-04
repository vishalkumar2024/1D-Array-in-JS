let arr=[4,1,2,1,2];

let obj={};

for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
    }
    else {
        obj[arr[i]]++
    }
}
console.log(obj);

for(let key in obj){
    if(obj[key]==1){
        console.log(key);
    }
}

// TC=O(n+n)
// SC=O(n)