'use strict';

const findLongestWord = function(string) {
  let words = string.split(' ');
  let word = words[0];

  for (let i = 0; i < words.length; i += 1) {
    if (word.length < words[i].length) {
      word = words[i];
    }
  }

  return word;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
