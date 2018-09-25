(function () {
'use strict';

const add = (a,b) => {
  return a + b;
};

const substract$1 = (a,b) => {
  return a - b;
};

const multiply = (a,b) => {
  return a * b;
};
const divide = (a,b) => {
  return a / b;
};

const a = add(1,2);           // 3
const b = substract$1(5,3);  // 2
const c = multiply(2,3);      // 6
const d = divide(4,2);        // 2

console.log(a);
console.log(b);
console.log(c);
console.log(d);

}());
