'use strict';
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

// thanks isael-hiram
const findOne = ( array, query ) => 
  array.find(obj => {
    for (let q in query){ 
      if (obj[q] !== query[q]) return false; 
    } 
    return true;
  }) 
  || null;




//const findOne = (arr, query) => arr.find(ai => ai.id===query.id || ai.name===query.name || ai.squad===query.squad); 
console.log(findOne(HEROES, { id: 1 }));
//{ id: 1, name: 'Captain America', squad: 'Avengers' }

console.log(findOne(HEROES, { id: 10 }));
//null

console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
//null

console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
//{ id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log(findOne(HEROES, { squad: 'Justice League' }));
//{ id: 4, name: 'Superman', squad: 'Justice League' }