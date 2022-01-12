// var arr = [3, 5, 3, 4];
// var wt = 5;

// var arr = [1, 2, 2, 3];
// var wt = 3;

// left = 0 | right = 1

// sum = 0
// 0 < 4
// 3 + 5 < 5 (false)
// 2

// left = 0 | right = 2
// sum = 0
// 0 < 4
// 3 + 3 < 5 (false)
//

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var [len, wt] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    arr.sort((a, b) => {
      return a - b;
    });
    var i = 0;
    var j = arr.length - 1;
    var ans = 0;
    while (i <= j) {
      ans++;
      if (arr[i] + arr[j] <= wt) {
        i++;
      }
      j--;
    }
    console.log(ans);
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n4 5\n3 5 3 4\n4 3\n1 2 2 3`);
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
