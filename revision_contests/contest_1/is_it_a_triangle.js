// A + B > C and B + C > A and C + A > B
function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var [a, b, c] = input[line++].trim().split(" ").map(Number);

    if (a + b > c && b + c > a && c + a > b) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`4\n4 5 13\n7 1 8\n2 5 4\n2 2 2`);
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
