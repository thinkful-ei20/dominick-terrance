'use strict';
const loaf = {
  flour: 300,
  water: 210
};
console.log(loaf.flour); // logs 300
console.log(loaf.water); // logs 210

loaf.hydration = function () {return this.water/this.flour * 100;};
console.log(loaf.hydration());