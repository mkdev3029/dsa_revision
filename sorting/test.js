// BUBBLE SORT

// var arr = [3, 5, 0, 9, 8];

// var passes = arr.length - 1;

// for (let i = 0; i < passes; i++) {
//   var swap = false;
//   for (let j = 0; j < passes - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       var temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//       swap = true;
//     }
//   }
//   if (swap === false) {
//     break;
//   }
// }

// console.log(arr);

// SELECTION SORT

// for (let i = 0; i < arr.length - 1; i++) {
//   var minIndex = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[minIndex]) {
//       minIndex = j;
//     }
//   }
//   var temp = arr[i];
//   arr[i] = arr[minIndex];
//   arr[minIndex] = temp;
// }

// console.log(arr)

// MERGE SORT // using an extra array to store

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   var left = mergeSort(arr.slice(0, mid));
//   var right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// function merge(left, right) {
//   let mergedArr = [];
//   while (left.length && right.length) {
//     left[0] < right[0]
//       ? mergedArr.push(left.shift())
//       : mergedArr.push(right.shift());
//   }
//   while (left.length) {
//     mergedArr.push(left.shift());
//   }
//   while (right.length) {
//     mergedArr.push(right.shift());
//   }
//   return mergedArr;
// }

// console.log(mergeSort(arr));

// MERGE SORT - IN PLACE

// function merge(arr, l, m, r) {
//   var L = [];

//   var R = [];

//   for (var i = l; i < m + 1; i++) L.push(arr[i]);

//   for (var j = m + 1; j < r + 1; j++) R.push(arr[j]);

//   var i = 0;

//   var j = 0;

//   var k = l;

//   while (i < L.length && j < R.length) {
//     if (L[i] <= R[j]) {
//       arr[k++] = L[i++];
//     } else {
//       arr[k++] = R[j++];
//     }
//   }

//   while (i < L.length) {
//     arr[k++] = L[i++];
//   }

//   while (j < R.length) {
//     arr[k++] = R[j++];
//   }
// }

// function mergeSort(arr, l, r) {
//   if (l >= r) {
//     return; //returns recursively
//   }
//   var m = l + Math.floor((r - l) / 2);
//   mergeSort(arr, l, m);
//   mergeSort(arr, m + 1, r);
//   merge(arr, l, m, r);
// }

// function runProgram(input) {
//   input = input.split("\n");
//   var len = +input[0];
//   var arr = input[1].split(" ").map(Number);
//   var arr_size = arr.length;

//   mergeSort(arr, 0, arr_size - 1);
//   console.log(arr.join(" "));
// }
// if (process.env.USER === "madandev") {
//   runProgram(`5\n3 5 0 9 8`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
