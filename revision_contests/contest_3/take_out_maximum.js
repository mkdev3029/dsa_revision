function runProgram(input) {
  input = input.trim().split("\n");
  var [len, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var max = 0;
  var i = 0;
  var j = k;
  var sum = 0;
  
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  while (j <= arr.length) {
    if (sum > max) {
      max = sum;
    }
    sum = sum - arr[i];
    if (j < arr.length) {
      sum = sum + arr[j];
    }
    i++;
    j++;
  }
  console.log(max);
}
if (process.env.USER === "madandev") {
  runProgram(`10 3\n-1 -1 -2 1 -2 4 1 9 3 9`);
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
