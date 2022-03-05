var arr = [1, 1, 0, 1, 0, 0, 0, 1];

var start = 0;
var end = arr.length - 1;

while (start < end) {
  while (arr[start] === 0 && start < end) {
    start++;
  }
  while (arr[end] === 1 && start < end) {
    end--;
  }
  if (start < end) {
    var temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    start++;
    end--;
  }
}

console.log(arr);
