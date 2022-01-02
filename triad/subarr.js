function printSubArrays(arr, start, end) {
  if (end == arr.length) return;
  else if (start > end) printSubArrays(arr, 0, end + 1);
  else {
    printSubArrays(arr, start + 1, end);
  }
  return;
}

var arr = [1, 2, 3];
printSubArrays(arr, 0, 0);
