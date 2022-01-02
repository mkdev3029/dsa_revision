function sortStack(arr) {
  var tmpStack = [];
  var res = arr;

  while (res.length != 0) {
    var tmp = res.pop();
    while (tmpStack.length != 0 && tmpStack[tmpStack.length - 1] > tmp) {
      res.push(tmpStack.pop());
    }
    tmpStack.push(tmp);
  }

  return tmpStack;
}

function runProgram(input) {
  input = input.trim().split("\n");
  var line = 0;
  while (true) {
    var len = +input[line++];
    if (len === 0) {
      break;
    }
    var arr = input[line++].trim().split(" ").map(Number);

    var ans = sortStack(arr);
    var flag = true;
    for (let i = 0; i < ans.length - 1; i++) {
      if (ans[i] > ans[i + 1]) {
        flag = false;
        break;
      }
    }
    if (flag) console.log("yes");
    else console.log("no");
  }
}
if (process.env.USER === "madandev") {
  // runProgram(`5\n5 1 2 4 3 \n0`);
  runProgram(`6\n3 4 5 6 1  2`);
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
