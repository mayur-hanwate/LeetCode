/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;

    for (let i = 0; i < jewels.length; i++) {
        let innerCount = 0;
        stones.split('').find((e) => {
            if (e === jewels[i]) { innerCount++ }


        }
        );
        count += innerCount;
    }

    return count;
};