function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var str = input[1];
  var start = 0;
  var end = len - 1;
  var flag = true;
  while (start < end) {
    if (str[start] !== str[end]) {
      flag = false;
      break;
    }
    start++;
    end--;
  }
  flag ? console.log("Yes") : console.log("No");
}

if (process.env.USER === "madandev") {
  runProgram(`6\nnrupul`);
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
