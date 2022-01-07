const ListNode = class {
  constructor(nodeData) {
    this.val = nodeData;
    this.next = null;
  }
};

// Complete the function below

var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

// ITERATIVE

var mergeTwoLists = function (l1, l2) {
  let dummyNode = new Node(0);

  let tail = dummyNode;
  while (true) {
    if (headA == null) {
      tail.next = headB;
      break;
    }
    if (headB == null) {
      tail.next = headA;
      break;
    }
    if (headA.data <= headB.data) {
      tail.next = headA;
      headA = headA.next;
    } else {
      tail.next = headB;
      headB = headB.next;
    }
    tail = tail.next;
  }
  return dummyNode.next;
};
