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

    let numStr = '';

    while (l1 && l2) {
        let num = l1.val + l2.val + carry;

        numStr = numStr.concat(num % 10);

        carry = Math.floor(num / 10);

        l1 = l1.next;
        l2 = l2.next;
    }

    while (l1) {
        let num = l1.val + carry;
        numStr = numStr.concat(num % 10);
        carry = Math.floor(num / 10);
        l1 = l1.next;
    }

    while (l2) {
        let num = l2.val + carry;
        numStr = numStr.concat(num % 10);
        carry = Math.floor(num / 10);
        l2 = l2.next;
    }

    if (carry) {
       numStr =  numStr.concat(carry);
    }

    return numberToLinkedList(numStr);
};

function numberToLinkedList(numStr) {

    console.log(numStr.split(''));

    const arr = numStr.split('');
    let sentinel = new ListNode();
    let sentinelPointer = sentinel

    for (let i = 0; i < arr.length; i++) {
        let newNode = new ListNode(arr[i] * 1);
        sentinelPointer.next = newNode;
        sentinelPointer = sentinelPointer.next;
    }

    console.log(sentinel);

    return sentinel.next;

}

// Reverse a linked list
// save those values
// Add them together
// Create new linked list
// And reverse it again