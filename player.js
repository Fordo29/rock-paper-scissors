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
      var classicFighters = ["Shark", "Crab", "Octopus"];
      this.choice = classicFighters[getRandomIndex(classicFighters)];
    } else if (gameType === "Spicy") {
      var spicyFighters = ["Shark", "Crab", "Octopus", "Turtle", "Mermaid"];
      this.choice = spicyFighters[getRandomIndex(spicyFighters)];
    }
  }

  saveWinsToStorage() {
    this.wins
    return localStorage.setItem('wins', JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    return JSON.parse(localStorage.getItem('wins'))
  }

}


function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
