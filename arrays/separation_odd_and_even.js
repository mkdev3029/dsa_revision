// EVEN AND ODD

var arr = [7, 24, 1, 8, 6, 13, 21, 14];

var left = 0;
var right = arr.length - 1;

while (left < right) {
  while (arr[left] % 2 == 0 && left < right) {
    left++;
  }
  while (arr[right] % 2 == 1 && left < right) {
    right--;
  }
  if (left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

console.log(arr);
