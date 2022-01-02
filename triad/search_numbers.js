function lowerBound(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] >= target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

function upperBound(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  arr = arr.sort((a, b) => a - b);
  let ans = [];
  let n1 = +input[2];
  let line = 3;
  for (let i = 0; i < n1; i++) {
    let dim = input[line++].trim().split(" ").map(Number);
    let l = +dim[0];
    let r = +dim[1];
    var lIndex = lowerBound(arr, l);
    var hIndex = upperBound(arr, r);
    ans.push(hIndex - lIndex + 1);
  }
  console.log(ans.join(" "));
}
if (process.env.USER === "madandev") {
  runProgram(`5\n10 1 10 3 4\n4\n1 10\n2 9\n3 4\n2 2`);
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
