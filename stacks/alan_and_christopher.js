function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var str = input[line++];
    var stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") {
        stack.pop();
        continue;
      }
      stack.push(str[i]);
    }
    console.log(stack.join(""));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\nab#d\na#bc`);
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
