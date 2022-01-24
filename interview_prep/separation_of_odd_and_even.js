function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);

    arr.sort((a, b) => {
      return a - b;
    });

    var query = +input[line++];
    var even = [];
    var odd = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) even.push(arr[i]);
      else odd.push(arr[i]);
    }

    // even.sort((a, b) => {
    //   return a - b;
    // });
    // odd.sort((a, b) => {
    //   return a - b;
    // });

    if (query === 1) {
      console.log(even.join(" ") + " " + odd.join(" "));
    } else if (query === 2) {
      console.log(odd.join(" ") + " " + even.join(" "));
    }
  }
}

if (process.env.USER === "madandev") {
  runProgram(`2\n6\n1 3 5 2 7 4\n1\n6\n1 3 5 2 7 4\n2`);
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
