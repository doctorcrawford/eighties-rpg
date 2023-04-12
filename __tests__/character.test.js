import Character from './../src/js/character.js';
import { DanceMove } from './../src/js/dance-move.js';

describe('Character', () => {
  let claire;

  beforeEach(() => {
    claire = new Character("Claire", 6, 9, 17, 20, 3, 70, ["sprinkler", "cabbagePatch", "runningMan"]);
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
    let sprinkler = new DanceMove("Sprinkler",60, 8);
    claire.makeAMove(sprinkler);
    expect(sprinkler.battleEffectiveness).toEqual(73.8);
    expect(sprinkler.battleDamage).toEqual(8.72);
  });

});