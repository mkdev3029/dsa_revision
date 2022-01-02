// The swap variable is being used to determine if the array is already sorted or not
// The loop will run only once to check if all the elements in the array are sorted
// If it is sorted the swap variable will not be changed to true
// If it is false, the entire loop will break and if it is true it vice-versa.

// '>' ascending
// '<' descending

function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var arr = input[1].split(" ").map(Number);

  var passes = arr.length - 1;

  for (let i = 0; i < passes; i++) {
    var swap = false;
    for (let j = 0; j < passes - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (swap === false) {
      break;
    }
  }
  console.log(arr.join(" "));
}
if (process.env.USER === "madandev") {
  runProgram(`5\n3 5 0 9 8`);
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
