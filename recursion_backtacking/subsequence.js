function subsequence(arr, temp, k) {
  if (temp.length === 0) {
    console.log(" ");
  }
  for (let i = k; i < arr.length; i++) {
    temp.push(arr[i]);
    console.log(temp.join(" "));
    subsequence(arr, temp, i + 1);
    temp.pop();
  }
}

var arr = [1, 2, 3];
var temp = [];

subsequence(arr, temp, 0);
