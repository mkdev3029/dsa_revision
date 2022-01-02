// PREVIOUS GREATER ELEMENT - LEFT
var arr = [1, 3, 2, 4];
// var arr = [5, 5, 5, 5, 5];
var stack = [];
var res = [];

for (let i = 0; i < arr.length; i++) {
  while (stack.length && arr[i] >= stack[stack.length - 1]) {
    stack.pop();
  }
  if (stack.length) {
    res.push(stack[stack.length - 1]);
  } else {
    res.push(-1);
  }
  stack.push(arr[i]);
}

console.log(res);
