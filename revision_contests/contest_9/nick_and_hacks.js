function nickAndHacks(n, num) {
  if (n === num) return true;
  if (n > num) return false;
  if (nickAndHacks(n * 10, num) || nickAndHacks(n * 20, num)) {
    return true;
  } else {
    return false;
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var num = +input[line++];
    if (nickAndHacks(1, num)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`5
1
2
10
25
200`);
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
