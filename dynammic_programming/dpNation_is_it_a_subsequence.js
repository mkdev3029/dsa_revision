// Iterative approach

function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var str1 = input[line++];
    var str2 = input[line++];

    let j = 0;
    for (let i = 0; i < str2.length && j < str1.length; i++) {
      if (str1[j] == str2[i]) {
        j++;
      }
    }

    if (j == str1.length) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\nabc\nadbce\nax\nxaa`);
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

// Recursive approach

function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var str1 = input[line++];
    var str2 = input[line++];

    if (isItASubsequence(str1, str2, 0, 0)) console.log("YES");
    else console.log("NO");

    function isItASubsequence(str1, str2, i, j) {
      if (i == str1.length) return true;
      if (j == str2.length) return false;
      if (str1[i] == str2[j]) return isItASubsequence(str1, str2, i + 1, j + 1);

      return isItASubsequence(str1, str2, i, j + 1);
    }
  }
}
if (process.env.USER === "madandev") {
  // runProgram(`2\nabc\nadbce\nax\nxaa`);
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
