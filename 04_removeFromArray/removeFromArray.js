const removeFromArray = function (array, ...remArgs) {
  remArgs.forEach((arg) => {
    const index = array.indexOf(arg);
    if (index > -1) {
      array.splice(index, 1);
    }
  });
  return array;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 4));
// Do not edit below this line
module.exports = removeFromArray;
