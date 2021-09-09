const charactersArr = ["Kirie", "Aiko", "Haru", "Mizuki", "Kouji", "Mimi", "Miku", "Moriko", "Yashiro"];
//List of playable characters

const oldGodsArr = ["Ygothaeg", "Cthac-Atorasu", "Ithotu", "Ath-Yolazsth", "Goizo"];
//List of old gods

let valueStoreArr = ["character", "oldgod", "background", "timeline"];
//The definite value for each option is stored in this array


let characterValueArr = [0, ""];
let oldGodValueArr = [1, ""];
let backgroundValueArr = [2, ""];
let timelineValueArr = [3, ""];
/*Array where the current value for each option is temporarily stored before being transmitted to the main value store array. The number at index 0 indicates the corresponding index for that value in the store array.*/


function getRandom(array) {
  let randNum = Math.floor(Math.random() * array.length);
  return array[randNum];
}
//Returns a random value from a given array


function coinFlip() {
  let headsTails = Math.floor(Math.random() * 2);
  return headsTails;
}
//Returns 1 or 2 at random

function getBackground() {
  let backgroundsArr = ["World of Horror", "Hunted by the Cult"];
  return backgroundsArr[coinFlip()];
}
//Returns one of two possible backgrounds at random 

function getTimeline() {
 let timelinesArr = ["A", "B"];
 return `Timeline ${timelinesArr[coinFlip()]}`;
}
//Returns one of two possible timelines at random


function defineValue(value, valueArr) {
  valueArr[1] = value;
}
//Stores a result in the corresponding intermediate array


function storeValue(valueArr) {
  valueStoreArr[valueArr[0]] = valueArr[1];
}
/*Stores a result in one of the intermediate arrays into the main value store array according to its corresponding index number*/


function characterDisplay() {
  let character = characterValueArr[1];
  let chariconSrc = `assets/img/icons/characters/${character.toLowerCase()}.png`
  document.getElementById("character").innerHTML = `Character: ${character}`;
  document.getElementById("charbutton").value = "Reroll Character";
  document.getElementById("charicon").src = chariconSrc;
}
/*Changes the HTML page character icon and name according to the obtained result, and the roll button to reroll*/


function randChar() {
  let character = getRandom(charactersArr);
  defineValue(character, characterValueArr);
  storeValue(characterValueArr);
  characterDisplay();
}
//Gets random character, stores it and changes HTML display


function rerollChar() {
  let character;
  do {
    character = getRandom(charactersArr);
    defineValue(character, characterValueArr);
  } while (character === valueStoreArr[0]);
  storeValue(characterValueArr);
  characterDisplay();
}
//Rerolls character until result is different from current stored value


function oldGodDisplay() {
  let oldGod = oldGodValueArr[1];
  let oldgodiconSrc = `assets/img/icons/old_gods/${oldGod.toLowerCase()}.png`
  document.getElementById("old-god").innerHTML = `Old God: ${oldGod}`;
  document.getElementById("oldgodbutton").value = "Reroll Old God";
  document.getElementById("oldgodicon").src = oldgodiconSrc;
}
/*Changes the HTML page old god icon and name according to the obtained result, and the roll button to reroll*/


function randGod() {
  let oldGod = getRandom(oldGodsArr);
  defineValue(oldGod, oldGodValueArr);
  storeValue(oldGodValueArr);
  oldGodDisplay();
}
//Gets random old god, stores it and changes HTML display

function rerollGod() {
  let oldGod;
  do {
    oldGod = getRandom(oldGodsArr);
    defineValue(oldGod, oldGodValueArr);
  } while (oldGod === valueStoreArr[1]);
  storeValue(oldGodValueArr);
  oldGodDisplay();
}
//Rerolls old god until result is different from current stored value


function backgroundDisplay() {
  let background = backgroundValueArr[1];
  document.getElementById("background").innerHTML = `${background}`;
  document.getElementById("backgbutton").value = "Switch Background";
}
/*Changes the HTML page background name according to the obtained result, and the roll button to switch*/

function randBackground() {
  let background = getBackground();
  defineValue(background, backgroundValueArr);
  storeValue(backgroundValueArr);
  backgroundDisplay();
}
//Gets random background, stores it and changes HTML display

function switchBackground() {
  do {
    background = getBackground();
    defineValue(background, backgroundValueArr);
  } while (background === valueStoreArr[2]);
  storeValue(backgroundValueArr);
  backgroundDisplay();
}
//Rerolls background until result is different from current stored value


function timelineDisplay() {
  let timeline = timelineValueArr[1];
  document.getElementById("timeline").innerHTML = `${timeline}`;
  document.getElementById("timelbutton").value = "Switch Timeline";
}
/*Changes the HTML page timeline name according to the obtained result, and the roll button to switch*/

function randTimeline() {
  let timeline = getTimeline();
  defineValue(timeline, timelineValueArr);
  storeValue(timelineValueArr);
  timelineDisplay();
}
//Gets random timeline, stores it and changes HTML display

function switchTimeline() {
  do {
    timeline = getTimeline();
    defineValue(timeline, timelineValueArr);
  } while (timeline === valueStoreArr[3]);
  storeValue(timelineValueArr);
  timelineDisplay();
}
//Rerolls timeline until result is different from current stored value


function rollAll() {
  randChar();
  randGod();
  randBackground();
  randTimeline();
}
//Gets random values for all options, stores them and changes HTML display

function resetAll() {
  document.getElementById("character").innerHTML = `Character`;
  document.getElementById("old-god").innerHTML = `Old God`;
  document.getElementById("background").innerHTML = `Background`;
  document.getElementById("timeline").innerHTML = `Timeline`;
  valueStoreArray = ["character", "oldgod", "background", "timeline"];
  characterValueArr =[0, ""];
  oldGodValueArr = [1, ""];
  backgroundValueArr = [2, ""];
  timelineValueArr = [3, ""];
  document.getElementById("charicon").src = "";
  document.getElementById("oldgodicon").src = "";
  document.getElementById("charbutton").value = "Roll Character";
  document.getElementById("oldgodbutton").value = "Roll Old God";
  document.getElementById("backgbutton").value = "Roll Background";
  document.getElementById("timelbutton").value = "Roll Timeline";
  document.getElementById("allbutton").value = "Roll All";
}
//Resets all variables and HTML elements to their default value
