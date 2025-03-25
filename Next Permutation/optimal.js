//Find The next permutation:- The next permutation of an array of integers is the next lexicographically
// greater permutation of its integer. More formally, if all the permutations
// of the array are sorted in one container according to their lexicographical
// order, then the next permutation of that array is the permutation that 
// follows it in the sorted container. If such arrangement is not possible,
//  the array must be rearranged as the lowest possible order 
// (i.e., sorted in ascending order).

function nextPermutation(arr) {
    let n=arr.length
    //Function for Swap
    function swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    //Function for Reverse
    function reverse(arr, start, end) {
        let i = start;
        let j = end
        console.log("called")
        while (i <= j) {
            swap(arr,i,j);
            i++;
            j--;
        }
    }

    // Step 1: Finding pivot
    let pivot = -1;
    for (let i = n - 2; i >= 0; i--) {  //TC=O(n)
        if (arr[i] < arr[i + 1]) {
            pivot = i
            break;
        }
    }
    if (pivot == -1) {
        reverse(arr, 0, n - 1);
        return arr;
    }
    else {
        //Step 2: Finding the right most elemnt & Swap it form pivot
        for (let i = n - 1; i > pivot; i--) {   //TC=O(n)
            if (arr[i] > arr[pivot]) {
                swap(arr, i, pivot);
                break;
            }
        }
        // Step 3: Reverse the array from (pivot+1) to (length-1)
        reverse(arr, pivot + 1, n - 1)
    }
    return arr;
}
let arr = [3, 2, 1];
console.log(nextPermutation(arr));

// TC=O(n) + O(n) + O(n) ~ O(n)
//SC=O(1)