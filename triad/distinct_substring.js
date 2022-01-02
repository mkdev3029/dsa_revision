// var str = "abcde";
var str = "abc";
var temp = [];

substr(str, temp, 0);

// permutation(str, temp);

// function substr(str, temp, k) {
//   if (str.length > 0) {
//     for (let i = k; i < str.length; i++) {
//       temp.push(str[i]);
//       console.log(temp.join(" "));
//       substr(str, temp, i + 1);
//       temp.pop();
//     }
//   }
// }

function subsequence(str, temp, k) {
  for (let i = k; i < str.length; i++) {
    temp.push(str[i]);
    console.log(temp.join(" "));
    subsequence(str, temp, i + 1);
    temp.pop();
  }
}

function permutation(str, temp) {
  if (temp.length === str.length) {
    console.log(temp.join(" "));
    // return;
  }
  for (let i = 0; i < str.length; i++) {
    if (temp.includes(str[i])) continue;
    temp.push(str[i]);
    permutation(str, temp);
    temp.pop();
  }
}
