var game = new Game();
var chooseClassicBtn = document.querySelector(".classic-mode");
var chooseSpicyBtn = document.querySelector(".difficult-mode");
var pirateSide = document.querySelector(".computer-side")
var surferSide = document.querySelector(".human-side")
var fighterBtn = document.querySelector(".fight");
var turtleBtn = document.querySelector(".turtle");
var mermaidBtn = document.querySelector(".mermaid");
var changeGameBtn = document.querySelector(".change-game-button");
var homeView = document.querySelector(".choose-game");
var classGameView = document.querySelector(".choose-fighter");
var spicyGameView = document.querySelector(".choose-fighter-spicy");
var surferImg = document.querySelector(".surfer");


chooseClassicBtn.addEventListener("click", classicGame);
chooseSpicyBtn.addEventListener("click", spicyGame);
changeGameBtn.addEventListener("click", goHome);
fighterBtn.addEventListener("click", function(event) {
    surferPick(event);
 });




function surferPick(event) {
    game.surfer.choice = event.target.id;
    game.determineWinner();
    displayPlayerInfo();
}

function displayPlayerInfo() {
  surferSide.innerHTML = `
    <img class="sidebar-color" src="./assets/surfer.png" alt="surfer">
    <p class="sidebar-color">${game.surfer.name}</p>
    <p class="sidebar-color" id="score">Wins: ${game.surfer.wins}</p><button type="button" class="change-game-button" name="change-game">Change Game?</button>`
    ;

  pirateSide.innerHTML = `
    <img class="sidebar-color" src="./assets/pirate.png" alt="pirate">
    <p class="sidebar-color">${game.pirate.name}</p>
    <p class="sidebar-color" id="score">Wins: ${game.pirate.wins}</p>`;
}

function goHome() {
  show(homeView);
  hide(changeGameBtn);
  hide(classGameView);
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
  show(classGameView);
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
