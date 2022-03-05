// function runProgram(input) {
//   input = input.trim().split("\n");
//   var cases = +input[0];
//   var line = 1;
//   for (let k = 0; k < cases; k++) {
//     var [len, target] = input[line++].trim().split(" ").map(Number);
//     var arr = input[line++].trim().split(" ").map(Number);

//     var x = 0;
//     var y = Number.MAX_VALUE;

//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         for (let k = j + 1; k < arr.length; k++) {
//           if (arr[i] + arr[j] + arr[k] < target) {
//             x = Math.max(x, arr[i] + arr[j] + arr[k]);
//           } else {
//             y = Math.min(y, arr[i] + arr[j] + arr[k]);
//           }
//         }
//       }
//     }

//     if (x === 0 && y === Number.MAX_VALUE) {
//       console.log(0);
//     } else if (x !== 0 && y === Number.MAX_VALUE) {
//       console.log(x);
//     } else if (x === 0 && y !== Number.MAX_VALUE) {
//       console.log(y);
//     } else {
//       console.log(y);
//     }
//   }
// }
// if (process.env.USER === "madandev") {
//   runProgram(`2\n4 1\n-1 2 1 -4\n3 1\n0 0 0`);
//   // runProgram(`1\n5 16\n-6 9 -1 -11 -11`);
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

//  Find largest possible palindrome using characters of given string completely or partially

// var str = "forgeeksskeegfor";
// // var str = "abc";

// var result = [];

// for (let i = 0; i < str.length; i++) {
//   var res = "";
//   for (let j = i; j < str.length; j++) {
//     res += str[j];
//     result.push(res);
//   }
// }

// function isPalindrome(str) {
//   var start = 0;
//   var end = str.length - 1;
//   var flag = true;
//   while (start < Math.floor(str.length / 2)) {
//     if (str[start] !== str[end]) {
//       flag = false;
//       break;
//     }
//     start++;
//     end--;
//   }
//   return flag;
// }

// var max = 0;
// var ans;

// for (let i = 0; i < result.length; i++) {
//   if (isPalindrome(result[i])) {
//     if (result[i].length > max) {
//       max = result[i].length;
//       ans = result[i];
//     }
//   }
// }

// console.log(max);
// console.log(ans);

// JavaScript program to make an array same to another
// using minimum number of swap

// Function returns the minimum number of swaps
// required to sort the array
// This method is taken from below post
/*
// https://www.geeksforgeeks.org/minimum-number-swaps
// -required-sort-array/
// */
// function minSwapsToSort(arr, n) {
//   // Create an array of pairs where first
//   // element is array element and second element
//   // is position of first element
//   let arrPos = [];
//   for (let i = 0; i < n; i++) {
//     arrPos.push([arr[i], i]);
//   }

//   console.log("before sort", arrPos);

//   // Sort the array by array element values to
//   // get right position of every element as second
//   // element of pair.
//   arrPos.sort(function (a, b) {
//     return a[0] - b[0];
//   });

//   console.log("after sort", arrPos);

//   // To keep track of visited elements. Initialize
//   // all elements as not visited or false.
//   let vis = new Array(n);
//   for (let i = 0; i < n; i++) {
//     vis[i] = false;
//   }

//   // Initialize result
//   let ans = 0;

//   // Traverse array elements
//   for (let i = 0; i < n; i++) {
//     // already swapped and corrected or
//     // already present at correct pos
//     if (vis[i] || arrPos[i][1] == i) continue;

//     // find out the number of node in
//     // this cycle and add in ans
//     let cycle_size = 0;
//     let j = i;
//     while (!vis[j]) {
//       vis[j] = true;

//       // move to next node
//       j = arrPos[j][1];
//       cycle_size++;
//     }

//     // Update answer by adding current cycle.
//     ans += cycle_size - 1;
//   }

//   // Return result
//   return ans;
// }

// // method returns minimum number of swap to make
// // array B same as array A
// function minSwapToMakeArraySame(a, b, n) {
//   // map to store position of elements in array B
//   // we basically store element to index mapping.
//   let mp = new Map();

//   for (let i = 0; i < n; i++) {
//     mp.set(b[i], i);
//   }

//   console.log(mp);

//   // now we're storing position of array A elements
//   // in array B.
//   for (let i = 0; i < n; i++) b[i] = mp.get(a[i]);

//   console.log(b);

//   /* We can uncomment this section to print modified
// 		b array
// 		for (int i = 0; i < N; i++)
// 			cout << b[i] << " ";
// 		cout << endl; */

//   // returning minimum swap for sorting in modified
//   // array B as final answer
//   return minSwapsToSort(b, n);
// }

// // Driver code
// let a = [3, 6, 4, 8];
// let b = [4, 6, 8, 3];
// let n = a.length;
// console.log(minSwapToMakeArraySame(a, b, n));
