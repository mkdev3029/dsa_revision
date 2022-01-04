var str = "abcc";
var windowSize = 2;

var start = 0;
var end = windowSize - 1;
var dist_count = 0;

while (end < str.length) {
  if (str[start].charCodeAt() !== str[end].charCodeAt()) {
    dist_count++;
  }
  start++;
  end++;
}

console.log(dist_count);

// for (let i = 0; i < str.length; i++) {
//   var subStr = "";
//   for (let j = i; j < str.length; j++) {
//     subStr += str[j];
//     console.log(subStr);
//   }
// }v
