class Player {
  constructor(name, tokenImg) {
    this.name = name;
    this.token = tokenImg;
    this.wins = 0;
    this.choice = "";
  }

  takeTurn(game.type) {
    if (this.name === "Surfer") {
      this.choice = playerInput
    } else if (this.name === "Pirate") {
      this.choice =
    }
    pirateChoice(classicFighters);


  }


  saveWinsToStorage() {
    this.wins++;
    //add to local storage
  }

  retrieveWinsFromStorage() {
    //pull from local storage stuff here
  }

}

// pirateChoice(array) {
//   this.pirateChoice = array[getRandomIndex(array)];
// }

// var classicFighters = ["Shark", "Crab", "Octopus"];
// var spicyFighters = ["Shark", "Crab", "Octopus", "Turtle", "Mermaid"];
//
// function getRandomIndex(array) {
//    return Math.floor(Math.random() * array.length);
// }
