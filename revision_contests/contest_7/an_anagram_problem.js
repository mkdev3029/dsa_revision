function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var arr = [];
  var obj = {};
  for (let i = 1; i <= cases; i++) {
    arr.push(input[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    var sorted = arr[i].split("").sort().join("");
    if (!obj[sorted]) {
      obj[sorted] = arr[i];
    }
  }
  console.log(obj)
  var ans = [];
  for (const key in obj) {
    ans.push(obj[key]);
  }
  ans.sort();
  console.log(ans.length);
  console.log(ans.join("\n"));
}
if (process.env.USER === "madandev") {
  runProgram(`5
eodc
odec
code
baca
aabc`);
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
