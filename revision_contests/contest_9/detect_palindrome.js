function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var str = input[line++];
    var obj = {};
    for (let i = 0; i < str.length; i++) {
      if (!obj[str[i]]) {
        obj[str[i]] = 1;
      } else {
        obj[str[i]] = obj[str[i]] + 1;
      }
    }
    var oddCount = 0;
    for (const key in obj) {
      if (obj[key] % 2 !== 0) {
        oddCount++;
      }
    }
    console.log(obj);
    if (oddCount <= 1) {
      console.log("Possible!");
    } else {
      console.log("Not Possible!");
    }
  }
}
if (process.env.USER === "madandev") {
  //   runProgram(`2
  // 6
  // aabbcc
  // 5
  // aabcd`);
  // runProgram(`1\n7\ngiggbgb`);
  runProgram(`1\n7\naac`);
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
