function ways(arr, n, target, dp) {
  if (target == 0) return (dp[n][target] = 1);
  if (target < 0) return 0;
  if (n <= 0 && target >= 1) return 0;
  if (typeof dp[n][target] !== "undefined") return dp[n][target];
  dp[n][target] =
    ways(arr, n - 1, target, dp) + ways(arr, n, target - arr[n - 1], dp);
  console.log(dp)
  return dp[n][target];
}

function runProgram(input) {
  input = input.trim().split("\n");
  var [target, n] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var dp = Array(n + 1)
    .fill()
    .map(() => Array(target + 1));
  console.log(ways(arr, n, target, dp));
}

if (process.env.USER === "madandev") {
  runProgram(`4 3\n1 2 3`);
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
