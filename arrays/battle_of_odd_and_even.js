function runProgram(input) {
  input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  var oddSum = 0;
  var evenSum = 0;
  for (let i = 0; i < n; i++) {
    arr[i] % 2 === 0 ? (evenSum += arr[i]) : (oddSum += arr[i]);
  }
  oddSum > evenSum ? console.log("Odd") : console.log("Even");
}
if (process.env.USER === "madandev") {
  runProgram(`4\n1 2 3 4`);
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
