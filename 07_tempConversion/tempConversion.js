const ftoc = function (temp) {
  return Math.round((temp - 32) * (5 / 9) * 10) / 10;
};
const ctof = function (temp) {
  return Math.round((temp * (9 / 5) + 32) * 10) / 10;
};
console.log(ftoc(32));
console.log(ctof(0));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
