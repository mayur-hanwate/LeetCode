/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    
    let count = [];

    for(let i=0; i<words.length; i++){

        let str = words[i];

        for(let j = 0;j<str.length;j++){
            if(str[j] === x){
                count.push(i);
                break;
            }
        }
    }

    return count;

};