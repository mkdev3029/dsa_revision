function lowerBound(arr) {
  var low = 0;
  var high = arr.length - 1;
  var target = 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] >= target) high = mid - 1;
    else low = mid + 1;
  }
  return low;
}

function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var arr = input[1].split(" ").map(Number);
  if (lowerBound(arr) >= arr.length) {
    console.log(-1);
  } else {
    console.log(lowerBound(arr));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`5\n0 0 0 1 1`);
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
