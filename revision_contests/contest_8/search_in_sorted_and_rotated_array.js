function search(arr, low, high, target) {
  if (low > high) return -1;

  let mid = low + Math.floor((high - low) / 2);

  if (arr[mid] === target) return mid;
  if (arr[low] <= arr[mid]) {
    if (target >= arr[low] && target <= arr[mid])
      return search(arr, low, mid - 1, target);
    return search(arr, mid + 1, high, target);
  }
  if (target >= arr[mid] && target <= arr[high])
    return search(arr, mid + 1, high, target);
  return search(arr, low, mid - 1, target);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var [len, target] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  console.log(search(arr, 0, arr.length - 1, target));
}
if (process.env.USER === "madandev") {
  runProgram(`5 1\n3 4 5 1 2`);
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
