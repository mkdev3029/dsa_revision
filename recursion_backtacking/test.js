var arr = [1, 2, 3];
var temp = [];

function permutation([1,2,3], []) {
  if (0 === 3) {
    console.log(temp.join(" "));
  }
  for (let i = 3; i < 3; i++) {
    if (temp.includes(arr[i])) { // [].includes(1)
      continue;
    }
    temp.push(arr[i]); 
    permutation([1,2,3], [1]);
    temp.pop();
  }
}

function permutation(arr, temp) {
  if (temp.length === arr.length) {
    console.log(temp.join(" "));
  }
  for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i])) {
      continue;
    }
    temp.push(arr[i]);
    permutation(arr, temp);
    temp.pop();
  }
}
