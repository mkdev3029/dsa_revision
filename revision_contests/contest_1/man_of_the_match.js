// ab de villers 1 1 6 6 4 1 | 19
// virat 2 0 0 1 6 1 | 10

// ab de villers 0 0 0 0 0 1 0 0 0 0 1 4 4 | 10
// virat 1 6 6 6 1 | 20

// ab de villers 0 1 0 0
// virat 0 1

// strike = true (ab) | false (virat)

// if(arr[i] % 2 !== 0) strike (Odd)

// if(count === 6) strike (over change)

// console.log(ab.join(" "));
// console.log(virat.join(" "));

function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var over = +input[line++];
    var arr = input[line++].split(" ").map(Number);
    var villerSum = 0;
    var viratSum = 0;
    var ballCount = 1;
    // var ab = [];
    // var virat = [];
    var strike = true;
    for (let i = 0; i < arr.length; i++) {
      if (strike) {
        villerSum += arr[i];
        // ab.push(arr[i]);
      } else {
        viratSum += arr[i];
        // virat.push(arr[i]);
      }
      if (arr[i] % 2 !== 0) {
        strike = !strike;
      }
      if (ballCount === 6) {
        ballCount = 0;
        strike = !strike;
      }
      ballCount++;
    }

    if (villerSum < viratSum) {
      console.log("Virat Kohli");
    } else if (villerSum > viratSum) {
      console.log("AB de Villiers");
    } else {
      console.log("Tie");
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(
    `3\n2\n1 2 0 0 1 1 6 6 4 1 6 1\n3\n0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4\n1\n0 1 0 1 0 0`
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
