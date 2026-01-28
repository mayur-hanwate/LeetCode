/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if(!head || !head.next) return head;

    let sen = new ListNode();
    let senP = sen;

    let c = head;
    let n = head.next;

    while(c && n){
        // Pointer sen to next -> next to curr -> curr to nnext.next
        senP.next = n;
        c.next = n.next;
        n.next = c;

        // Reset the pointer
        senP = c;
        c = c.next;
        n = c && c.next;


    }
    

    return sen.next;
};