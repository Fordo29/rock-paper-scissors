var chooseClassicBtn = document.querySelector(".classic-mode");
var chooseSpicyBtn = document.querySelector(".difficult-mode");
var fighterBtn = document.querySelector(".fight");
// var crabBtn = document.querySelector(".fight");
// var octopusBtn = document.querySelector(".fight");
// var turtleBtn = document.querySelector(".fight");
// var mermaidBtn = document.querySelector(".fight");
var changeGameBtn = document.querySelector(".change-game-button");
var homeView = document.querySelector(".choose-game");
var classGameView = document.querySelector(".choose-fighter");
var spicyGameView = document.querySelector(".choose-fighter-spicy");
var playerInput = "";
var gameType = "";

chooseClassicBtn.addEventListener("click", classicGame);
chooseSpicyBtn.addEventListener("click", spicyGame);
changeGameBtn.addEventListener("click", goHome);
fighterBtn.addEventListener("click", function(e) {
  playerInput= e.target.id;
  // if (e.target.id === "shark") {
  //   playerInput = "shark";
  // } else if (e.target.id === "crab") {
  //   playerInput = "crab";
  // } else if (e.target.id === "octopus") {
  //   playerInput = "octopus";
  // } else if (e.target.id === "turtle") {
  //   playerInput = "turtle";
  // } else if (e.target.id === "mermaid") {
  //   playerInput = "mermaid";
  // }
});

// crabBtn.addEventListener("click", pickCrab);
// octopusBtn.addEventListener("click", pickOctopus);
// turtleBtn.addEventListener("click", pickTurtle);
// mermaidBtn.addEventListener("click", pickMermaid);


function displayPlayerInfo() {
   surferPlayer.innerHTML = `
   <img class="sidebar-color" src="./assets/surfer.png" alt="surfer">
   <p class="sidebar-color">${game.surfer.name}</p>
   <p class="sidebar-color" id="score">Wins: ${surfer.wins}</p>`
}


// function pickShark() {
//   playerInput = "shark";
//
// }
//
// function pickCrab() {
//   playerInput = "crab";
// }
//
// function pickOctopus() {
//   playerInput = "octopus";
// }
//
// function pickTurtle() {
//   playerInput = "turtle";
// }
//
// function pickMermaid() {
//   playerInput = "mermaid";
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
  gameType = "Classic";
}

function spicyGame() {
  show(changeGameBtn);
  show(spicyGameView);
  hide(homeView);
  gameType = "Spicy";
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
