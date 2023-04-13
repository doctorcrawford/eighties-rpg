import Character from './../src/js/character.js';
import { DanceMove } from './../src/js/dance-move.js';

describe('Character', () => {
  let claire;
  let sprinkler;

  beforeEach(() => {
    claire = new Character("Claire", 6, 9, 17, 20, 3, 70, ["sprinkler", "cabbagePatch", "runningMan"]);
    sprinkler = new DanceMove("Sprinkler",60, 8);
  });

  test('should correctly create a character object with many properties', () => {
    expect(claire.name).toEqual("Claire");
    expect(claire.strength).toEqual(6);
    expect(claire.intelligence).toEqual(9);
    expect(claire.snark).toEqual(17);
    expect(claire.charm).toEqual(20);
    expect(claire.weirdness).toEqual(3);
    expect(claire.repPoints).toEqual(70);
  });
  
  test('should adjust the moves battle effectiveness and damage', () => {  
    claire.makeAMove(sprinkler);
    expect(sprinkler.battleEffectiveness).toEqual(73.8);
    expect(sprinkler.battleDamage).toEqual(8.72);
  });

  test('should decrease receiving character repPoints by inflicting character battleDamage', () => {
    let andrew = new Character("Andrew",20,3,14,17,1,75,["sprinkler","cabbagePatch","runningMan"]);
    let battleDmg = claire.makeAMove(sprinkler);
    andrew.takeAHit(battleDmg);
    expect(andrew.repPoints).toEqual(66.28);
  });
});