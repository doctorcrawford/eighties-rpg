import { DanceMove } from '../src/js/dance-move.js';

describe('DanceMove', () => {

  test('should correctly create a DanceMove object with two properties', () => {
    const moonWalk = new DanceMove ("Moon Walk",20, 50);
    expect(moonWalk.baseEffectiveness).toEqual(20);
    expect(moonWalk.baseDamage).toEqual(50);
  });


});