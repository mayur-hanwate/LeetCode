/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let j = s.length -1;

    for(let i = 0;i<s.length;i++){
         if(j < s.length/2){
            return;
         }
         const temp = s[i];
         s[i] = s[j];
         s[j] = temp;
         j--;
    }
};

// Use 2 pointer. 
// Both of the pointer will switch positions with extra temp variable