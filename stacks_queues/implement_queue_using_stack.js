/*
Stack {
  push()
  top()
  pop()
  isEmpty()
}
*/
class Queue {
  constructor() {
    this.S1 = [];
    this.S2 = [];
  }
  push(value) {
    //write your code here..
    if (this.S1.length === 0) {
      this.S1[0] = value;
    } else {
      this.S1[this.S1.length - 1] = value;
    }
  }
  pop() {
    //write your code here..
    let last = this.S1[this.S1.length - 1];
    this.S1.length = this.S1.length > 0 ? this.S1.length - 1 : 0;
    console.log(this.S1);
    return last;
  }
  front() {
    //write your code here..
    console.log(this.S1[0]);
  }
  isEmpty() {
    //write your code here..
  }
}

var q = new Queue();

q.push(1);
q.push(2);
q.push(3);
q.front();
console.log("pop", q.pop());
