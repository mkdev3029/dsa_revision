function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var [a, b] = input[line++].split(" ").map(Number);
    var num1 = a;
    var num2 = b;

    // var end = Math.min(a, b);

    // var max = 0;

    console.log(gcd(num1, num2));

    // console.log(max);

    // LOOONG SOLUTION

    // function gcd(n) {
    //   if (n === end + 1) return;
    //   if (a % n === 0 && b % n === 0 && n > max) {
    //     max = n;
    //   }
    //   return gcd(n + 1);
    // }

    // MOD SOLUTION
    function gcd(a, b) {
      if (!b) {
        return a;
      }

      return gcd(b, a % b);
    }

    // while (num1 != num2) {
    //   if (num1 > num2) {
    //     num1 -= num2;
    //   } else {
    //     num2 -= num1;
    //   }
    // }

    function gcd(num1, num2) {
      if (num1 === num2) return num1;
      if (num1 > num2) {
        return gcd(num1 - num2, num2);
      } else if (num2 > num1) {
        return gcd(num1, num2 - num1);
      }
    }
  }
}
if (process.env.USER === "madandev") {
  runProgram(`2\n6 9\n2 25\n6 6`);
  // runProgram(`1\n6 6`);
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
