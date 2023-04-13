import Crew from './../src/js/crew.js';

describe('Crew', () => {

  test('should correctly create a crew object to hold the crews name and selected characters', () => {
    let crew1 = new Crew("The Pink Ladies");
    expect(crew1.crewName).toEqual("The Pink Ladies");
    expect(Array.isArray(crew1.characters)).toEqual(true);
  });
});