function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var [len, target] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);

    var x = 0;
    var y = Number.MAX_VALUE;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] < target) {
            x = Math.max(x, arr[i] + arr[j] + arr[k]);
          } else {
            y = Math.min(y, arr[i] + arr[j] + arr[k]);
          }
        }
      }
    }
    
    if (x === 0 && y === Number.MAX_VALUE) {
      console.log(0);
    } else if (x !== 0 && y === Number.MAX_VALUE) {
      console.log(x);
    } else if (x === 0 && y !== Number.MAX_VALUE) {
      console.log(y);
    } else {
      console.log(y);
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n4 1\n-1 2 1 -4\n3 1\n0 0 0`);
  // runProgram(`1\n5 16\n-6 9 -1 -11 -11`);
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
