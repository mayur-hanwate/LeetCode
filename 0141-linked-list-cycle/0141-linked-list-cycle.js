/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
   
   const hashMap = new Map();
   
   while(head){

    if(hashMap.has(head)) return true;

    hashMap.set(head, head.next);

    head = head.next;
   }
    
    
    return false;

};