function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var [row, col] = input[line++].trim().split(" ").map(Number);
    var mat = [];
    for (let i = 0; i < row; i++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    console.log(mat);
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n3 3\n1 2 3\n4 5 6\n7 8 9\n4 3\n1 2 3\n4 5 6\n7 8 9\n10 11 12`);
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
