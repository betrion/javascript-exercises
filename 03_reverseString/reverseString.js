const reverseString = function (inString) {
  let strArray = inString.split("");
  let revArr = strArray.reverse();
  return revArr.join("").toString();
};

// Do not edit below this line
module.exports = reverseString;
