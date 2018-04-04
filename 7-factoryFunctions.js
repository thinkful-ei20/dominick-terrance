'use strict';
function createCharacter (name, nickname, race, origin, attack, defense){
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      return `${this.name} is a ${this.race} from ${this.origin}.`;
    },
    evaluateFight: function(character){
      const attacking = this.attack-character.defense;
      const defending = character.attack-this.defense;
      let x = attacking<0 ? 0 : attacking;
      let y = defending<0 ? 0 : defending;
      return `Your opponent takes ${x} damage and you receive ${y} damage.`;
    }
  };
}

const characters = [
  new createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  new createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  new createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  new createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  new createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];
characters.push(new createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 9));

console.log(characters.find(character => character.nickname === 'aragorn').describe());
console.log(characters.filter(character => character.race === 'Hobbit'));
console.log(characters.filter(character => character.attack > 5));