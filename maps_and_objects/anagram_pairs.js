function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var n = +input[line++];
    var arr = [];

    for (let i = 0; i < n; i++) {
      arr.push(input[line++]);
    }

    var obj = {};
    var count = 0;

    for (let i = 0; i < arr.length; i++) {
      var str = arr[i].split("").sort().join("");
      if (!obj[str]) {
        obj[str] = 1;
      } else {
        obj[str] = obj[str] + 1;
      }
    }

    for (const key in obj) {
      count += obj[key] * ((obj[key] - 1) / 2);
    }

    console.log(count);
  }
}

if (process.env.USER === "madandev") {
  runProgram(
    `2\n5\naaaaabbbbb\nbaabbbbaaa\naaaabbbbba\nxxxxxxxxxy\nyxxxxxxxxx\n2\nabcdefghij\njighdefabc`
  );
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
