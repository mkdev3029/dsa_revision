const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below (middle element and reverse)
var isPalindrome = function (head, printList) {
  printList(head)
  var middleElement = (head) => {
    var slow = head;
    var fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };
  var reverse = (head) => {
    var current = head;
    var prev = null;
    var node = null;
    while (current !== null) {
      node = current.next;
      current.next = prev;
      prev = current;
      current = node;
    }
    return prev;
  };
  var mid = middleElement(head);
  printList(mid);
  var reversedList = reverse(mid.next);
  printList(reversedList);
  printList(head);
  var current = head;
  printList(current);
  while (reversedList !== null) {
    if (current.data !== reversedList.data) {
      return false;
    }
    reversedList = reversedList.next;
    current = current.next;
  }
  return true;
};

// 1; 2; 3; 2; 1;
// reversedList 2 1
// reversedList {data: 1, next: {data: 2, next: null}}
// current {data: 1, next: {data:2,next: {data:3,next: {data:2, next: {data:1, next:null}}}}}}

var head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(2);
head.next.next.next.next = new LinkedListNode(1);

isPalindrome(head, printList);

function printList(head) {
  var res = "";
  var current = head;
  while (current !== null) {
    res += current.data + " ";
    current = current.next;
  }
  console.log(res);
}
