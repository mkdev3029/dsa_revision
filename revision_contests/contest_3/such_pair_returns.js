function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var [len, target] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    arr.sort((a, b) => {
      return a - b;
    });
    var start = 0;
    var end = arr.length - 1;
    var ans = -1;
    while (start < end) {
      if (arr[start] + arr[end] === target) {
        ans = 1;
        break;
      } else if (arr[start] + arr[end] < target) {
        start++;
      } else if (arr[start] + arr[end] > target) {
        end--
      }
    }
    
    console.log(ans);
  }
}
if (process.env.USER === "madandev") {
  runProgram(`1\n5 2\n3 4 0 2 7`);
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
