// var arr = [1, 2, 0, 4, 3, 0, 5, 0];
var arr = [1, 2, 0, 0, 0, 3, 6];
var start = 0;
var end = arr.length - 1;
while (start < end) {
  if (arr[end] === 0) {
    start++;
    end--;
  } else if (arr[start] == 0) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  } else if (arr[end] !== 0 && arr[start] !== 0) {
    start++;
  }
}

console.log(arr);
