function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var arr = input[1].split(" ").map(Number);
  var stack = [];
  var x = [];
  var y = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && stack[stack.length - 1][0] <= arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      x.push(stack[stack.length - 1][1]);
    } else {
      x.push(-1);
    }
    stack.push([arr[i], i + 1]);
  }

  stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1][0] <= arr[i]) {
      stack.pop();
    }
    if (stack.length) {
      y.push(stack[stack.length - 1][1]);
    } else {
      y.push(-1);
    }
    stack.push([arr[i], i + 1]);
  }

  y = y.reverse();

  var ans = [];
  for (let i = 0; i < x.length; i++) {
    ans.push(x[i] + y[i]);
  }

  console.log(ans.join(" "));
}
if (process.env.USER === "madandev") {
  // runProgram(`5\n5 4 1 3 2`);
  runProgram(`10\n1 2 3 4 5 6 2 9 7 8`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
