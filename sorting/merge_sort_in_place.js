// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r) {
  // var n1 = m - l + 1;
  // var n2 = r - m;

  // Create temp arrays
  // var L = new Array(n1);
  var L = [];
  // var R = new Array(n2);
  var R = [];

  // Copy data to temp arrays L[] and R[]
  // for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var i = l; i < m + 1; i++) L.push(arr[i]);
  // for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  for (var j = m + 1; j < r + 1; j++) R.push(arr[j]);

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < L.length && j < R.length) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
      // i++;
    } else {
      arr[k++] = R[j++];
      // j++;
    }
    // k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < L.length) {
    arr[k++] = L[i++];
    // i++;
    // k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < R.length) {
    arr[k++] = R[j++];
    // j++;
    // k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + Math.floor((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

// This code is contributed by SoumikMondal

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
