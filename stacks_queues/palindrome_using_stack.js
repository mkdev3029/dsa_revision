function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var str = input[line++];
    var stack = [];
    var flag = true;
    var mid = Math.floor(str.length / 2);
    for (let i = 0; i < mid; i++) {
      stack.push(str[i]);
    }
    if (str.length % 2 !== 0) {
      mid++;
    }
    for (let i = mid; i < str.length; i++) {
      // console.log(`${stack[stack.length - 1]} | ${str[i]}`);
      if (stack[stack.length - 1] !== str[i]) {
        flag = false;
        break;
      } else {
        stack.pop();
      }
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
