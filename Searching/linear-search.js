
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target){
            return i
        }
    }
    return -1;
    
}

let arr = [5, 4, 3, 2, 2,1, 8];
let target = 2;
console.log(linearSearch(arr, target));
