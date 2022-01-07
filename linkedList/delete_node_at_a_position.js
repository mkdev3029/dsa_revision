const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

function deleteNode(head, position, printList) {
  if (head === null) {
    return;
  }
  if (head !== null && position === 0) {
    head = head.next;
    return head;
  }
  var current = head;
  for (let i = 0; i < position - 1 && current !== null; i++) {
    current = current.next;
  }
  if (current === null || current.next === null) {
    return;
  }
  current.next = current.next.next;
  printList(head);
  return head;
}

function createLinkedList(head, data) {
  if (head == null) {
    head = new LinkedListNode(data);
    // printList(head);
    return head;
  } else {
    var current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new LinkedListNode(data);
    // printList(head);
    return head;
  }
}

var arr = [20, 6, 2, 19, 7, 4, 15, 9];
var data = [];
var head = createLinkedList(head, arr[0], printList);
for (let i = 1; i < arr.length; i++) {
  head = createLinkedList(head, arr[i], printList);
}

// printList(head);

deleteNode(head, 3, printList);

function printList(head) {
  var res = "";
  var current = head;
  while (current !== null) {
    res += current.data + " ";
    current = current.next;
  }
  console.log(res);
}
