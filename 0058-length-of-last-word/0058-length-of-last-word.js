/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let strLength = 0;
    let isValidSpace = true;
    
    for(let i =0;i<s.length;i++){
        if(isValidSpace && s[i] !== ' '){
            strLength = 0;
            isValidSpace = false;
        }

        if(s[i] !== ' '){
            strLength++;
        }else{
            isValidSpace = true;
        }
    }

    return strLength;
   
};

// Traditional way

// Loop through the array.
// Look for 2 conditions toreset a string and add a string
// 1. If i reach the end, the last string would be my length
// 2. If i reach space and a letter after that then reset my num count