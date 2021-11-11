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


chooseClassicBtn.addEventListener("click", classicGame);
chooseSpicyBtn.addEventListener("click", spicyGame);
changeGameBtn.addEventListener("click", goHome);


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
