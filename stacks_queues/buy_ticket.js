function runProgram(input) {
  input = input.split("\n");
  var n = +input[0];
  var queue = [];
  for (let i = 1; i <= n; i++) {
    var [type, num] = input[i].split(" ");
    if (type === "E") {
      queue.push(Number(num));
      console.log(queue.length);
    } else if (type === "D") {
      var del = queue.shift();
      console.log(del ? del : -1, queue.length);
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`5\nE 2\nD\nD\nE 3\nD`);
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

function runProgram(input) {}
if (process.env.USER === "madandev") {
  runProgram(``);
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
