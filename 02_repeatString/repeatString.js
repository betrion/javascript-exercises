const repeatString = function (string, num) {
  if (num >= 0) {
    return string.repeat(num);
  } else {
    return "ERROR";
  }
};
console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
