function lowerBound(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] >= target) high = mid - 1;
    else low = mid + 1;
  }
  return low;
}

function upperBound(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] <= target) low = mid + 1;
    else high = mid - 1;
  }
  return high;
}

function runProgram(input) {
  input = input.split("\n");
  var [len, target] = input[0].split(" ").map(Number);
  var arr = input[1].split(" ").map(Number);
  var lIndex = lowerBound(arr, target);
  var hIndex = upperBound(arr, target);
  console.log(hIndex - lIndex + 1);
}
if (process.env.USER === "madandev") {
  runProgram(`6 3\n2 3 3 3 6 9`);
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
