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
    //add to local storage
  }

  retrieveWinsFromStorage() {
    //pull from local storage stuff here
  }

}


function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
