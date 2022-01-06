function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;
  while (true) {
    let n = +input[line++];
    if (n === 0) {
      break;
    }
    let arr = input[line++].trim().split(" ").map(Number);
    let stack = [];
    let ans = [];
    while (arr.length > 0) {
      if (arr.length == 1) {
        while (stack.length > 0 && arr[0] > stack[stack.length - 1]) {
          ans.push(stack.pop());
          //    console.log("hi");
        }
        if (arr.length == 1) {
          ans.push(arr.shift());
        }
      } else {
        while (stack.length > 0 && arr[0] > stack[stack.length - 1]) {
          ans.push(stack.pop());
          //    console.log("hi");
        }
        if (arr[0] < arr[1]) {
          ans.push(arr.shift());
        } else if (arr[0] > arr[1]) {
          stack.push(arr.shift());
        }
      }

      // console.log("stack:", stack);
      // console.log("arr",arr);
    }

    while (stack.length) {
      ans.push(stack.pop());
    }
    //   console.log(ans.join(" "));
    let flag = true;
    for (let i = 0; i < ans.length - 1; i++) {
      if (ans[i] > ans[i + 1]) {
        flag = false;
      }
    }
    if (flag) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`5
5 1 2 4 3 
0`);
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
