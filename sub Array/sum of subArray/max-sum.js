// let arr = [1, 2, 3, -4, 5, 6];
// let maxSum=Number.MIN_VALUE;
// let target=5;
// for (let i = 0; i < arr.length; i++) {
//     let sum=0;
//     for (let j = i; j < arr.length; j++) {
//         sum+=arr[j];
//         maxSum=Math.max(sum,maxSum);
//     }
// }
// console.log(maxSum);



   function subarraySum(arr, target) {
        let i = 0, j = 0;
        let sum = 0;
        let maxLength = 0;
        let result = [0, 0];
        
        while (j < arr.length) {
            sum += arr[j];
            
            while (sum > target) {
                sum -= arr[i];
                i++;
            }
            
            if (sum === target) {
                if (j - i + 1 > maxLength) {
                    maxLength = j - i + 1;
                    result = [i + 1, j + 1]; 
                }
            }
            
            j++;
        }
        
        return maxLength > 0 ? result : -1;
    }
  let   arr = [1, 2, 3, 7, 5], target = 127
  console.log(subarraySum(arr,target))  
