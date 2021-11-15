var game = new Game();
var chooseClassicBtn = document.querySelector(".classic-mode");
var chooseSpicyBtn = document.querySelector(".difficult-mode");
var pirateSide = document.querySelector(".computer-side")
var surferSide = document.querySelector(".surfer")
var fighterBtn = document.querySelector(".fight");
var turtleBtn = document.querySelector(".turtle");
var mermaidBtn = document.querySelector(".mermaid");
var changeGameBtn = document.querySelector(".change-game-button");
var homeView = document.querySelector(".choose-game");
var classGameView = document.querySelector(".choose-fighter");
var spicyGameView = document.querySelector(".choose-fighter-spicy");
var sharkSurfer = document.getElementById("shark");
var crabSurfer = document.getElementById("crab");
var octopusSurfer = document.getElementById("octopus");
var turtleSurfer = document.getElementById("turtle");
var mermaidSurfer = document.getElementById("mermaid");
var sharkPirate = document.getElementById("sharkComputer");
var crabPirate = document.getElementById("crabComputer");
var octopusPirate = document.getElementById("octopusComputer");
var turtlePirate = document.getElementById("turtleComputer");
var mermaidPirate = document.getElementById("mermaidComputer");
var surferImg = document.querySelector(".surfer");

document.addEventListener("load", displayPlayerInfo());
chooseClassicBtn.addEventListener("click", classicGame);
chooseSpicyBtn.addEventListener("click", spicyGame);
changeGameBtn.addEventListener("click", goHome);
fighterBtn.addEventListener("click", function(event) {
    playGame(event);
 });


function playGame(event) {
  game.surfer.choice = event.target.id;
  console.log(game.surfer.choice);
  game.determineWinner();
  console.log(game.pirate.choice);
  displayPlayerInfo();
  // displayWinners();
  // console.log(game.surfer.wins);
  // console.log(game.pirate.wins);

}

function displayPlayerInfo() {
  game.surfer.wins = game.surfer.retrieveWinsFromStorage() || 0;
  game.pirate.wins = game.pirate.retrieveWinsFromStorage() || 0;
  surferSide.innerHTML = `
    <img class="sidebar-color" src="./assets/surfer.png" alt="surfer">
    <p class="sidebar-color">${game.surfer.name}</p>
    <p class="sidebar-color" id="score">Wins: ${game.surfer.wins}</p>`;

  pirateSide.innerHTML = `
    <img class="sidebar-color" src="./assets/pirate.png" alt="pirate">
    <p class="sidebar-color">${game.pirate.name}</p>
    <p class="sidebar-color" id="score">Wins: ${game.pirate.wins}</p>`;
}

function displayWinners() {
  show2([sharkPirate]);
  hide2([]);
}



function goHome() {
  show(homeView);
  hide(changeGameBtn);
  hide(classGameView);
}

function classicGame() {
  show(changeGameBtn);
  show(classGameView);
  hide2([homeView, turtleSurfer, mermaidSurfer]);
  game.type = "Classic";
}

function spicyGame() {
  show(changeGameBtn);
  show(classGameView);
  show(turtleSurfer);
  show(mermaidSurfer);
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


function show2(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
}

function hide2(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }
}
