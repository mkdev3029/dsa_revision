function fib(n) {
  if (n === 1) return 1;
  if (n <= 0) return 0;
  return fib(n - 1) + fib(n - 2);
}

function runProgram(input) {
  console.log(fib(Number(input)));
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
