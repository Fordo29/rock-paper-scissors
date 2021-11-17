class Player {
  constructor(name, tokenImg) {
    this.name = name;
    this.token = tokenImg;
    this.wins = this.wins || 0;
    this.choice = "";
    this.src = "";
  }

  takeTurn(gameType, playerInput) {
    if (playerInput) {
      this.choice = playerInput;
      this.src = `./assets/${this.choice}.png`;
    } else if (gameType === "Classic") {
      var classicFighters = ["shark", "crab", "octopus"];
      this.choice = classicFighters[getRandomIndex(classicFighters)];
    } else if (gameType === "Spicy") {
      var spicyFighters = ["shark", "crab", "octopus", "turtle", "mermaid"];
      this.choice = spicyFighters[getRandomIndex(spicyFighters)];
    }
  }

  saveWinsToStorage() {
    if (this.name === "Surfer") {
      localStorage.setItem("surferWins1", JSON.stringify(this.wins));
    } else {
      localStorage.setItem("pirateWins1", JSON.stringify(this.wins));
    }
  }

  retrieveWinsFromStorage() {
    var wins = "";
    if (this.name === "Surfer") {
      wins = JSON.parse(localStorage.getItem("surferWins1"));
    } else {
      wins = JSON.parse(localStorage.getItem("pirateWins1"));
    }
    return wins;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
