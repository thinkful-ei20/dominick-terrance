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
    const {id, name, squad} = query;
    const findById = this.store.heroes.find(obj => obj.id===id);
    const findByName = this.store.heroes.find(obj => obj.name===name);
    const findBySquad = this.store.heroes.find(obj => obj.squad===squad);
    if (findById === undefined && findByName === undefined && findBySquad === undefined) {
      return null;
    }
    if(findById === undefined) {
      if (findByName === undefined) {
        return findBySquad;
      } else {
        return findByName;
      }
    } else {
      if(findByName === undefined){
        if(findBySquad === undefined) {
          return findById;
        } else {
          if (findBySquad.squad === findById.squad) {
            return findById;
          } else {
            return null;
          }
        }
      } else {
        if(findBySquad === undefined){
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
  }
};

console.log(Database.findOne({ id: 2 }));
