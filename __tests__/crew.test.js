import Crew from './../src/js/crew.js';
import Character from './../src/js/character.js';
import { DanceMove } from './../src/js/dance-move.js';

describe('Crew', () => {
  let crew1;
  let crew2;
  let claire;
  let andrew;
  let sprinkler;

  beforeEach(() => {
    crew1 = new Crew("The Pink Ladies");
    crew2 = new Crew("The Snake Plants");
    sprinkler = new DanceMove("Sprinkler",60, 8);
    claire = new Character("Claire", 6, 9, 17, 20, 3, 70, [sprinkler, "cabbagePatch", "runningMan"]);
    andrew = new Character("Andrew",20,3,14,17,1,75,["sprinkler","cabbagePatch","runningMan]"]);
  });

  test('should correctly create a crew object to hold the crews name and selected characters', () => {
    expect(crew1.crewName).toEqual("The Pink Ladies");
    expect(Array.isArray(crew1.characters)).toEqual(true);
  });

  test('should add character to crew', () => {
    crew1.addCharacter(claire);
    expect(crew1.characters[0].name).toEqual("Claire");
  });

  test('should increase crew score by amount of damage done', () => {
    crew1.addCharacter(claire);
    crew2.addCharacter(andrew);
    let battleMap = claire.makeAMove(sprinkler);
    let hitTaken = andrew.takeAHit(battleMap);
    crew1.addToScore(hitTaken);
    expect(crew1.score).toEqual(8.72);
  });
});