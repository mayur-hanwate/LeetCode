/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

    // Find lenght
    let len = listLength(head);

    // How many times need to rotate
    let actualLen = k % len;

    if (!actualLen) return head;

    // Reach the position from where you want to rotate

    let startPointer = head;
    let endPointer = head;

    while (actualLen) {
        endPointer = endPointer.next;
        actualLen--;
    }

    while (endPointer.next) {
        startPointer = startPointer.next;
        endPointer = endPointer.next;
    }


    let tempNode = startPointer.next;
    startPointer.next = null;

    endPointer.next = head;


    return tempNode;

};

function listLength(head) {

    let pointer = head;
    let len = 0
    while (pointer) {
        pointer = pointer.next;
        len++;
    }

    return len;
}