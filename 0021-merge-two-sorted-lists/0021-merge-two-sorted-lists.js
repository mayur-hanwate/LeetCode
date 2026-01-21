/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    let p1 = list1;
    let p2 = list2;

    let sentinel =  new ListNode();
    let p3 = sentinel;

    while (p1 && p2) {
        if (p1.val <= p2.val) {
            p3.next = p1;
            p1 = p1.next;
            p3 = p3.next;
        }
        else {
            p3.next = p2;
            p2 = p2.next;
            p3 = p3.next;
        }
    }

    if (p1) {
        p3.next = p1;
    }

    if (p2) {
        p3.next = p2;
    }


    return sentinel.next;
};