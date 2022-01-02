let array = ["a", "b", "c", "d", "e"];
const func = function ([f, ...r]) {
  return r.reduce(function (a, c) {
    {
      return a + c;
    }
  }, f);
};
console.log(func(array));
