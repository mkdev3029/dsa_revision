// #Flatten a Dictionary

// Given a dictionary, write a function to flatten it. Consider the following input/output scenario for better understanding:

// Input:

// {
//   'Key1': '1',
//   'Key2': {
//     'a' : '2',
//     'b' : '3',
//     'c' : {
//       'd' : '3',
//       'e' : '1'
//       }
//     }
// }

var input = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: "1",
    },
  },
};

function flatten(dict, parent) {
  var keys = [];
  var values = [];

  for (const key in dict) {
    if (typeof dict[key] === "object") {
      var result = flatten(dict[key], parent ? parent + "." + key : key);
      // var result = flatten(dict[key], parent + "." + key);
      // console.log(result);
      keys = keys.concat(result.keys);
      // console.log(keys);
      values = values.concat(result.values);
      // console.log(values);
    } else {
      keys.push(parent ? parent + "." + key : key);
      // keys.push(parent + "." + key);
      values.push(dict[key]);
    }
  }

  return {
    keys: keys,
    values: values,
  };
}

const result = flatten(input, "");

var obj = {};

for (let i = 0; i < result.keys.length; i++) {
  obj[result.keys[i]] = result.values[i];
}

console.log(obj);
