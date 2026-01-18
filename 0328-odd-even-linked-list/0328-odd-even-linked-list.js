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
var oddEvenList = function (head) {

    let pointer = head;

    let sentinelEven = new ListNode();
    let sentinelOdd = new ListNode();

    let sentinelEvenPointer = sentinelEven;
    let sentinelOddPointer = sentinelOdd;

    while (pointer) {
        sentinelEvenPointer.next = pointer;
        sentinelOddPointer.next = pointer.next;

        pointer = pointer.next ? pointer.next.next : null;

        sentinelEvenPointer = sentinelEvenPointer.next;
        sentinelOddPointer = sentinelOddPointer.next;
    }

    sentinelEvenPointer.next = sentinelOdd.next;

    return sentinelEven.next;
    
};


