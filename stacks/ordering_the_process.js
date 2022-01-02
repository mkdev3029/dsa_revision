function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var co = input[1].split(" ").map(Number);
  var io = input[2].split(" ").map(Number);

  var count = 0;
  while (co.length && io.length) {
    if (co[0] !== io[0]) {
      count++;
      co.push(co.shift());
    }
    if (co[0] === io[0]) {
      count++;
      co.shift();
      io.shift();
    }
  }
  console.log(count);
}

if (process.env.USER === "madandev") {
  // runProgram(`3\n3 2 1\n1 3 2`);
  // runProgram(`5\n5 4 2 3 1\n5 2 1 4 3`);
  runProgram(`10\n5 4 8 9 1 6 3 2 7 10\n1 6 8 9 5 4 10 3 2 7`);
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
