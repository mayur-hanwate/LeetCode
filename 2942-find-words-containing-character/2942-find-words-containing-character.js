/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    
    let count = [];

    for(let i=0; i<words.length; i++){

        let str = words[i];
        let len = str.length - 1;

        for(let j = 0;j <= len/2;j++){
            if(str[j] === x || str[len-j] === x){
                count.push(i);
                break;
            }
        }
    }

    return count;

};