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
/*
function findOne( array, query ) {
  const {id, name, squad} = query;
  return array.find(function (obj){
    if(id){
      if (id===obj.id) {
        return obj;
      } else {
        return null;
      }
    } else {
      return null;
    }
  });
}
*/

const findOne = (arr, query) => arr.find(ai => ai.id===query.id || ai.name===query.name || ai.squad===query.squad); 
console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));