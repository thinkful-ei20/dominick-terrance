'use strict';
function personMaker(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const john = new personMaker('John', 'Doe');
console.log(john);
console.log(john.fullName());