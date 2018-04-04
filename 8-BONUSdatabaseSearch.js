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

const findOne = ( array, query ) => {
  const {id, name, squad} = query;
  const findById = array.find(obj => obj.id===id);
  const findByName = array.find(obj => obj.name===name);
  const findBySquad = array.find(obj => obj.squad===squad);

  if (findById === undefined && findByName === undefined && findBySquad === undefined) {
    return null;
  }
  if (findById === undefined) {
    if (findByName === undefined) {
      return findBySquad;
    } else {
      return findByName;
    }
  } else {
    if (findByName === undefined) {
      if (findBySquad === undefined) {
        return findById;
      } else {
        if (findBySquad.squad === findById.squad) {
          return findById;
        } else {
          return null;
        }
      }
    } else {
      if (findBySquad === undefined){
        if(findByName.name === findById.name) {
          return findByName;
        } else {
          return null;
        }
      } else {
        if (findById === findByName === findBySquad) {
          return findByName;
        } else {
          return null;
        }
      }
    }
  } 
};



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