function merge(arr, l, m, r) {
  console.log(`range ${l} ${m} ${r}`);
  var L = [];
  var R = [];

  for (var i = l; i < m + 1; i++) L.push(arr[i]);
  for (var j = m + 1; j < r + 1; j++) R.push(arr[j]);

  console.log(`${L} | ${R}`);

  var i = 0;

  var j = 0;

  var k = l;

  while (i < L.length && j < R.length) {
    if (L[i] <= R[j]) {
      console.log(`L[i] <= R[j] ${L[i]} | ${R[j]}`);
      arr[k++] = L[i++];
    } else {
      console.log(`L[i] > R[j] ${L[i]} | ${R[j]}`);
      arr[k++] = R[j++];
    }
  }

  while (i < L.length) {
    arr[k++] = L[i++];
  }

  while (j < R.length) {
    arr[k++] = R[j++];
  }
  console.log(arr);
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  var m = l + Math.floor((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var arr = input[1].split(" ").map(Number);
  var arr_size = arr.length;

  mergeSort(arr, 0, arr_size - 1);
  console.log(arr.join(" "));
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
