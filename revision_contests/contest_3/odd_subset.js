var count = 0;

function subset(arr, temp, k) {
  // if (temp.length === 0) count++;
  for (let i = k; i < arr.length; i++) {
    temp.push(arr[i]);
    var oddSum = 0;
    for (let j = 0; j < temp.length; j++) {
      oddSum += temp[j];
    }
    if (oddSum % 2 !== 0) {
      count++;
    }
    subset(arr, temp, i + 1);
    temp.pop();
  }
}

function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var temp = [];

  subset(arr, temp, 0);
  console.log(count);
}
if (process.env.USER === "madandev") {
  // runProgram(`3\n1 2 3`);
  // runProgram(`2\n2 4`);
  runProgram(`7\n-3 -1 -10 8 -5 0 7`);
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
