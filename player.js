class Player {
  constructor(name, tokenImg) {
    this.name = name;
    this.token = tokenImg;
    this.wins = this.wins || 0;
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
    if (this.name === "Surfer") {
    localStorage.setItem('savedWins', JSON.stringify(this.wins));
    } else {
    localStorage.setItem('savedWins2', JSON.stringify(this.wins));
    }
  }

  retrieveWinsFromStorage() {
    var wins = '';
    if(this.name === "Surfer") {
      wins = JSON.parse(localStorage.getItem('savedWins'));
    } else {
      wins = JSON.parse(localStorage.getItem('savedWins2'));
    }
    return wins;
  }

}

function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
