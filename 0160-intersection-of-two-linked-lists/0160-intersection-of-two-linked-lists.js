/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    // Find out lengh of both of the list;
    let headALength = len(headA);
    let headBLength = len(headB);

    while(headALength>headBLength){
        headA = headA.next;
        headALength--;
    }

     while(headALength<headBLength){
        headB = headB.next;
        headBLength--;
    }

    while(headA || headB){
        if(headA === headB){
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }

    return headA ?? headB;

};


function len(head){
    let l=0;

    while(head){
        head = head.next;
        l++;
    }
    return l;
}
// Return a pointer where the intersection happens
// ListA and ListB should be of same length.
// SO either move the listA or listB to make them same.
// Then move through both of the list with.next and then check if both of the pointer points to the same location
// If yes then return the element.