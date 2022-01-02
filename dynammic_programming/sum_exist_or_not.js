function ss(arr, n, sum, dp) {
  if (sum === 0) {
    return true;
  }
  if (n === 0) {
    return false;
  }

  if (typeof dp[n - 1][sum] !== "undefined") {
    return dp[n - 1][sum];
  }

  if (arr[n - 1] > sum) {
    return (dp[n - 1][sum] = ss(arr, n - 1, sum, dp));
  } else {
    return (dp[n - 1][sum] =
      ss(arr, n - 1, sum - arr[n - 1], dp) || ss(arr, n - 1, sum, dp));
  }
}

function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var arr = input[1].split(" ").map(Number);
  var sum = +input[2];
  var n = arr.length;

  var dp = Array(arr.length)
    .fill()
    .map(() => Array(sum + 1));

  if (ss(arr, n, sum, dp)) console.log("yes");
  else console.log("no");
}
if (process.env.USER === "madandev") {
  runProgram(`9\n1 2 3 4 5 6 7 8 9\n5`);
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
