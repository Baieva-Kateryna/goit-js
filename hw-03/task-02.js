'use strict';

// const countProps = function(obj) {
//   let total = 0;
//   for (const key in obj) {
//     total += 1;
//   }
//   return total;
// };

const countProps = function(obj) {
  const key = Object.keys(obj).length;
  return key;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
