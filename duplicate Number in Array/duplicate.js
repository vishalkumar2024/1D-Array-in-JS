let arr=[2,3,4,3,2,5];

let obj={};

for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
    }
    else{
        obj[arr[i]]++
    }
}

let res=[];
for(let value in obj){
    if(obj[value]>1){
        res.push(value)
    }
}
newArray=res.map(Number)
console.log(`The duplicate elements are ${newArray}`)
console.log(newArray);

