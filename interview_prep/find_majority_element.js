function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    var obj = {};
    for (let i = 0; i < arr.length; i++) {
      if (!obj[arr[i]]) {
        obj[arr[i]] = 1;
      } else {
        obj[arr[i]] = obj[arr[i]] + 1;
      }
    }
    var element = 0;
    for (const key in obj) {
      if (obj[key] > Math.floor(arr.length / 2)) {
        element = key;
      }
    }
    if (element) {
      console.log(element);
    } else {
      console.log(-1);
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n6\n1 1 1 1 2 3\n5\n1 1 2 2 3`);
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
