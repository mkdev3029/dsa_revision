// var arr1 = [1, 4, -1, 5, -1];
// var arr2 = [1, 3, -1, 4, -1];

// arr1.pop();
// arr2.pop();

// var mergeArr = [...arr1, ...arr2];

// mergeArr.sort((a, b) => {
//   return a - b;
// });

// console.log(mergeArr.join(" "));

// var mergeArr = [];

// console.log(mergeList(arr1, arr2));

// var mergeArr = [...arr1, ...arr2];

// console.log(mergeArr);

// function mergeList(A, B) {
//   var mergeArr = [...A, ...B];
//   mergeArr.sort((a, b) => {
//     return a - b;
//   });
//   var i = 0;
//   while (mergeArr.length) {
//     if (mergeArr[i] === -1) mergeArr.shift();
//     else break;
//   }
//   return mergeArr;
// }

// var arr = [];
// for (let i = 0; i < A.length - 1; i++) {
//   arr.push(A[i]);
// }
// for (let i = 0; i < B.length - 1; i++) {
//   arr.push(A[i]);
// }
// arr = arr.sort((a, b) => {
//   return a, b;
// });
// return arr.join(" ");

// function runProgram(input) {
//   input = input.trim().split("\n");
//   var arr1 = input[0].split(" ").map(Number);
//   var arr2 = input[1].split(" ").map(Number);
//   arr1.pop();
//   arr2.pop();
//   var mergeArr = [...arr1, ...arr2];
//   mergeArr.sort((a, b) => {
//     return a - b;
//   });

//   console.log(mergeArr.join(" "));
// }

// if (process.env.USER === "madandev") {
//   runProgram(`1 4 5 -1\n1 3 4 -1`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

// let arr = [1, 34, 3, 21];

// console.log(i);
// for (let i = 0; i < arr.length - 1; i++) {
//   setTimeout(() => {
//     console.log(arr[i], i);
//   }, i * 1000);
// }

// var -> function scope, global scope
// let -> block scope

// console.log(i);

// if (true) {
//   var i = 0;
// }
// name();

// const addTwoNumbers = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(addTwoNumbers(2)(3)(3));

// const num2 = addTwoNumbers(2);

// console.log(num2(3));

// for (let i = 0; i < 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// if (!0) {
//   console.log(1);
// } else {
//   console.log("0");
// }

// Time complexity for accessing a data will O(1) Key:value (Hash Map)

// var person = {};

// ADD some key and a value

// person.name = "madan"; // dot notation
// person.name = "rahul"; // dot notation
// person["name"] = "madan"; // square bracket notation

// console.log(person["job"]);

// var arr = [1, 1, 1, 5, 5, 6, 7, 8, 9, 10, 6, -1, -9, 0];
// var arr = "abcedalkfdlkhjgfsdlkjghsd";

// loop through the array find the count and print the number

// var obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
// !false true // this is first time tha we are seeing this
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]] = obj[arr[i]] + 1;
//   }
// }

// console.log(obj);

// var arr = Object.keys(obj);
// var values = Object.values(obj);

// console.log(arr[0], values[0]);

// TRUTHY AND FALSY values

// if (undefined) {
//   console.log("if");
// } else {
//   console.log("else");
// }

// If it is not present add arr[i] as key and the value as 1
// If key is present increment the value of that key by 1

// var arr1 = [1, 2, 2, 3, 4, 5];
// var arr2 = [4, 4, 3, 2, 1, 1];

// console.log(obj1, obj2);

// var res = [];
// var count = 0;

// console.log(res.join(" "));

// var arr = [1, 2, 3, 4, 5];

// console.log(
//   arr.filter((el) => false),
//   Array.isArray(arr)
// );

// console.log(arr);

// var num = 123; // 321
// 123 321
// 100 + 20 + 3
// 300 + 20 + 1

// hundreds, tens, ones

// var num = 123; // 321 // 300 + 20 + 1
// var num = 1000; // 321 // 300 + 20 + 1
// 100 + 20 + 3
// hint2 modulo
// var res = "";

// Reverse this number with arithemtic operation

// while (num > 0) {
// res = res * 10 + (num % 10);
//   res += num % 10;
//   num = Math.floor(num / 10);
// }

// console.log(res);

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// var arr = [-1, 0, 1, 2, -1, -4];
// var res = [];

// var obj = {};

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     for (let k = j + 1; k < arr.length; k++) {
//       if (i !== j && i !== k && j !== k && arr[i] + arr[j] + arr[k] == 0) {
//         var ans = [arr[i], arr[j], arr[k]]
//           .sort((a, b) => {
//             return a - b;
//           })
//           .join("");
//         if (!obj[ans]) {
//           obj[ans] = 1;
//         } else {
//           obj[ans] = obj[ans] + 1;
//         }
//       }
//     }
//   }
// }

// var result = Object.keys(obj);
// console.log(result);

// console.log("start");
// function myPromise() {
//   return new Promise((res, rej) => {
//     console.log("thakur");
//     const value = true;
//     setTimeout(() => {
//       console.log("hello");
//       if (value) {
//         res();
//       } else {
//         rej();
//       }
//     }, 2000);
//   });
// }

// myPromise()
//   .then(() => {
//     console.log("Resolved");
//   })
//   .catch(() => {
//     console.log("Rejected");
//   });

// console.log("end");
// start thakur end hello resolved

// const promise = new Promise((res, rej) => {
//   if (true) {
//     res(1);
//   }
// });

// console.log(promise);

// promise.then(() => {
//   console.log("resolved");
// });

// console.log("hello");

// Promise hello resolved

// chooseToppings((toppings) => {
//   placeOrder(
//     toppings,
//     (order) => {
//       collectOrder(
//         order,
//         (pizza) => {
//           eatPizza(pizza);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);

var arr = [39, 27, 11, 4, 24, 32, 32, 1];
var stack = [];
var res = [];

// arr[i] > stack[stack.length - 1]
// stack.push(arr[i])
// res.push(arr[i])

// arr[i] <= stack[stack.length - 1]
// stack.pop()

for (let i = 0; i < arr.length; i++) {
  while (stack.length && arr[i] >= stack[stack.length - 1]) {
    stack.pop();
  }
  if (stack.length) {
    res.push(stack[stack.length - 1]);
  } else {
    res.push(-1);
  }
  stack.push(arr[i]);
}

console.log(res.join(" ")); // left

// for (let i = arr.length - 1; i >= 0; i--) {
//   while (stack.length && arr[i] >= stack[stack.length - 1]) {
//     stack.pop();
//   }
//   if (stack.length) {
//     res.push(stack[stack.length - 1]);
//   } else {
//     res.push(-1);
//   }
//   stack.push(arr[i]);
// }

// console.log(res.reverse().join(" ")) // right

// Next Greater Element (right)
// Next Greater Element (left)

// Next Smaller Element (right)
// Next Smaller Element (left)

// var obj = {};

// var arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 5, 5, 6, 7];
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]] = obj[arr[i]] + 1;
//   }
// }

// console.log(obj);

// var mat = [];

// for (let i = 0; i < 5; i++) {
//   mat.push([]);
//   for (let j = 0; j < 5; j++) {
//     mat[i][j] = i + j;
//   }
// }

// console.log(mat);
