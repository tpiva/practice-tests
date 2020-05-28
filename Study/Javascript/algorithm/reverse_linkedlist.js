const LinkedList = require('../data_structure/LinkedList'); 

function reverseLoop(list) {
  let next = null, previous = null;
  let current = list.head;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  // change head to old tail
  list.head = previous;

}

function reverseRecursive(node) {
  if (node === null || node !== null) {
    return node;
  }
  
  const current = reverseRecursive(node.next);
  current.next.next = node;

  node.next = null;

  return current;

}

const list = new LinkedList();
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

list.print(list.head);

reverseLoop(list);

console.info('\nReverted:\n');
list.print(list.head);

console.info('\nReverted Second:\n');
list.head = reverseRecursive(list.head);
list.print(list.head);