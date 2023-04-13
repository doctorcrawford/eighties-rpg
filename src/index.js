import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Character from './js/character.js';
import Crew from './js/crew';
import { DanceMove } from './js/dance-move';
// import Battle from './js/battle.js';

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

let crew1;
let crew2;

function arrayCharacters() {
  return [claire, bender, brian, andrew, ali];
}

function displayMainCharacterContainer() {
  const playersDiv = document.getElementById("characters");
  playersDiv.append(displayCharacters(claire), displayCharacters(bender),displayCharacters(brian),displayCharacters(andrew),displayCharacters(ali));
}

function displayCharacters(character) {
  const characterDiv = document.createElement("div");
  characterDiv.classList = "characterdiv";
  characterDiv.dataset.id = character.name;
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
  return characterDiv;
}

function displayCrew() {
  let crew1Div = document.getElementById("crew1");
  let crew2Div = document.getElementById("crew2");
  crew1.characters.forEach((character) => {
    crew1Div.append(displayCharacters(character));
  });
  crew2.characters.forEach((character) => {
    crew2Div.append(displayCharacters(character));
  });
  crew1Div.prepend(crew1.crewName);
  crew2Div.prepend(crew2.crewName);
}

function handleFormSubmissionPlayer1(e) {
  e.preventDefault();
  const crewName = document.querySelector("#crew1-name").value;
  crew1 = new Crew(crewName);
  const characters = arrayCharacters();
  let form = document.getElementById("player1-form");
  const crew = form.querySelectorAll("input[type='checkbox']:checked");
  crew.forEach((element) => {
    for (let i = 0; i < characters.length; i++) {
      if (element.value === characters[i].name) {
        crew1.addCharacter(characters[i]);
      }
    }
  });
  form.setAttribute("class", "hidden");
  console.log(crew1)
}

function handleFormSubmissionPlayer2(e) {
  e.preventDefault();
  const crewName = document.querySelector("#crew2-name").value;
  crew2 = new Crew(crewName);
  const characters = arrayCharacters();
  let form = document.getElementById("player2-form");
  let characterDiv = document.getElementById("characters");
  const crew = form.querySelectorAll("input[type='checkbox']:checked");
  crew.forEach((element) => {
    for (let i = 0; i < characters.length; i++) {
      if (element.value === characters[i].name) {
        crew2.addCharacter(characters[i]);
      }
    }
  });
  form.setAttribute("class", "hidden");
  characterDiv.setAttribute("class", "hidden");
  displayCrew();
}

document.querySelector("form#player1-form").addEventListener("submit", handleFormSubmissionPlayer1);
document.querySelector("form#player2-form").addEventListener("submit", handleFormSubmissionPlayer2);

displayMainCharacterContainer();










// function createDropDown() {
//   let characters = arrayCharacterNames();
//   const form = document.getElementById("player1-form");
//   const select1 = document.createElement("select");
//   const select2 = document.createElement("select");
//   const select3 = document.createElement("select");
//   characters.forEach((character) => {
//     let option = document.createElement("option");
//     option.setAttribute("id", character);
//     option.value = character;
//   select1.append(option)
//   });
//   characters.forEach((character) => {
//     let option = document.createElement("option");
//     if ()
//   })
// }





// function gamePlay() {
//   let dancerName = get dat value
//   let dancer = crew1.characters.includes(dancerName)
//   let battleDmg = claire.makeAMove(sprinkler);
//   andrew.takeAHit(battleDmg);
// }

// gamePlay();
