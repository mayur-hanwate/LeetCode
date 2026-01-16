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
    let len = findLen(curr);

    const deletedList = removeElement(curr, len-n+1);

return deletedList;
};

function findLen(list){
    let len = 0;

    while(list){
        list = list.next;
        len++;
    }

    return len;
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

