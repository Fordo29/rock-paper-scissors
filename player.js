class Player {
  constructor(name, tokenImg) {
    this.name = name;
    this.token = tokenImg;
    this.wins = 0;
    this.choice = "";
  }

  takeTurn(gameType) {
    if (this.name === "Surfer") {
      this.choice = playerInput;
    }  if (this.name === "Pirate" && gameType === "Spicy") {
      this.choice = spicyFighters[getRandomIndex(spicyFighters)];
    } else if (this.name === "Pirate" && gameType === "Classic") {
      this.choice = classicFighters[getRandomIndex(classicFighters)];
    }
  }

  saveWinsToStorage() {
    this.wins++;
    //add to local storage
  }

  retrieveWinsFromStorage() {
    //pull from local storage stuff here
  }

}

var classicFighters = ["Shark", "Crab", "Octopus"];
var spicyFighters = ["Shark", "Crab", "Octopus", "Turtle", "Mermaid"];

function getRandomIndex(array) {
   return Math.floor(Math.random() * array.length);
}
