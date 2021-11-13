var game = new Game();
var chooseClassicBtn = document.querySelector(".classic-mode");
var chooseSpicyBtn = document.querySelector(".difficult-mode");
var fighterBtn = document.querySelector(".fight");
// var sharkbtn = document.querySelector(".shark-button")
// var crabBtn = document.querySelector(".crab-button");
// var octopusBtn = document.querySelector(".octopus-button");
var turtleBtn = document.getElementById("turtle");
var mermaidBtn = document.getElementById("mermaid");
var changeGameBtn = document.querySelector(".change-game-button");
var homeView = document.querySelector(".choose-game");
var classGameView = document.querySelector(".choose-fighter");
var spicyGameView = document.querySelector(".choose-fighter-spicy");
var surferImg = document.querySelector(".surfer");


chooseClassicBtn.addEventListener("click", classicGame);
chooseSpicyBtn.addEventListener("click", spicyGame);
changeGameBtn.addEventListener("click", goHome);

// sharkbtn.addEventListener("click", pickShark);
// crabBtn.addEventListener("click", pickCrab);
// octopusBtn.addEventListener("click", pickOctopus);
// turtleBtn.addEventListener("click", pickTurtle);
// mermaidBtn.addEventListener("click", pickMermaid);
fighterBtn.addEventListener("click", function(event) {
    surferPick(event);
 });


function displayPlayerInfo() {
   surferPlayer.innerHTML = `
   <img class="sidebar-color" src="./assets/surfer.png" alt="surfer">
   <p class="sidebar-color">${game.surfer.name}</p>
   <p class="sidebar-color" id="score">Wins: ${surfer.wins}</p>`
}


// function playGame() {
// for(var i = 0; i < )
// }

function surferPick(event) {
    game.surfer.choice = event.target.id;
    game.determineWinner();
}

// function pickShark() {
//   game.surfer.choice = "Shark";
//   game.determineWinner();
// }
//
// function pickCrab() {
//   game.surfer.choice = "Crab";
//   game.determineWinner();
// }
//
// function pickOctopus() {
//   game.surfer.choice = "Octopus";
//   game.determineWinner();
// }
//
// function pickTurtle() {
//   game.surfer.choice = "Turtle";
//   game.determineWinner();
// }
//
// function pickMermaid() {
//   game.surfer.choice = "Mermaid";
//   game.determineWinner();
// }

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
  hide(turtleBtn);
  hide(mermaidBtn);
  game.type = "Classic";
}

function spicyGame() {
  show(changeGameBtn);
  show(spicyGameView);
  show(turtleBtn);
  show(mermaidBtn);
  hide(homeView);
  game.type = "Spicy";
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
