import Character from './../src/js/character.js';

describe('Character', () => {

  test('should correctly create a character object with many properties', () => {
    const meanGirl = new Character("Claire", 6, 9, 20, 17, 3, 80, ["sprinkler", "cabbagePatch", "runningMan"]);
    expect(meanGirl.name).toEqual("Claire");
    expect(meanGirl.strength).toEqual(6);
    expect(meanGirl.intelligence).toEqual(9);
    expect(meanGirl.snark).toEqual(20);
    expect(meanGirl.charm).toEqual(17);
    expect(meanGirl.weirdness).toEqual(3);
    expect(meanGirl.repPoints).toEqual(80);
  });
  
  test('should adjust the moves battle effectiveness and damage', () => {
    meanGirl.makeAMove(sprinkler);
    expect(moonWalk.battleEffectiveness).toEqual(24.6);
    expect(moonWalk.battleDamage).toEqual(54.5);
  });

});