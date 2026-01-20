/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let mid = Math.floor((nums.length-1)/2);
    let left = 0;
    let right = nums.length-1;

    while(mid<nums.length && left<=right){
        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid]<target){
            left = mid+1;
            mid = Math.floor((left+right)/2);
        }
        else{
            right = mid-1;
            mid = Math.floor((left+right)/2);
        }
    }
   return -1;
};

// start in the mid
// if num greater move right or left
// update the constarain