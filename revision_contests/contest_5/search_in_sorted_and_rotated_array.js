function search(arr, l, h, key) {
  if (l > h) return -1;

  let mid = Math.floor((l + h) / 2);
  if (arr[mid] == key) return mid;

  if (arr[l] <= arr[mid]) {
    if (key >= arr[l] && key <= arr[mid]) return search(arr, l, mid - 1, key);
    return search(arr, mid + 1, h, key);
  }
  if (key >= arr[mid] && key <= arr[h]) return search(arr, mid + 1, h, key);

  return search(arr, l, mid - 1, key);
}

function runProgram(input) {
  input = input.split("\n");
  var [len, target] = input[0].split(" ").map(Number);
  var arr = input[1].split(" ").map(Number);
  var low = 0;
  var high = arr.length - 1;
  console.log(search(arr, low, high, target));
}
if (process.env.USER === "madandev") {
  runProgram(`10 -1\n4 6 7 9 10 -1 0 1 2 3`);
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
  process.on("SIGlet", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

// 4 6 7 9 10 -1 0 1 2 3

if (arr[low] <= arr[mid]) {
  if (target >= arr[low] && target <= arr[mid]) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
} else if (arr[high] >= arr[mid]) {
  if (target >= arr[mid] && target <= arr[high]) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}
