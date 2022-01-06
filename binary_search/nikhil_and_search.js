function upperBound(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  var ans = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] <= target) {
      low = mid + 1;
    } else {
      ans = mid;
      high = mid - 1;
    }
  }
  return ans;
}

function lowerBound(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  var ans = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function runProgram(input) {
  var input = input.split("\n");
  var len = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  arr.sort((a, b) => {
    return a - b;
  });
  var q = +input[2];
  var line = 3;
  for (let k = 0; k < q; k++) {
    var [type, target] = input[line++].trim().split(" ").map(Number);
    if (type === 0) {
      // ">="
      var index = lowerBound(arr, target);
      if (index < 0 || index >= arr.length) {
        console.log(0);
      } else {
        console.log(arr.length - index);
      }
    } else {
      // ">"
      var index = upperBound(arr, target);
      if (index < 0 || index >= arr.length) {
        console.log(0);
      } else {
        console.log(arr.length - index);
      }
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`4\n1 2 3 4\n3\n0 5\n1 3\n0 3`);
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
