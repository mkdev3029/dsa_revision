function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let mergedArr = [];
  while (left.length && right.length) {
    left[0] < right[0]
      ? mergedArr.push(left.shift())
      : mergedArr.push(right.shift());
  }
  while (left.length) {
    mergedArr.push(left.shift());
  }

  while (right.length) {
    mergedArr.push(right.shift());
  }

  return mergedArr;
}

function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var arr = input[1].split(" ").map(Number);

  console.log(mergeSort(arr).join(" "));
}
if (process.env.USER === "madandev") {
  runProgram(`5\n3 5 0 9 8`);
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
