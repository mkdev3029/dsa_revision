const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

// Complete the function below

function insertNodeAtPosition(head, data, position, printList) {
  if (head === null) {
    return;
  }
  if (head !== null && position === 0) {
    var node = new LinkedListNode(data);
    node.next = head;
    head = node;
    return head;
  }
  var current = head;
  var prev = null;
  for (let i = 0; i < position; i++) {
    prev = current;
    current = current.next;
  }
  var node = new LinkedListNode(data);
  prev.next = node;
  node.next = current;
  printList(head);
  return head;
}

var head = new LinkedListNode(16);
head.next = new LinkedListNode(13);
head.next.next = new LinkedListNode(7);

insertNodeAtPosition(head, 1, 2, printList);

function printList(head) {
  var res = "";
  var current = head;
  while (current !== null) {
    res += current.data + " ";
    current = current.next;
  }
  console.log(res);
}
