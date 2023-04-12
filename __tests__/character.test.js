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

  // test('should correctly determine whether three lengths are not a triangle', () => {
  //   const notTriangle = new Triangle(3,9,22);
  //   expect(notTriangle.checkType()).toEqual("not a triangle");
  // });

  // test('should correctly determine whether three lengths make an isosceles triangle', () => {
  //   const isocTriangle = new Triangle(5,5,7)
  //   expect(isocTriangle.checkType()).toEqual("isosceles triangle");
  // });

  // test('should correctly determine whether three lengths make an scalene triangle', () => {
  //   const scalTriangle = new Triangle(2,3,4)
  //   expect(scalTriangle.checkType()).toEqual("scalene triangle");
  // });

  // test('should correctly determine whether three lengths make an equilateral triangle', () => {
  //   const equiTriangle = new Triangle(5,5,5)
  //   expect(equiTriangle.checkType()).toEqual("equilateral triangle");
  // });

});