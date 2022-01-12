function findPeak(arr, low, high, n) {
  var mid = low + Math.floor((high - low) / 2);
  if (arr[mid - 1] <= arr[mid] && arr[mid + 1] <= arr[mid]) return mid;
  else if (mid > 0 && arr[mid - 1] > arr[mid])
    return findPeak(arr, low, mid - 1, n);
  else return findPeak(arr, mid + 1, high, n);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(findPeak(arr, 0, len - 1, len));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n3\n10 20 11\n5\n1 3 6 5 4`);
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
