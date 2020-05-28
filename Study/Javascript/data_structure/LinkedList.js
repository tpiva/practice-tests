const LinkedListNode = require('./LinkedListNode');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  insert(value) {
    const node = new LinkedListNode(value);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    
    this.tail = node;
  }

  print(node) {
    if (node === null) {
      return;
    }
    console.log(node.value);
    this.print(node.next);
  }


  get head() {
    return this._head;
  }

  set head(head) {
    this._head = head;
  }

  get tail() {
    return this._tail;
  }

  set tail(tail) {
    this._tail = tail;
  }
}

module.exports = LinkedList;