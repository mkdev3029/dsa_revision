function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let l = 0; l < cases; l++) {
    var len = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);

    var count = 0;
    var max = 0;
    for (let i = 0; i < arr.length; i++) {
      let subArr = [];
      for (let j = i; j < arr.length; j++) {
        subArr.push(arr[j]);
        var flag = true;
        for (let k = 0; k < subArr.length - 1; k++) {
          if (!(subArr[k] < subArr[k + 1])) {
            flag = false;
            break;
          }
        }
        if (flag && max < subArr.length) {
          var max = subArr.length;
          count++;
        }
      }
    }

    console.log(max);
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n2\n1 1\n6\n1 2 1 2 3 1`);
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
