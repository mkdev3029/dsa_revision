// function sum(L, R, arr) {
//   L = L - 1;
//   R = R - 1;
//   var sum = 0;
//   for (let i = L; i <= R; i++) { // L <= R
//     sum += arr[i];
//   }
//   return sum;
// }

// function sum(L, R, arr, s) {
//   if (R === L) return arr[R];
//   return arr[R] + sum(L, R - 1, arr, s);
// }

// function runProgram(input) {
//   input = input.split("\n");
//   var len = +input[0];
//   var arr = input[1].split(" ").map(Number);
//   var query = +input[2];
//   var line = 3;
//   for (let k = 0; k < query; k++) {
//     var [L, R] = input[line++].split(" ").map(Number);
//     L = L - 1;
//     R = R - 1;
//     console.log(eval([].join("+")));
//     // console.log(sum(L, R, arr, 0));
//   }
// }
// if (process.env.USER === "madandev") {
//   runProgram(`4\n3 2 1 5\n4\n1 3\n2 4\n1 4\n3 3`);
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
