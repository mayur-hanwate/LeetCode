/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

let sentinel = new ListNode();
sentinel.next = head;

    let pointer = sentinel;

    let pointer2 = sentinel;
    let moveForward = n;

    while (moveForward) {
        pointer2 = pointer2.next;
        moveForward--;
    }

    while (pointer2.next) {
        pointer = pointer.next;
        pointer2 = pointer2.next;
    }


    pointer.next = pointer.next ? pointer.next.next : null;


    return sentinel.next;
};


function deleteNode(list) {
    let sentinel = new ListNode();
    sentinel.next = list;

    let prev = sentinel;

    prev.next = prev.next.next;

    console.log(prev);

    return prev;
}

// 2 pointer approach
// Make the first pointer at the start
// Make the 2nd pointer nth steps ahead from the start
// once 2nd pointer reach the end, the first pointer reaches the prev node
