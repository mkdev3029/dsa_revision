// JavaScript program for the above approach

// Function to check if the Strings
// can be made equal or not by
// reversing a subString of X
function checkString(X, Y) {
  // Store the first index from
  // the left which contains unequal
  // characters in both the Strings
  var L = -1;

  // Store the first element from
  // the right which contains unequal
  // characters in both the Strings
  var R = -1;

  // Checks for the first index from
  // left in which characters in both
  // the Strings are unequal
  for (var i = 0; i < X.length; ++i) {
    if (X[i] !== Y[i]) {
      // Store the current index
      L = i;

      // Break out of the loop
      break;
    }
  }

  // Checks for the first index from
  // right in which characters in both
  // the Strings are unequal
  for (var i = X.length - 1; i > 0; --i) {
    if (X[i] !== Y[i]) {
      // Store the current index
      R = i;

      // Break out of the loop
      break;
    }
  }

  // Reverse the subString X[L, R]
  X = X.substring(0, L) + reverse(X.substring(L, R + 1)) + X.substring(R + 1);

  // If X and Y are equal
  if (X === Y) {
    console.log("Yes");
  }

  // Otherwise
  else {
    console.log("No");
  }
}

function reverse(input) {
  var a = input.split("");
  var l,
    r = a.length - 1;

  for (l = 0; l < r; l++, r--) {
    var temp = a[l];
    a[l] = a[r];
    a[r] = temp;
  }
  return a.join("");
}

// Driver Code
var X = "abbbca",
  Y = "abcbba";

// Function Call
checkString(X, Y);
