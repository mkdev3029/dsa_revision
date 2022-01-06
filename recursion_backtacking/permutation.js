function permutation(arr, temp) {
  if (temp.length === arr.length) {
    console.log(temp.join(" "));
  }
  for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i])) continue;
    temp.push(arr[i]);
    permutation(arr, temp);
    temp.pop();
  }
}

var arr = [1, 2, 3];
var temp = [];

permutation(arr, temp);
