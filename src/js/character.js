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

  makeAMove(theMove) {    
    let snarkAdjust = this.snark * 0.5;
    let intelAdjust = this.intelligence *.5;
    let charmAdjust = this.charm *.5;
    // console.log(theMove.baseEffectiveness);
    // console.log(snarkAdjust);
    theMove.battleEffectiveness = theMove.baseEffectiveness * (1+ (.01 * (snarkAdjust + intelAdjust + charmAdjust)));
    let strengthAdjust = this.strength *.5;
    let weirdnessAdjust = this.weirdness *.5;
    theMove.battleDamage = theMove.baseDamage * (1 + (.01 * (strengthAdjust + intelAdjust + weirdnessAdjust)));
    // console.log(theMove);
    // console.log(theMove.battleEffectiveness);
    let battleMap = new Map (
      [
        ["effectiveness", theMove.battleEffectiveness],
        ["damage", theMove.battleDamage]
      ]
    );
    return battleMap;
  }

  takeAHit(battleMap) {
    let randomNumber = 1;
    // let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber <= battleMap.get("effectiveness")){
      this.repPoints -= battleMap.get("damage");
    }else {
      return "you missed, you got no rizz!";
    }
  }
}