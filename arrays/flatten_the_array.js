var array = [1, 2, 3, [3, 4], [4, 5]];

var ans = [];

flatten(array);

function flatten(arr) {
  console.log("arra", arr);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      flatten(arr[i]);
    } else {
      ans.push(arr[i]);
    }
  }
}

console.log(ans);
