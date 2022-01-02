function maxLoot(arr, n) {
  if (n == 0) return 0;
  if (n == 1) return arr[0];
  if (n == 2) return Math.max(arr[0], arr[1]);

  let dp = new Array(n);

  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < n; i++) dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);

  return dp[n - 1];
}

function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var len = +input[line++];
    var arr = input[line++].split(" ").map(Number);
    let n = arr.length;
    console.log(maxLoot(arr, n));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`3\n2\n1 100\n3\n2 100 99\n4\n100 1 1 100`);
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
