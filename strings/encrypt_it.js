function runProgram(input) {
  var input = input.split("\n");
  var str = input[0];
  var k = +input[1];
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var res = "";
  for (let i = 0; i < str.length; i++) {
    if (upper.includes(str[i])) {
      var index = upper.indexOf(str[i]);
      var letter = (index + k) % upper.length;
      res += upper[letter];
    } else if (lower.includes(str[i])) {
      var index = lower.indexOf(str[i]);
      var letter = (index + k) % lower.length;
      res += lower[letter];
    } else if (num.includes(str[i])) {
      var index = num.indexOf(str[i]);
      var number = (index + k) % num.length;
      res += num[number];
    } else {
      res += str[i];
    }
  }
  console.log(res);
}
if (process.env.USER === "madandev") {
  runProgram(`All-convoYs-9-be:Alert1.\n4`);
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
