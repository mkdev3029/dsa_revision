function runProgram(input) {
  input = input.split("\n");
  var [len, windowSize] = input[0].split(" ").map(Number);
  var str = input[1];
  var left = 0;
  var end = windowSize;
  var dist_count = 0;

  while (left < str.length - windowSize) {
    let obj = {};
    var flag = false;
    for (let i = left; i < left + end; i++) {
      if (!obj[str[i]]) {
        obj[str[i]] = 1;
      } else {
        obj[str[i]] = obj[str[i]] + 1;
        flag = true;
        break;
      }
    }
    if (!flag) {
      dist_count++;
    }
    left++;
  }
  console.log(dist_count);
}
if (process.env.USER === "madandev") {
  runProgram(`4 2\nabcc`);
  // runProgram(`11 3\naabcdabbcdc`);
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
