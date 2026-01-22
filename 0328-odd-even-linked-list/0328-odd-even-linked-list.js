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
var oddEvenList = function(head) {

    if(!head && !head?.next) return head;

    let list1 = head;
    let list2 = head.next;

    let list = list2;

    while(list1.next && list2.next){
        list1.next = list1.next.next;
        list2.next = list2.next.next;

        list1 = list1.next;
        list2 = list2.next;
    }

    list1.next = list;

    return head;
};