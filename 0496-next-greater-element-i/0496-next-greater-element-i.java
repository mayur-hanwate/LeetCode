
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int i = 0;

        while(i<nums1.length){
            boolean isFound = false;
            int element = -1; 
            for(int j : nums2){

                if(j == nums1[i]){
                    isFound = true;
                }
                if(isFound && nums1[i] < j){
                    element = j;
                    break;
                }
            }

            nums1[i] = element;
            i++;
        }

        return nums1;
    }
}
