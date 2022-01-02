// #Word Count Engine
// Implement a document scanning engine that receives a text document doc and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in descending order.
// Example:
//     for doc: "practice makes perfect. get perfect by practice. just practice!"

//     the engine returns the list: { practice: 3, perfect: 2,  makes: 1, get: 1, by: 1, just: 1 }.

// The engine should ignore punctuation and white-spaces.

var str = "practice makes perfect. get perfect by practice. just practice!";

// str = str
//   .toLowerCase()
//   .replace(/[^a-z\s]/g, "")
//   .replace(/\s\s+/g, " ")
//   .split(" ");

// // console.log(str);

// var obj = {};

// for (let i = 0; i < str.length; i++) {
//   if (!obj[str[i]]) {
//     obj[str[i]] = 1;
//   } else {
//     obj[str[i]] = obj[str[i]] + 1;
//   }
// }

// console.log(obj);
