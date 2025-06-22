// Leetcode 1796

function secondLarge() {
    let large = -Infinity;
    let sLarge = -1;
    for (let i = 0; i < s.length; i++) { //TC=O(n)
        if(s[i]>=0 && s[i]<10){
            if (Number(s[i]) > large) {
               sLarge = large;
               large = Number(s[i]);
            }
            else if (Number(s[i]) > sLarge && Number(s[i]) != large) {
               sLarge = Number(s[i]);
            }
        }
    }
    if (sLarge < 0) return -1;
    else return sLarge;
}
let s="dfa12321afd";
console.log(secondLarge(s));

// TC=O(n)
// SC=O(1)