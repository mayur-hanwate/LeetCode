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
var deleteDuplicates = function(head) {

    let sentinel = new ListNode();
    sentinel.next = head;

    let curr = head;

    while(curr){
        console.log(sentinel,"sentinel");
        if(curr.next && curr.val === curr.next.val){
            curr.next = curr.next.next;
        }
        else{
            curr = curr.next;
        }
    }

    console.log(sentinel, curr, head);

    return sentinel.next;
    
};
