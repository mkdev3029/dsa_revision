// HEAD | NODE | TAIL

class LinkedList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// CREATE NEW LINK LIST

function createList(head, data) {
  if (head == null) {
    head = new LinkedList(data);
    return head;
  } else {
    var current = head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = new LinkedList(data);
    return head;
  }
}

var head = null;

for (let i = 1; i <= 50; i++) {
  head = createList(head, i);
}

console.log(head);

// PRINT LINKED LIST

function printList(head) {
  var res = "";
  var current = head;
  while (current !== null) {
    res += current.data + " ";
    current = current.next;
  }
  return res;
}

console.log(printList(head));
