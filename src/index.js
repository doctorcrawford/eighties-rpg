import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './../src/js/character.js';
import { DanceMove } from './js/dance-moves';


const sprinkler = new DanceMove("Sprinkler",60, 8);
const cabbagePatch = new DanceMove("Cabbage Patch",55, 10);
const runningMan = new DanceMove("Running Man",42, 14);
const rogerRabbit = new DanceMove("Roger Rabbit",44, 13);
const carlton = new DanceMove("Carlton",31, 19);
const popNLock = new DanceMove("Pop 'n Lock",29, 21);
const moonWalk = new DanceMove("Moon Walk",19, 27);
const kidNPlay = new DanceMove("Kid 'n Play",20, 25);
let claire = new Character("Claire",6,9,17,20,3,70,[sprinkler,runningMan,rogerRabbit]);
let bender = new Character("Bender",12,8,20,4,11,35,[popNLock,moonWalk,kidNPlay]);
let brian = new Character("Brian",4,20,4,10,17,44,[runningMan,carlton,popNLock]);
let andrew = new Character("Andrew",20,3,14,17,1,75[sprinkler,cabbagePatch,runningMan]);
let ali = new Character("Ali",4,11,18,2,20,41,[rogerRabbit,carlton,kidNPlay]);
console.log(claire);
console.log(bender);
console.log(brian);
console.log(andrew);
console.log(ali);



// function displayCharacters() {
//   const characterDiv = document.getElementById("characters");
//   let claireString = "";
//   for (const key in claire) {
//     claireString = claireString.concat(key + ": " + claire[key] + "\n");
//   }
//   let claireDiv = document.createElement("div");
//   claireDiv.innerText = claireString;
//   characterDiv.append(claireDiv);
// }

function displayCharacters(character) {
  const characterDiv = document.createElement("div")
  characterDiv.setAttribute("class", "characterdiv");
  const playersDiv = document.getElementById("characters");
  let characterString = "";
  for (const key in character) {
    characterString = characterString.concat(key + ": " + character[key] + "\n");
  }
  characterDiv.innerText = characterString;
  playersDiv.append(characterDiv);
}



displayCharacters(claire);
displayCharacters(bender);
displayCharacters(brian);
displayCharacters(andrew);
displayCharacters(ali);