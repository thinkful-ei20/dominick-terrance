'use strict';
const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function (query) {
    return this.store.heroes.find( obj => {
      for (let q in query){
        if (obj[q]!==query[q]) {
          return false;
        }
      }
      return true;
    }) || null;
  }
};

console.log(Database.findOne({ id: 2, name: 'Aquaman' }));
