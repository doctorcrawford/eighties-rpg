import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './../src/js/character.js';
import { DanceMove } from './js/dance-move';


let sprinkler = new DanceMove("Sprinkler",60, 8);
let cabbagePatch = new DanceMove("Cabbage Patch",55, 10);
let runningMan = new DanceMove("Running Man",42, 14);
let rogerRabbit = new DanceMove("Roger Rabbit",44, 13);
let carlton = new DanceMove("Carlton",31, 19);
let popNLock = new DanceMove("Pop 'n Lock",29, 21);
let moonWalk = new DanceMove("Moon Walk",19, 27);
let kidNPlay = new DanceMove("Kid 'n Play",20, 25);
let claire = new Character("Claire",6,9,17,20,3,70,[sprinkler,runningMan,rogerRabbit]);
let bender = new Character("Bender",12,8,20,4,11,35,[popNLock,moonWalk,kidNPlay]);
let brian = new Character("Brian",4,20,4,10,17,44,[runningMan,carlton,popNLock]);
let andrew = new Character("Andrew",20,3,14,17,1,75,[sprinkler,cabbagePatch,runningMan]);
let ali = new Character("Ali",4,11,18,2,20,41,[rogerRabbit,carlton,kidNPlay]);


function displayCharacters(character) {
  const characterDiv = document.createElement("div");
  characterDiv.setAttribute("class", "characterdiv");
  const playersDiv = document.getElementById("characters");
  const characterKeys = Object.keys(character);
  let characterString = "";
  characterKeys.forEach((key) => {
    if (key == 'moves') {
      character.moves.forEach((move) => {
        characterString = characterString.concat("Move: " + move.name + "\n"); 
      });
    } else if (key !== 'moves') {
      characterString = characterString.concat(key + ": " + character[key] + "\n"); 
    }
  });
  characterDiv.innerText = characterString;
  playersDiv.append(characterDiv);
}

// function gamePlay() {
//   let dancerName = get dat value
//   let dancer = crew1.characters.includes(dancerName)
//   let battleDmg = claire.makeAMove(sprinkler);
//   andrew.takeAHit(battleDmg);
// }

// gamePlay();
console.log(andrew);



displayCharacters(claire);
displayCharacters(bender);
displayCharacters(brian);
displayCharacters(andrew);
displayCharacters(ali);


