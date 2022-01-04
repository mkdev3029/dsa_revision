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
