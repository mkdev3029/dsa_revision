function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var str = input[line++];
    var obj = {};
    var flag = true;
    for (let i = 0; i < str.length; i++) {
      if (!obj[str[i]]) {
        obj[str[i]] = 1;
      } else {
        obj[str[i]] = obj[str[i]] + 1;
      }
    }
    var evenCount = 0;
    var oddCount = 0;
    for (const key in obj) {
      if (obj[key] % 2 !== 0) {
        oddCount++;
      }
    }
    if (oddCount > 1) {
      flag = false;
    }
    if (flag) console.log("Possible!");
    else console.log("Not Possible!");
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n6\naabbcc\n5\naabcd`);
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
