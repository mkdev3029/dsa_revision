function runProgram(input) {
  input = input.trim().split("\n");
  let len = +input[0];
  let arr = input[1].trim().split(" ");
  let queries = +input[2];
  let vowels = { a: true, e: true, i: true, o: true, u: true };
  let res = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (
      vowels[arr[i][0]] == true &&
      vowels[arr[i][arr[i].length - 1]] == true
    ) {
      res[i + 1] = res[i] + 1;
    } else {
      res[i + 1] = res[i] + 0;
    }
  }
  var line = 3;
  for (let i = 0; i < queries; i++) {
    let [start, end] = input[line++].trim().split(" ").map(Number);
    console.log(res[end] - res[start - 1]);
  }
}
if (process.env.USER === "madandev") {
  runProgram(`5
aba suna oua tes aba
5
1 5
2 4
1 3
3 5
5 5`);
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
