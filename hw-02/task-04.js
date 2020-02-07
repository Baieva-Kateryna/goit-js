'use strict';

const formatString = function(string) {
  if (string.split('').length > 40) {
    let originalString = string.split('');
    originalString.splice(40, 100, `...`);
    let shortenedString = originalString.join('');
    return shortenedString;
  }
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
