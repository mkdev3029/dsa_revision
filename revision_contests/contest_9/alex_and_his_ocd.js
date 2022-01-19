function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0 && arr[i] % 3 === 0 && arr[i] % 10 === 0) {
        count++;
      }
    }
    console.log(count);
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2
3
60 60 60
5
30 30 10 20 400`);
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
