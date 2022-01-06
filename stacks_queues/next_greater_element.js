// NEXT GREATER ELEMENT - RIGHT
function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var arr = input[line++].split(" ").map(Number);
    var stack = [];
    var res = [];
    var sum = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length && arr[i] >= stack[stack.length - 1]) {
        stack.pop();
      }
      if (stack.length) {
        res.push(stack[stack.length - 1]);
        sum += arr[i];
      } else {
        res.push(-1);
      }
      stack.push(arr[i]);
    }

    console.log(sum);
    // console.log(res.reverse().join(" "));
  }
}

if (process.env.USER === "madandev") {
  // runProgram(`1\n4\n1 3 2 4`);
  // runProgram(`1\n5\n2 3 5 8 3`);
  runProgram(`1\n6\n6 10 4 8 3 7`);
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
