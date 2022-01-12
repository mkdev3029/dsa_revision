var arr = [3, 5, 3, 4];
var wt = 5;

// var arr = [1, 2, 2, 3];
// var wt = 3;

var obj = {
  mutliple: [],
  single: [],
};

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= wt) {
    if (obj.mutliple.length === 0) {
      obj.mutliple.push(arr[i]);
    } else {
      for (let j = 0; j < obj.mutliple.length; j++) {
        if (obj.mutliple[j] + arr[i] <= wt) {
          obj.mutliple[j] = obj.mutliple[j] + arr[i];
        } else {
          obj.single.push(arr[i]);
        }
      }
    }
  } else {
    obj.single.push(arr[i]);
  }
}

console.log(obj);
console.log(obj.mutliple.length + obj.single.length);
