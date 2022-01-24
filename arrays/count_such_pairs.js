// https://oj.masaischool.com/contest/1430/problem/1

// PROBLEM STATEMENT
// You are given an array A of N integers along with a target integer. Your task is to find out the number of pairs of integers present in the array whose sum is equal to the target value.

// NESTED FOR LOOP (O(n^2))

// function runProgram(input) {
//   input = input.split("\n");
//   var [len, target] = input[0].split(" ").map(Number);
//   var arr = input[1].split(" ").map(Number);

//   var count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] + arr[j] === target) {
//         count++;
//       }
//     }
//   }

//   console.log(count / 2);
// }
// if (process.env.USER === "madandev") {
//   runProgram(`5 9
// 3 0 6 2 7`);
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

// TWO POINTERS (O(n log(n))

// function runProgram(input) {
//   input = input.split("\n");
//   var [len, target] = input[0].split(" ").map(Number);
//   var arr = input[1].split(" ").map(Number);
//   var count = 0;
//   var start = 0;
//   var end = arr.length - 1;

//   arr.sort((a, b) => {
//     return a - b;
//   });

//   while (start < end) {
//     if (arr[start] + arr[end] === target) {
//       count++;
//       start++;
//       end--;
//     } else if (arr[start] + arr[end] < target) {
//       start++;
//     } else {
//       end--;
//     }
//   }
//   console.log(count);
// }
// if (process.env.USER === "madandev") {
//   runProgram(`5 9
// 3 0 6 2 7`);
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

// KEY:VALUE PAIRS (O(n)))

function runProgram(input) {
  input = input.split("\n");
  var [len, target] = input[0].split(" ").map(Number);
  var arr = input[1].split(" ").map(Number);
  var obj = {};
  var count = 0;

  // i + j = target
  // target - i = j

  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]]) {
      count += obj[target - arr[i]];
    }
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(count);
}
if (process.env.USER === "madandev") {
  runProgram(`2 4\n2 2`);
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
