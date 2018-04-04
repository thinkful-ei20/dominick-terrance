// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.
'use strict';

const obj = {
	foo: 'foo',
	bar: 50,
	fum: 'fum',
	quux: true,
	span: 'spam',
};

for (let key in obj) {
	console.log(`${key}: ${obj[key]}`);
}