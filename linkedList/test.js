const LinkList = class {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
};

// Traverse and print all data from the LinkList
function printList(head) {
  var res = "";
  var current = head;
  while (current.next !== null) {
    res += current.data + " ";
    current = current.next;
  }
  return res;
}

var head = new LinkList(1);
head.next = new LinkList(2);
head.next.next = new LinkList(3);
head.next.next.next = new LinkList(4);
// console.log(head);

console.log(printList(head));

// var head = {
//   data: 1,
//   next: null,
// };

// head.next = {
//   data: 2,
//   next: null,
// };

// head.next.next = {
//   data: 3,
//   next: null,
// };

// console.log(head);
