export default class Character {
  constructor(name, strength, intelligence, snark, charm, weirdness, repPoints, moves) {
    this.name = name;
    this.strength = strength;
    this.intelligence = intelligence;
    this.snark = snark;
    this.charm = charm;
    this.weirdness = weirdness;
    this.repPoints = repPoints;
    this.moves = moves; 
    this.winPoints = 0;
    this.deflectPoints = 0;
    this.level = 1;
  }

  makeAMove() {    
    // let snarkAdjust = character.snark *.5;
    // let intelAdjust = character.intelligence *.5;
    // let charmAdjust = character.charm *.5;
    // this.moves[theMove.battleEffectiveness] = this.moves[theMove.baseEffectiveness] * (1+ (.01 * (snarkAdjust + intelAdjust + charmAdjust)));
    // let strengthAdjust = character.strength *.5;
    // let weirdnessAdjust = character.weirdness *.5;
    // this.moves[theMove.battleDamage] = this.moves[theMove.baseDamage] * (1 + (.01 * (strengthAdjust + intelAdjust + weirdnessAdjust)));
    // console.log(theMove);
  };
}