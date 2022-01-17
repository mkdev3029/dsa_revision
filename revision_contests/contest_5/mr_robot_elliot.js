function solve(a, i, j, ans) {
  if (i > j) {
    return ans;
  }
  var mid = Math.floor((i + j) / 2);
  var ans =
    ans + a.charAt(mid) + solve(a, i, mid - 1, ans) + solve(a, mid + 1, j, ans);
  return ans;
}

function helper(str) {
  var result = solve(str, 0, str.length - 1, "");
  console.log(result);
}

function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var str = input[line++];
    helper(str);
  }
}

if (process.env.USER === "madandev") {
  runProgram(`3\n3\nabc\n4\nabcd\n11\nabcdefghijk`);
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
