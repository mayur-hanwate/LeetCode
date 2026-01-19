/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let carry = 0;

    let sentinel = new ListNode();

    let sentinelPointer = sentinel;

    while (l1 && l2) {
        let num = l1.val + l2.val + carry;

        let newNode = new ListNode(num % 10);
        sentinelPointer.next = newNode;

        sentinelPointer = sentinelPointer.next;

        carry = Math.floor(num / 10);

        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1) {
        let num = l1.val + carry;
        let newNode = new ListNode(num % 10);
        sentinelPointer.next = newNode;

        sentinelPointer = sentinelPointer.next;
        carry = Math.floor(num / 10);
        l1 = l1.next;
    }

    while (l2) {
        let num = l2.val + carry;
         let newNode = new ListNode(num % 10);
        sentinelPointer.next = newNode;

        sentinelPointer = sentinelPointer.next;
        carry = Math.floor(num / 10);
        l2 = l2.next;
    }

    if (carry) {
       let newNode = new ListNode(carry);
        sentinelPointer.next = newNode;

        sentinelPointer = sentinelPointer.next;
    }

    return sentinel.next;
};


// Reverse a linked list
// save those values
// Add them together
// Create new linked list
// And reverse it again