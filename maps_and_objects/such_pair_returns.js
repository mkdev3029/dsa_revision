function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var [n, k] = input[line++].split(" ").map(Number);
    var arr = input[line++].split(" ").map(Number);
    var obj = {};
    var flag = false;
    for (let i = 0; i < arr.length; i++) {
      // console.log(`${k} - ${arr[i]} = ${k - arr[i]}`);
      if (obj[k - arr[i]]) {
        console.log("inside", k - arr[i]);
        flag = true;
        break;
      } else {
        obj[arr[i]] = 1;
      }
    }
    console.log(obj)
    if (flag) {
      console.log(1);
    } else {
      console.log(-1);
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`1\n5 2\n3 4 0 2 7`);
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
