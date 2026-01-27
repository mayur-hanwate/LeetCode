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
var swapPairs = function (head) {

    if (!head || !head.next) return head;

    let sen = new ListNode();
    let senP = sen;

    let start = head;
    let end = head.next;

    while (start.next) {
        let temp = end.next;

        end.next = null;

        senP.next = end;
        senP = senP.next;

        senP.next = start;
        senP = senP.next;

        start.next = temp;
        start = start.next;

        if (start && start.next) {
            end = start.next;
        } else { return sen.next};

        // console.log(sen, senP, start, end);
    }

    return sen.next;

};