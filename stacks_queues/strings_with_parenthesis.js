function runProgram(input) {
  var str = input;
  var stack = [];
  var flag = true;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
      continue;
    }
    if (
      (str[i] === ")" && stack[stack.length - 1] === "(") ||
      (str[i] === "]" && stack[stack.length - 1] === "[") ||
      (str[i] === "}" && stack[stack.length - 1] === "{")
    ) {
      stack.pop();
      continue;
    }
    if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
      flag = false;
    }
  }

  if (stack.length === 0 && flag) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}
if (process.env.USER === "madandev") {
  runProgram(`(((((((((())))))))))`);
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
