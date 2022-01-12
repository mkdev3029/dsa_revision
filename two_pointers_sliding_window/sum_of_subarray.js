function subArr(arr, n, sum) {
  let prevSum = {};
  let res = 0;
  let currsum = 0;
  for (let i = 0; i < n; i++) {
    currsum += arr[i];
    if (currsum == sum) res++;

    if (typeof prevSum[currsum - sum] !== "undefined")
      res += prevSum[currsum - sum];

    if (!prevSum[currsum]) prevSum[currsum] = 1;
    else prevSum[currsum] = prevSum[currsum] + 1;
  }
  return res;
}
function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var [N, K] = input[line++].split(" ").map(Number);
    var arr = input[line++].split(" ").map(Number);
    if (subArr(arr, N, K)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USER === "madandev") {
  // runProgram(`3\n5 3\n1 2 1 3 4\n4 5\n1 2 1 3\n3 2\n1 2 1`);
  runProgram(`1\n10 3\n-1 -1 -2 1 -2 4 1 9 3 9`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
