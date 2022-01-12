function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var arr = input[line++].split(" ").map(Number);
    var oneCount = 0;
    var twoCount = 0;
    var zeroCount = 0;
    var res = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) oneCount++;
      else if (arr[i] === 2) twoCount++;
      else if (arr[i] === 0) zeroCount++;
    }
    for (let i = 0; i < zeroCount; i++) {
      res.push(0);
    }
    for (let i = 0; i < oneCount; i++) {
      res.push(1);
    }
    for (let i = 0; i < twoCount; i++) {
      res.push(2);
    }
    console.log(res.join(" "));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`3\n1\n2\n3\n2 0 1\n4\n2 0 2 1`);
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
