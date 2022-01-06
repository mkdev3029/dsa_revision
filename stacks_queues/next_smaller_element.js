// NEXT SMALLER ELEMENT RIGHT
// var arr = [1, 3, 2, 4];
// var arr = [4, 3, 1, 2];
var arr = [39, 27, 11, 4, 24, 32, 32, 1];
// var arr = [1, 2, 3, 4];
// var arr = [5, 5, 5, 5, 5];
var stack = [];
var res = [];

// var sum = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  while (stack.length && arr[i] <= stack[stack.length - 1]) {
    stack.pop();
  }
  if (stack.length) {
    res.push(stack[stack.length - 1]);
    // sum += stack[stack.length - 1];
  } else {
    res.push(-1);
}
  stack.push(arr[i]);
}

console.log(res.reverse());

// var sum = 0;
// for (let i = 0; i < res.length; i++) {
//   if (res[i] !== -1) {
//     sum += res[i];
//   }
// }

// console.log(sum);
