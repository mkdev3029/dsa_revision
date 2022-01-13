function runProgram(input) {
  input = input.split("\n");
  var [len, k] = input[0].split(" ").map(Number);
  var arr = input[1].split(" ").map(Number);
  count = k - 1;
  if (arr[k - 1] == 0) {
    console.log(0);
  } else {
    for (let i = k - 1; i < len; i++) {
      if (arr[i] >= arr[k - 1]) {
        count++;
      }
    }
    console.log(count);
  }
}

if (process.env.USER === "madandev") {
  runProgram(`8 5\n10 9 8 7 7 7 5 5`);
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
