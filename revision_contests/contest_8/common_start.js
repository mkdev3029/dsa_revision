function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var arr = input[line++].split(" ");
    arr.sort();

    var str1 = arr[0];
    var str2 = arr[arr.length - 1];

    var ans = "";
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        break;
      }
      ans += str1[i];
    }

    if (ans.length === 0) {
      console.log("None");
    } else {
      console.log(ans);
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`1\nrbbyrrby rbb rbbybbryb`);
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
