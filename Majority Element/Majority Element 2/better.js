// You are given an array of integer arr[] where each number represents a vote
//  to a candidate. Return the candidates that have votes greater than
//  one-third of the total votes, If there's not a majority vote, return an 
// empty array. 

// Note: The answer should be returned in an increasing format.

function findMajority(arr) {
    let mid = Math.floor(arr.length / 3);
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }
    let res = [];
    for (let key in obj) {
        if (obj[key] > mid) {
            res.push(Number(key));
        }
    }
    return res;
}
let arr=[2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
console.log(findMajority(arr))