'use strict';

// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

const arr = [
	{
		name: 'Steve Jobs',
		jobTitle: 'CEO',
	},
	{
		name: 'Drake',
		jobTitle: 'Musician',
	},
	{
		name: 'Cassandra C.',
		jobTitle: 'Author',
	},
];

for (let item in arr) {
	console.log(`${arr[item].name}, ${arr[item].jobTitle}`);
}