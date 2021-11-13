var chooseClassicBtn = document.querySelector(".classic-mode");
var chooseSpicyBtn = document.querySelector(".difficult-mode");
var sharkBtn = document.querySelector(".shark-button");
var crabBtn = document.querySelector(".crab-button");
var octopusBtn = document.querySelector(".octopus-button");
var turtleBtn = document.querySelector(".turtle-button");
var mermaidBtn = document.querySelector(".mermaid-button");
var changeGameBtn = document.querySelector(".change-game-button");
var homeView = document.querySelector(".choose-game");
var classGameView = document.querySelector(".choose-fighter");
var spicyGameView = document.querySelector(".choose-fighter-spicy");
var playerInput = "";
var spicy = "";
var classic = "";

chooseClassicBtn.addEventListener("click", classicGame);
chooseSpicyBtn.addEventListener("click", spicyGame);
changeGameBtn.addEventListener("click", goHome);
sharkBtn.addEventListener("click", pickShark);
crabBtn.addEventListener("click", pickCrab);
octopusBtn.addEventListener("click", pickOctopus);
turtleBtn.addEventListener("click", pickTurtle);
mermaidBtn.addEventListener("click", pickMermaid);


function displayPlayerInfo() {
   surferPlayer.innerHTML = `
   <img class="sidebar-color" src="./assets/surfer.png" alt="surfer">
   <p class="sidebar-color">${game.surfer.name}</p>
   <p class="sidebar-color" id="score">Wins: ${surfer.wins}</p>`
}


function pickShark() {
  playerInput = "shark";
}

function pickCrab() {
  playerInput = "crab";
}

function pickOctopus() {
  playerInput = "octopus";
}

function pickTurtle() {
  playerInput = "turtle";
}

function pickMermaid() {
  playerInput = "mermaid";
}

function goHome() {
  show(homeView);
  hide(changeGameBtn);
  hide(classGameView);
  hide(spicyGameView);
}

function classicGame() {
  show(changeGameBtn);
  show(classGameView);
  hide(homeView);
}

function spicyGame() {
  show(changeGameBtn);
  show(spicyGameView);
  hide(homeView);
  spicy = spicyType;
}

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

function showHide(view, vanish) {
  show(view);
  hide(vanish);
};

function pirateChoice(array) {
  var pirateInput = array[getRandomIndex(array)];
}

var classicFighters = ["Shark", "Crab", "Octopus"];
var spicyFighters = ["Shark", "Crab", "Octopus", "Turtle", "Mermaid"];

function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
// function show(elements) {
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].classList.remove('hidden');
//   }
// }
//
// function hide(elements) {
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].classList.add('hidden');
//   }
// }
