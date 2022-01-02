var B = [1, 5, 10, 20, 40, 80];
var C = [6, 7, 20, 80, 100];
var A = [3, 4, 15, 20, 30, 70, 80, 120];

var maxArr = 0;
if (A.length > B.length && A.length > C.length) {
  maxArr = A;
} else if (B.length > C.length) {
  maxArr = B;
} else {
  maxArr = C;
}

console.log(maxArr);

var common = [];

for (let i = 0; i < maxArr.length; i++) {
  var commonA = false;
  var commonB = false;
  var commonC = false;
  let j = 0;
  while (maxArr[i] >= A[j] && maxArr.length !== A.length) {
    if (maxArr[i] === A[j]) {
      commonA = true;
      break;
    }
    j++;
  }
  j = 0;
  while (maxArr[i] >= B[j] && maxArr.length !== B.length) {
    if (maxArr[i] === B[j]) {
      commonB = true;
      break;
    }
    j++;
  }
  while (maxArr[i] >= B[j] && maxArr.length !== C.length) {
    if (maxArr[i] === C[j]) {
      commonC = true;
      break;
    }
    j++;
  }
  if ((commonA && commonB) || (commonC && commonA) || (commonC && commonB)) {
    common.push(maxArr[i]);
  }
}

console.log(common);
