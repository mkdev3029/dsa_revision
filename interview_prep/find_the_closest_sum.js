function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var [len, target] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    var closestSum = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (
            Math.abs(target - closestSum) >
            Math.abs(target - (arr[i] + arr[j] + arr[k]))
          ) {
            console.log('closest',arr[i], arr[j], arr[k]);
            closestSum = arr[i] + arr[j] + arr[k];
          }
        }
      }
    }
    if (closestSum === Number.MAX_VALUE) {
      console.log(0);
    } else {
      console.log(closestSum);
    }
  }
}
if (process.env.USER === "madandev") {
  // runProgram(`2\n4 1\n-1 2 1 -4\n3 1\n0 0 0`);
  runProgram(`1\n6 5\n-4 1 -5 3 2 -5`);
  // runProgram(`1\n2 3\n-1 -3`);
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
