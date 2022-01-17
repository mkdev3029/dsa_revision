function ways(num) {
  if (num === 0) return 1;
  if (num < 0) return 0;
  return ways(num - 1) + ways(num - 2) + ways(num - 3);
}

function runProgram(input) {
  var num = +input;
  console.log(ways(num));
}

if (process.env.USER === "madandev") {
  runProgram(`4`);
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
