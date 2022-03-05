function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let l = 0; l < cases; l++) {
    var [len, k] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    var res = [];
    for (let i = 0; i < arr.length; i++) {
      res[(i + k) % len] = arr[i];
    }
    console.log(res.join(" "));
  }
}

if (process.env.USER === "madandev") {
  runProgram(`3\n3 1\n1 2 3\n2 2\n1 2\n2 3\n1 2`);
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
