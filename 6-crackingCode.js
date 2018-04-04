'use strict';
const cipher = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
  decodeString : (str) => str.split(' ')
    .map(word => cipher.hasOwnProperty(word[0]) ? 
      word[cipher[word[0]]] : ' ')
    .join('')
};

const exampleStr = 'craft block argon meter bells brown croon droop';
console.log(cipher.decodeString(exampleStr));