function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var len = +input[line++];
    var arr1 = input[line++].split(" ").map(Number);
    var arr2 = input[line++].split(" ").map(Number);

    var count = 0;
    let i = 0,
      j = arr2.length - 1;
    while (i < arr1.length && j >= 0) {
      if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr1[i] > arr2[j]) {
        j--;
      } else {
        count++;
        i++;
        j--;
      }
    }

    console.log(count);
  }
}
if (process.env.USER === "madandev") {
  runProgram(`1\n6\n1 2 2 3 4 5\n4 4 3 2 1 1`);
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
