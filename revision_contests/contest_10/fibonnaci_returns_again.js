function fib(n, dp) {
  if (n === 1) return 1;
  if (n <= 0) return 0;
  if (typeof dp[n] !== "undefined") {
    return dp[n];
  }
  return (dp[n] = fib(n - 1, dp) + fib(n - 2, dp));
}

function runProgram(input) {
  var dp = [];
  console.log(fib(Number(input), dp));
}
if (process.env.USER === "madandev") {
  runProgram(`50`);
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
