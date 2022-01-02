function runProgram(input) {
  input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  var obj = {};
  for (let i = 0; i < n; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
  }
  console.log(obj);
  var newArr = Object.keys(obj).map(Number);
  console.log(newArr);
  newArr.sort((a, b) => {
    return a - b;
  });
  var min = [];
  for (let i = 0; i < 3; i++) {
    if (typeof newArr[i] !== "undefined") {
      min.push(newArr[i]);
    }
  }
  var max = [];
  for (let i = newArr.length - 1; i >= newArr.length - 3; i--) {
    if (typeof newArr[i] !== "undefined") {
      max.push(newArr[i]);
    }
  }
  if (min.length < 3 && max.length >= 3) {
    console.log("Not Possible");
    console.log(max.reverse().join(" "));
  } else if (max.length < 3 && min.length >= 3) {
    console.log(min.join(" "));
    console.log("Not Possible");
  } else if (max.length < 3 && min.length < 3) {
    console.log("Not Possible");
    console.log("Not Possible");
  } else {
    console.log(min.join(" "));
    console.log(max.reverse().join(" "));
  }
}
if (process.env.USER === "madandev") {
  // runProgram(`8\n1 2 3 4 2 1 6 5`);
  // runProgram(`5\n0 1 0 1 1`);
  runProgram(`7\n51 0 0 11 -11 23 -2`);
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
