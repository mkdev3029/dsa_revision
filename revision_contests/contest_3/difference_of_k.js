function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var [len, target] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    let l = 0;
    let r = 0;
    var ans = "No";
    while (r < arr.length) {
      if (arr[r] - arr[l] == target) {
        ans = "Yes";
        break;
      } else if (arr[r] - arr[l] > target) l++;
      else r++;
    }
    console.log(ans);
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n5 3\n1 2 3 4 5\n5 8\n1 2 3 4 5`);
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
