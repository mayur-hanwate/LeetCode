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

    let curr = head;
    let reverseList = reverseLinkedList(curr);

    const deletedList = removeElement(reverseList, n);

    return reverseLinkedList(deletedList);

};

function reverseLinkedList(list) {

    let rev = null;

    while (list) {
        let temp = list.next;
        list.next = rev;
        rev = list;
        list = temp;
    }

    console.log(list, rev);

    return rev;

}

function removeElement(list, pos) {
    
    let sentinel = new ListNode();
    sentinel.next = list;

    let prev = sentinel;
    

    while(prev){
        if(prev.next && pos === 1){
            prev.next = prev.next.next;
        }
        else{
            prev = prev.next;
        }
        pos--;
    }

    return sentinel.next;
}


// Reverse the linked list
// Remove the element which we want.
// Reverse that linkedlist again

