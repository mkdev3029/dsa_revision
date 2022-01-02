// https://practice.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1

var arr = ["geeksforgeeks", "geeks", "geek", "geezer"];

var prefix = { value: arr[0], flag: false }; // update this variable everytime

for (let i = 1; i < arr.length; i++) {
  prefix = findPrefix(prefix, arr[i]);
}

function findPrefix({ value, flag }, str2) {
  var i = 0;
  var j = 0;
  var resStr = "";
  while (i < value.length && j < str2.length) {
    if (value[i] !== str2[j]) {
      break;
    }
    resStr += value[i];
    i++;
    j++;
  }
  return { value: resStr, flag };
  // return resStr;
}

console.log(prefix);

// "geeksforgeeks" | "geeks"
// "geeks" | "geek"
// "gee" | "geezer"
// "gee"
