function runProgram(input) {
  var input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var len = +input[line++];
    var str1 = input[line++];
    var str2 = input[line++];

    var left = -1;
    var right = -1;

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        left = i;
        break;
      }
    }

    for (let i = str1.length - 1; i > 0; --i) {
      if (str1[i] !== str2[i]) {
        right = i;
        break;
      }
    }

    var reversedStr =
      str1.substring(0, left) +
      str1
        .substring(left, right + 1)
        .split("")
        .reverse()
        .join("") +
      str1.substring(right + 1);

    if (reversedStr === str2) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n2\nab\nac\n3\naba\naab`);
  // runProgram(`1\n2\nabbbca\nabcbba`);
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
