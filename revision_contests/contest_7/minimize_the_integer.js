function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var inputArr = input[line++];
    if (inputArr[0] !== "-") {
      var arr = inputArr.split("").map(Number);
      var freqArr = Array(10).fill(0);
      for (let i = 0; i < arr.length; i++) {
        freqArr[arr[i]]++;
      }
      // console.log(freqArr);
      var min;
      for (let i = 1; i < freqArr.length; i++) {
        if (freqArr[i]) {
          min = i;
          break;
        }
      }
      var res = "";
      var l = 0;
      while (l < freqArr[min]) {
        res += min;
        l++;
      }
      for (let i = 0; i < freqArr.length; i++) {
        var j = 0;
        while (j < freqArr[i] && freqArr[i] !== 0 && i !== min) {
          res += i;
          j++;
        }
      }
      console.log(res);
    } else {
      var arr = inputArr.split("").map(Number);
      var freqArr = Array(10).fill(0);
      for (let i = 1; i < arr.length; i++) {
        freqArr[arr[i]]++;
      }
      // console.log(freqArr);
      var max;
      for (let i = freqArr.length - 1; i >= 0; i--) {
        if (freqArr[i]) {
          max = i;
          break;
        }
      }
      var res = "";
      var l = 0;
      while (l < freqArr[max]) {
        res += max;
        l++;
      }
      for (let i = freqArr.length; i >= 0; i--) {
        var j = 0;
        while (j < freqArr[i] && freqArr[i] !== 0 && i !== max) {
          res += i;
          j++;
        }
      }
      console.log(`-${res}`);
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2
53334121
-1002911`);
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
