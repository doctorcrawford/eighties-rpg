import Crew from './../src/js/crew.js';
import Character from './../src/js/character.js';

describe('Crew', () => {
  let crew1;

  beforeEach(() => {
    crew1 = new Crew("The Pink Ladies");
  });

  test('should correctly create a crew object to hold the crews name and selected characters', () => {
    expect(crew1.crewName).toEqual("The Pink Ladies");
    expect(Array.isArray(crew1.characters)).toEqual(true);
  });

  test('should add character to crew', () => {
    let claire = new Character("Claire", 6, 9, 17, 20, 3, 70, ["sprinkler", "cabbagePatch", "runningMan"]);
    crew1.addCharacter(claire);
    expect(crew1.characters[0].name).toEqual("Claire");
  });
});