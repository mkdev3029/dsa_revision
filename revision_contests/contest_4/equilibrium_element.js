function runProgram(input) {
  input = input.trim().split("\n");
  var len = +input[0];
  var arr = input[1].split(" ").map(Number);
  var mid = Math.floor(arr.length / 2);
  var firstHalfSum = 0;
  var secondHalfSum = 0;
  for (let i = 0; i < mid; i++) {
    firstHalfSum += arr[i];
  }
  for (let i = mid + 1; i < arr.length; i++) {
    secondHalfSum += arr[i];
  }
  // console.log(firstHalfSum, secondHalfSum);
  if (firstHalfSum === secondHalfSum) {
    console.log(mid + 1);
  } else {
    console.log(-1);
  }
}
if (process.env.USER === "madandev") {
  runProgram(`5\n3 3 5 5 1`);
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
