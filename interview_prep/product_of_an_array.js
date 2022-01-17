function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    var prod = [];
    var left = [];
    var right = [];
    left[0] = 1;
    right[arr.length - 1] = 1;

    for (let i = 1; i < arr.length; i++) {
      left[i] = arr[i - 1] * left[i - 1];
    }

    for (let i = arr.length - 2; i >= 0; i--) {
      right[i] = arr[i + 1] * right[i + 1];
    }

    console.log(left);
    console.log(right);

    for (let i = 0; i < arr.length; i++) {
      prod[i] = left[i] * right[i];
    }

    console.log(prod.join(" "));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n5\n1 2 3 4 5\n3\n3 2 7`);
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
