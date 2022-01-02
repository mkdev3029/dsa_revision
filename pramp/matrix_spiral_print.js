// #Matrix Spiral Print

// Given a 2D matay (matrix) named M, print all items of M in a spiral order, clockwise.

// For example:

// M  =  1   2   3   4   5
//       6   7   8   9  10
//      11  12  13  14  15
//      16  17  18  19  20
// The clockwise spiral print is: 1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12

var mat = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

var top = 0;
var left = 0;
var bottom = mat.length - 1;
var right = mat[0].length - 1;

var count = 0;
var size = mat.length * mat[0].length;

// for left  to right
var res = [];

while (count < size) {
  for (let i = left; i <= right && count < size; i++) {
    // console.log("left to right", top, i);
    res.push(mat[top][i]);
    count++;
  }
  top++;

  // from top to bottom
  for (let i = top; i <= bottom && count < size; i++) {
    // console.log("top to bottom", i, right);
    res.push(mat[i][right]);
    count++;
  }

  right--;

  // from right to left
  for (let i = right; i >= left && count < size; i--) {
    res.push(mat[bottom][i]);
    count++;
  }

  bottom--;

  // from right to left
  for (let i = bottom; i >= top && count < size; i--) {
    res.push(mat[i][left]);
    count++;
  }

  left++;
}

console.log(res);
