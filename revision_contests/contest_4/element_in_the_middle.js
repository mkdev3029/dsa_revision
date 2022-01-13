function runProgram(input) {
  input = input.trim().split("\n");
  var len = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var leftMax = [];
  var rightMin = [];
  leftMax[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
  }
  rightMin[arr.length - 1] = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], arr[i]);
  }
  console.log("l", leftMax.join(" "));
  console.log("r", rightMin.join(" "));
  var position = -1;
  for (let i = 1; i < arr.length - 1; i++) {
    if (leftMax[i - 1] < rightMin[i + 1]) {
      position = i;
      break;
    }
  }
  if (position === -1) {
    console.log(-1);
  } else {
    console.log(arr[position + 1]);
  }
}
if (process.env.USER === "madandev") {
  runProgram(`5\n4 3 6 7 8`);
  // runProgram(`8\n5 6 4 3 5 7 7 8`);
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
