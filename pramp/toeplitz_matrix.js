function checkDiagonal(arr, i, j) {
  let res = arr[i][j];
  while (i < arr.length && j < arr[0].length) {
    if (arr[i][j] != res) {
      return false;
    }
    i++;
    j++;
  }
  return true;
}

function isToeplitz(arr) {
  for (let i = 0; i < arr[0].length; i++) {
    if (!checkDiagonal(arr, 0, i)) return false;
  }
  for (let i = 1; i < arr.length; i++) {
    if (!checkDiagonal(arr, i, 0)) return false;
  }
  return true;
}

let arr = [
  [1, 2, 3, 4],
  [5, 1, 9, 3],
  [6, 5, 1, 2],
];

if (isToeplitz(arr)) console.log("matrix is a Toeplitz ");
else console.log("matrix is not a Toeplitz ");
