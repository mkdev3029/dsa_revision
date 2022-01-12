function ways(n, dp) {
  if (n === 0) return 1;
  if (n < 0) return 0;
  if (typeof dp[n] !== "undefined") {
    return dp[n];
  }
  return (dp[n] = ways(n - 1, dp) + ways(n - 2, dp) + ways(n - 3, dp));
}

function runProgram(input) {
  var n = +input;
  var dp = [];
  console.log(ways(n, dp));
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
