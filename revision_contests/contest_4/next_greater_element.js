function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    var stack = [];
    var res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
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
    console.log(res.reverse().join(" "));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`1\n4\n1 3 2 4`);
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
