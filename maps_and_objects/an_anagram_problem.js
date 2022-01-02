function runProgram(input) {
  var input = input.split("\n");
  var len = +input[0];
  var arr = [];
  for (let i = 1; i < input.length; i++) {
    arr.push(input[i]);
  }
  var obj = {};
  var ans = [];
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i].split("").sort().join("");
    if (!obj[temp]) {
      ans.push(arr[i]);
      obj[temp] = temp;
    }
  }
  ans.sort();
  console.log(ans.length);
  console.log(ans.join("\n"));
}
if (process.env.USER === "madandev") {
  runProgram(`5\neodc\nodec\ncode\nbaca\naabc`);
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
