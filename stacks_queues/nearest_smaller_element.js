// to it's right

// console.log("right", res1.reverse());

// to it's left

// console.log("left", res2);

//  1  2  3  7 7  7  7 -1 (4 - 7 3)
// -1 -1 -1 -1 3  4  4 -1 (4 - 3 1)
//  1  2  3  7

// check left and right
// if one of those are positive take that index
// if both are negative that take -1

// if (res2[i] === -1) {
//   ans.push(arr[res1[i]]);
// } else if (res1[i] === -1) {
//   ans.push(arr[res2[i]]);
// } else if (res1[i] !== -1 || res2[i] !== -1) {
// }

function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let h = 0; h < cases; h++) {
    var len = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);

    var stack1 = [];
    var res1 = [];
    var stack2 = [];
    var res2 = [];
    var ans = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack1.length && arr[i] <= stack1[stack1.length - 1][0]) {
        stack1.pop();
      }
      if (stack1.length) {
        res1.push(stack1[stack1.length - 1][1]);
      } else {
        res1.push(-1);
      }
      console.log(stack1);
      stack1.push([arr[i], i]);
    }

    res1.reverse();

    for (let i = 0; i < arr.length; i++) {
      while (stack2.length && arr[i] <= stack2[stack2.length - 1][0]) {
        stack2.pop();
      }
      if (stack2.length) {
        res2.push(stack2[stack2.length - 1][1]);
      } else {
        res2.push(-1);
      }
      console.log(stack2);
      stack2.push([arr[i], i]);
    }

    for (let i = 0; i < arr.length; i++) {
      if (res1[i] === -1 && res2[i] === -1) {
        ans.push(-1);
      } else if (res1[i] === -1 && res2[i] !== -1) {
        ans.push(arr[res2[i]]);
      } else if (res1[i] !== -1 && res2[i] === -1) {
        ans.push(arr[res1[i]]);
      } else if (res1[i] !== -1 || res2[i] !== -1) {
        if (Math.abs(i - res1[i]) < Math.abs(i - res2[i])) {
          ans.push(arr[res1[i]]);
        } else {
          ans.push(arr[res2[i]]);
        }
      }
    }
    console.log(ans.join(" "));
  }
}
if (process.env.USER === "madandev") {
  runProgram(`1\n8\n39 27 11 4 24 32 32 1`);
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
