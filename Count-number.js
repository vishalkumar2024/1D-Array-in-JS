function getCount(arr, num1, num2) {
    let startIdx=-1;
    let endIdx=-1;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num1){
            startIdx=i
            break
        }
    }
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]===num2){
            endIdx=i;
            break
        }
    }
    if(startIdx===endIdx) return 0;
    
    if(startIdx>endIdx){
        return 0;
    }
    else{
        return (endIdx-startIdx)-1
    }
}
let arr=[3,7,6,17,1,8,7,18];
let num1=7;
let num2=7; 
console.log(getCount(arr,num1,num2));