function subsequence(arr, temp, k, target) {
  for (let i = k; i < arr.length; i++) {
    temp.push(arr[i]);
    if (temp.length == target) {
      console.log(temp.join(" "));
    }
    subsequence(arr, temp, i + 1, target);
    temp.pop();
  }
}

function runProgram(input) {
  var [n, k] = input.trim().split(" ").map(Number);
  var arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  var temp = [];
  subsequence(arr, temp, 0, k);
}
if (process.env.USER === "madandev") {
  runProgram(`4 2`);
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
