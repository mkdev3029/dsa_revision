function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var [N, target] = input[line++].split(" ").map(Number);
    var arr = input[line++].split(" ").map(Number);

    var start = 0;
    var end = 0;
    var sum = 0;
    var flag = false;

    while (end < arr.length) {
      if (sum > target) {
        sum -= arr[start];
        start++;
      } else if (sum < target) {
        sum += arr[end];
        end++;
      }
      if (sum === target) {
        // console.log(start, end - 1);
        flag = true;
        break;
      }
    }

    if (flag) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`3\n5 3\n1 2 1 3 4\n4 5\n1 2 1 3\n3 2\n1 2 1`);
  // runProgram(`1\n2 1\n3 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
