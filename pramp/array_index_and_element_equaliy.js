// var arr = [-8, 0, 2, 5];
var arr = [-1, 0, 3, 6];

console.log(equal(arr));

function equal(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return i;
    }
  }
  return -1;
}
