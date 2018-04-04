'use strict';

// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

const arr = [
	{
		name: 'Steve Jobs',
		jobTitle: 'Boss',
	},
	{
		name: 'Drake',
		jobTitle: 'Clerk',
		boss: 'Steve Jobs',
	},
	{
		name: 'Cassandra C.',
		jobTitle: 'Custodian',
		boss: 'Steve Jobs',
	},
];

for (let item in arr) {

	if (arr[item].boss === undefined) {
		console.log(`Boss ${arr[item].name} doesn't report to anybody.`);
	} else {
		console.log(`${arr[item].name}, ${arr[item].jobTitle}, reports to ${arr[item].boss}.`);
	}
}

// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

