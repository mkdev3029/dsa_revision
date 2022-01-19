var flag = false;
var res = [];
function subsequence(arr, temp, k, target, len) {
  for (let i = k; i < arr.length; i++) {
    temp.push(arr[i]);
    if (temp.length === len) {
      var sum = 0;
      for (let j = 0; j < temp.length; j++) {
        sum += temp[j];
      }
      if (sum === target) {
        flag = true;
        console.log(temp.join(" "));
      }
    }
    subsequence(arr, temp, i + 1, target, len);
    temp.pop();
  }
}

function runProgram(input) {
  input = input.split("\n");
  var [target, len] = input[0].split(" ").map(Number);
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var temp = [];
  subsequence(arr, temp, 0, target, len);
  if (flag) res.join("\n");
  else console.log(-1);
}
if (process.env.USER === "madandev") {
  runProgram(`8 2`);
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
