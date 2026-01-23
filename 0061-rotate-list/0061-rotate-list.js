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
var rotateRight = function(head, k) {
    let rotatedList = head;

    let len = k % findLenght(head) ;

    while(len){
       rotatedList = rotateList(rotatedList);
       len--;
    }
    return rotatedList;
};

function findLenght(head){
    let len = 0;
    let pointer = head;
    while(pointer){

        pointer = pointer.next;
        len++;
    }
    return len;
}

function rotateList(head){

    if(!head || !head?.next) return head;

    let startPointer = head;

    let pointer = head;
    let prevPointer = null;

    while(pointer.next){
        prevPointer = pointer;
        pointer = pointer.next;
    }

    prevPointer.next = pointer.next;
    pointer.next = startPointer;

    return pointer;
}