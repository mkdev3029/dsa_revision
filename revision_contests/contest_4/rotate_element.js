function runProgram(input) {
  input = input.split("\n");
  var n = +input[0];
  var mat = [];
  for (let i = 1; i <= n; i++) {
    mat.push(input[i].trim().split(" ").map(Number));
  }
  var top = 0;
  var bottom = n - 1;
  var left = 0;
  var right = n - 1;
  var start = 0;
  while (start < Math.floor(n / 2)) {
    var prev = mat[top + 1][left];
    // left to right
    for (let i = left; i <= right; i++) {
      var temp = mat[top][i];
      mat[top][i] = prev;
      prev = temp;
    }
    top++;
    // top to bottom
    for (let i = top; i <= bottom; i++) {
      var temp = mat[i][right];
      mat[i][right] = prev;
      prev = temp;
    }
    right--;
    // right to left
    for (let i = right; i >= left; i--) {
      var temp = mat[bottom][i];
      mat[bottom][i] = prev;
      prev = temp;
    }
    bottom--;
    // bottom to top
    for (let i = right; i >= left; i--) {
      var temp = mat[i][left];
      mat[i][left] = prev;
      prev = temp;
    }
    left++;
    start++;
  }
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i].join(" "));
  }
}
if (process.env.USER === "madandev") {
  // runProgram(`4\n1 2 3 4\n1 2 3 4\n1 2 3 4\n1 2 3 4`);
  runProgram(`3
2 1
1 2
2 2
1 2
3 1
1 2 3`);
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
