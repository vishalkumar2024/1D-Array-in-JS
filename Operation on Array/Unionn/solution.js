
function unionSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];
    let lastInserted = null; // To avoid duplicates

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (lastInserted !== arr1[i]) { // Avoid duplicates
                result.push(arr1[i]);
                lastInserted = arr1[i];
            }
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            if (lastInserted !== arr2[j]) {
                result.push(arr2[j]);
                lastInserted = arr2[j];
            }
            j++;
        }
        else { // Both are equal
            if (lastInserted !== arr1[i]) {
                result.push(arr1[i]);
                lastInserted = arr1[i];
            }
            i++;
            j++;
        }
    }

    // Add remaining elements of arr1
    while (i < arr1.length) {
        if (lastInserted !== arr1[i]) {
            result.push(arr1[i]);
            lastInserted = arr1[i];
        }
        i++;
    }

    // Add remaining elements of arr2
    while (j < arr2.length) {
        if (lastInserted !== arr2[j]) {
            result.push(arr2[j]);
            lastInserted = arr2[j];
        }
        j++;
    }
    return result;
}

let arr1 = [1, 2, 4, 5, 6];
let arr2 = [2, 3, 3, 3, 3, 3, 3, 5, 7];

console.log(unionSortedArrays(arr1, arr2));
// Output: [1, 2, 3, 4, 5, 6, 7]


// TC= O(n + m)
// SC=O(n+m)