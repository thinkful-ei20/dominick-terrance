'use strict';
function createMyObject(foo, answerToUniverse) {
  // your code here
  return {
    foo,
    answerToUniverse,
    'olly olly': 'oxen free',
    sayHello: () => 'Hello'
  };
}

const example = new createMyObject('bar', 42);
console.log(example);
console.log(example.sayHello());
