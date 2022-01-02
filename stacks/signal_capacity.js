// ACCEPTED

function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var arr = input[line++].split(" ").map(Number);
    var stack = [];
    var res = [];
    for (let i = 0; i < arr.length; i++) {
      var count = 1;
      while (stack.length && arr[i] >= stack[stack.length - 1][0]) {
        var popped = stack.pop();
        count += popped[1];
      }
      stack.push([arr[i], count]);
      res.push(count);
    }

    console.log(res.join(" "));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n7\n100 80 60 70 60 75 85\n5\n3 5 0 9 8`);
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
