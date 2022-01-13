function runProgram(input) {
  var str = input;
  var stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0) {
      stack.push(str[i]);
      continue;
    }
    if (stack[stack.length - 1] === str[i]) {
      stack.pop();
      continue;
    } else {
      stack.push(str[i]);
      continue;
    }
  }
  if (stack.length) {
    console.log(stack.join(""));
  } else {
    console.log("Empty String");
  }
}
if (process.env.USER === "madandev") {
  runProgram(`aaabccddd`);
  runProgram(`aaaa`);
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
