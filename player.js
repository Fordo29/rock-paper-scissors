class Player {
  constructor(name, tokenImg) {
    this.name = name;
    this.token = tokenImg;
    this.wins = 0;
    this.choice = "";
  }

  takeTurn(gameType, playerInput) {
      // this.choice = "";
    if (playerInput) {
      this.choice = playerInput;
    } else if (gameType === "Classic") {
      var classicFighters = ["shark", "crab", "octopus"];
      this.choice = classicFighters[getRandomIndex(classicFighters)];
    } else if (gameType === "Spicy") {
      var spicyFighters = ["shark", "crab", "octopus", "turtle", "mermaid"];
      this.choice = spicyFighters[getRandomIndex(spicyFighters)];
    }
  }

  saveWinsToStorage() {
    var savedWins = this.wins
    savedWins = parseData() || 0;
    stringifyData(savedWins);
  }

  retrieveWinsFromStorage() {
    var retrieveWins = localStorage.getItem(this.name);
    JSON.parse(retrieveWins);
  }

}
function stringifyData(savedWins) {
  localStorage.setItem('savedWins', JSON.stringify(savedWins));
};

function parseData() {
  return JSON.parse(localStorage.getItem('savedWins'));
};

function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
