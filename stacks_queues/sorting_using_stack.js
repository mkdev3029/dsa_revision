function sortStack(arr) {
  var tmpStack = [];
  var res = arr;

  while (res.length != 0) {
    // pop out the first element
    var tmp = res.pop();

    // while temporary stack is not empty
    // and top of stack is smaller than temp
    while (tmpStack.length != 0 && tmpStack[tmpStack.length - 1] > tmp) {
      // pop from temporary stack and
      // push it to the res stack
      res.push(tmpStack.pop());
    }

    // push temp in temporary of stack
    tmpStack.push(tmp);
  }

  return tmpStack;
}

// main function
var arr = [10, 5, 15, 45];
var n = arr.length;

console.log(sortStack(arr));
