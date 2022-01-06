function tallest(arr, k) {
  var queue = [];
  for (let i = 0; i <= arr.length - k; i++) {
    var max = arr[i];
    for (let j = i; j < i + k; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    queue.push(max);
  }
  return queue;
}

function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var [len, k] = input[line++].split(" ").map(Number);
    var arr = input[line++].split(" ").map(Number);
    console.log(tallest(arr, k).join(" "));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`1\n9 3\n1 2 3 1 4 5 2 3 6`);
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
