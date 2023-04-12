import { DanceMove } from './../src/js/dance-moves.js';

describe('DanceMove', () => {

  test('should correctly create a DanceMove object with two properties', () => {
    const moonWalk = new DanceMove (20, 50);
    expect(moonWalk.effectiveness).toEqual(20);
    expect(moonWalk.damage).toEqual(50);
  });
});