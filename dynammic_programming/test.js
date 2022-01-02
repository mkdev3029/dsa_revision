// function runProgram(input) {
//   input = input.split("\n");
//   var [n, m] = input[0].split(" ").map(Number);
//   var arr = input[1].split(" ").map(Number);
//   var count = 0;

//   ways(arr, n, 0);

//   console.log(count);

//   function ways(arr, n, sum) {
//     // if (sum > n) return;
//     if (sum === n) {
//       return;
//     }
//     count++;
//     for (let i = 0; i < arr.length; i++) {
//       ways(arr, n, sum + arr[i]);
//     }
//   }
// }
// if (process.env.USER === "madandev") {
//   runProgram(`4 3\n1 2 3`);
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

