const sumAll = function (a, b) {
  let sum = 0;
  if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") {
    return "ERROR";
  } else {
    let smaller = a < b ? a : b;
    let bigger = a > b ? a : b;
    for (let i = smaller; i <= bigger; i++) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumAll(1, -4));
// Do not edit below this line
module.exports = sumAll;
