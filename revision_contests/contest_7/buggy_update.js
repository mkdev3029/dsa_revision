function bug(c, n) {
  if (c[0] > n[0]) return "False";
  if (c[0] === n[0]) {
    if (c[1] > n[1]) return "False";
    if (c[1] === n[1]) {
      if (c[2] > n[2]) return "False";
    }
  }
  return "True";
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var c = input[line++].trim().split(".").map(Number);
    var n = input[line++].trim().split(".").map(Number);
    console.log(bug(c, n));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`3
  2.0.1
  1.9.8
  12.0.1
  12.10.0
  1.1.10
  1.1.12`);
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
