/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {

    let slow = head;
    let fast = head;

    let len = 0;

    // Find the middle
    while (fast) {
        len++;
        if (!fast.next || !fast.next.next) {
            break;
        };
        slow = slow.next;
        fast = fast.next.next;
    }


    let curr = slow;
    let prev = null;

    while (curr) {
        let temp = curr;
        curr = curr.next;

        temp.next = prev;
        prev = temp;
    }

    while(len){
        if(head.val !== prev.val){
            return false;
        }
        head = head.next;
        prev = prev.next;

        len--;
    }

    return true;

};

// Find the middle of the linked list
// reverser the other half of the linked list
// then compare both of the values of those linked list;