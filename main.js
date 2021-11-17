var game = new Game();
var chooseClassicBtn = document.querySelector(".classic-mode");
var chooseSpicyBtn = document.querySelector(".difficult-mode");
var pirateSide = document.querySelector(".computer-side");
var surferSide = document.querySelector(".surfer");
var fighterBtn = document.querySelector(".fight");
var turtleBtn = document.querySelector(".turtle");
var mermaidBtn = document.querySelector(".mermaid");
var changeGameBtn = document.querySelector(".change-game-button");
var homeView = document.querySelector(".choose-game");
var classGameView = document.querySelector(".choose-fighter");
var displayWinnerView = document.querySelector(".display-winner");
var sharkSurfer = document.getElementById("shark");
var crabSurfer = document.getElementById("crab");
var octopusSurfer = document.getElementById("octopus");
var turtleSurfer = document.getElementById("turtle");
var mermaidSurfer = document.getElementById("mermaid");
var headline = document.querySelector(".headline");
var surferImg = document.querySelector(".surfer-img");
var pirateImg = document.querySelector(".pirate-img");
var surferEmoji = document.querySelector(".surfer-emoji");
var pirateEmoji = document.querySelector(".pirate-emoji");

document.addEventListener("load", displayPlayerInfo());
chooseClassicBtn.addEventListener("click", classicGame);
chooseSpicyBtn.addEventListener("click", spicyGame);
changeGameBtn.addEventListener("click", goHome);
fighterBtn.addEventListener("click", function (event) {
  playGame(event);
});

function playGame(event) {
  game.surfer.choice = event.target.id;
  game.determineWinner();
  displayPlayerInfo();
  displayWinners();
}

function displayPlayerInfo() {
  game.surfer.wins = game.surfer.retrieveWinsFromStorage() || 0;
  game.pirate.wins = game.pirate.retrieveWinsFromStorage() || 0;

  surferSide.innerHTML = `
    <img class="sidebar-color" src="./assets/surfer.png" alt="surfer player">
    <p class="sidebar-color">${game.surfer.name}</p>
    <p class="sidebar-color" id="score">Wins: ${game.surfer.wins}</p>`;

  pirateSide.innerHTML = `
    <img class="sidebar-color" src="./assets/pirate.png" alt="pirate player">
    <p class="sidebar-color">${game.pirate.name}</p>
    <p class="sidebar-color" id="score">Wins: ${game.pirate.wins}</p>`;
}

function displayWinners() {
  displayOrHide("show", [displayWinnerView, surferEmoji, pirateEmoji]);
  displayOrHide("hide", [
    changeGameBtn,
    homeView,
    classGameView,
    turtleSurfer,
    mermaidSurfer,
  ]);

  gameWinnerAnnouncement();
  surferImg.src = `./assets/${game.surfer.choice}.png`;
  pirateImg.src = `./assets/${game.pirate.choice}.png`;

  if (game.type === "Classic") {
    setTimeout(classicGame, 2000);
  } else if (game.type === "Spicy") {
    setTimeout(spicyGame, 2000);
  }
}

function gameWinnerAnnouncement() {
  if (game.winner === "Surfer" || game.winner === "Pirate") {
    headline.innerText = `${game.winner} WINS!`;
  } else {
    headline.innerText = `It's a TIE!`;
  }
}

function goHome() {
  displayOrHide("show", [homeView]);
  displayOrHide("hide", [
    changeGameBtn,
    classGameView,
    displayWinnerView,
    surferEmoji,
    pirateEmoji,
  ]);
}

function classicGame() {
  displayOrHide("show", [changeGameBtn, classGameView]);
  displayOrHide("hide", [
    homeView,
    turtleSurfer,
    mermaidSurfer,
    displayWinnerView,
  ]);
  game.type = "Classic";
}

function spicyGame() {
  displayOrHide("show", [
    changeGameBtn,
    classGameView,
    turtleSurfer,
    mermaidSurfer,
  ]);
  displayOrHide("hide", [homeView, displayWinnerView]);
  game.type = "Spicy";
}

function displayOrHide(showOrHide, elements) {
  for (var i = 0; i < elements.length; i++) {
    if (showOrHide === "show") {
      elements[i].classList.remove("hidden");
    } else {
      elements[i].classList.add("hidden");
    }
  }
}
