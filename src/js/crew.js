export default class Crew {
  constructor(crewName) {
    this.crewName = crewName;
    this.characters = [];
    this.score = 0;
    this.turn = false;
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  addToScore(hitsTaken) {
    if(hitsTaken === Number(hitsTaken)){
      this.score += hitsTaken;
    }        
  }
}