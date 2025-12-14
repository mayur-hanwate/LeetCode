
var Node = function (val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {

    let i = 0;

    if (index >= this.size) {
        return -1;
    }

    let curr = this.head;

    while (curr) {
        if (i === index) {
            return curr.val;
        }
        curr = curr.next;
        i++;
    }

    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {

    const newNode = new Node(val);

    newNode.next = this.head;

    this.head = newNode;
    this.size += 1;



};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {

    let newNode = new Node(val);

    let curr = this.head;

    if (!curr) {
        this.head = newNode;
    }
    else {
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;



    }

    this.size++;

};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {

    const newNode = new Node(val);

    if (index > this.size || index < 0) return;

    let curr = this.head;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    else if (index === this.size) {
        this.addAtTail(val);
        return;
    }

    else {
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        newNode.next = curr.next;
        curr.next = newNode;

    }
    this.size++;



};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {

    if (index < 0 || index >= this.size) {
        return
    }

    if (index === 0) {
        this.head = this.head.next;
    }
    else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        curr.next = curr.next.next;
    }

    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */